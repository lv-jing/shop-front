/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import stores from '@/store';
import { FormattedMessage } from 'react-intl-phraseapp';
import { getToken } from '@/api/login';
import { getCustomerInfo } from '@/api/user';
import { mergeUnloginCartData, bindSubmitParam } from '@/utils/utils';
import { userBindConsent } from '@/api/consent';
// import Modal from '@/components/Modal';
import LimitLoginModal from '@/views/Home/modules/LimitLoginModal';
import loginRedirection from '@/lib/login-redirection';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

const sessionItemRoyal = window.__.sessionItemRoyal;
const localItemRoyal = window.__.localItemRoyal;
const loginStore = stores.loginStore;
const checkoutStore = stores.checkoutStore;

const LoginButton = (props) => {
  if (sessionItemRoyal.get('rc-guestId')) return <></>;
  const { intl } = props;
  const history = useHistory();
  const init = props.init;
  const [, setUserInfo] = useState(null);
  const [isGetUserInfoDown, setIsGetUserInfoDown] = useState(false);
  const { oktaAuth } = useOktaAuth();
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (isGetUserInfoDown && init) {
      init();
    }
  }, [isGetUserInfoDown, init]);

  useEffect(() => {
    setIsGetUserInfoDown(false);
    // console.log('OKTA authState:', authState);
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
      const parametersString = history && history.location.search;
      if (!parametersString) {
        return;
      }
    } else {
      loginStore.changeLoginModal(true);
      oktaAuth
        .getUser()
        .then((info) => {
          // Cross-store login: 跨店铺登录后需要logout再登录
          if (
            loginStore?.userInfo?.email &&
            info?.email !== loginStore?.userInfo.email &&
            localItemRoyal.get('okta-session-token')
          ) {
            localItemRoyal.set('login-again', true);
            const idToken = authState.idToken;
            const redirectUri =
              window.location.origin + window.__.env.REACT_APP_HOMEPAGE;
            window.location.href = `${
              window.__.env.REACT_APP_ISSUER
            }/v1/logout?id_token_hint=${
              idToken ? idToken.value : ''
            }&post_logout_redirect_uri=${redirectUri}`;
          }
          setUserInfo(info);
          localItemRoyal.set('customer-okta-id', info.sub);
          const oktaTokenString = authState.accessToken
            ? authState.accessToken.value
            : '';
          let oktaToken = 'Bearer ' + oktaTokenString;
          localItemRoyal.set('oktaToken', oktaToken);
          const consentString = localItemRoyal.get('rc-consent-list');
          if (consentString && loginStore.isLogin) {
            // 自动登录后，注册consent
            var consents = JSON.parse(consentString);
            let submitParam = bindSubmitParam(consents);
            // 不知道能不能拿到customerId
            let customerId =
              loginStore.userInfo && loginStore.userInfo.customerId;
            userBindConsent({
              ...submitParam,
              ...{ oktaToken },
              customerId
            })
              .then((res) => {
                setIsGetUserInfoDown(true);
                loginStore.changeLoginModal(false);
              })
              .catch((e) => {
                console.log(e);
                loginStore.changeLoginModal(false);
              });
          } else {
            if (!loginStore.isLogin) {
              getToken({ oktaToken: oktaToken })
                .then(async (res) => {
                  // GA 登录成功埋点 start
                  window.dataLayer &&
                    window.dataLayer.push({
                      event: `${window.__.env.REACT_APP_GTM_SITE_ID}loginAccess`,
                      interaction: {
                        category: 'registration',
                        action: 'login',
                        label: '',
                        value: 1
                      }
                    });
                  // GA 登陆成功埋点 end
                  let userinfo = res.context.customerDetail;
                  loginStore.changeLoginModal(false);
                  loginStore.changeIsLogin(true);

                  localItemRoyal.set('rc-token', res.context.token);
                  //debugger;
                  let customerInfoRes = await getCustomerInfo({
                    customerId: res.context.customerId
                  });
                  userinfo.defaultClinics =
                    customerInfoRes.context.defaultClinics;

                  loginStore.setUserInfo(customerInfoRes.context);
                  // 去除cart页面不合并购物车逻辑，因为现在登录后不会回到tmpUrl所指页面
                  if (
                    // tmpUrl !== '/cart' &&
                    checkoutStore.cartData.length
                  ) {
                    await mergeUnloginCartData();
                    await checkoutStore.updateLoginCart({
                      delFlag: 1,
                      intl
                    }); // indv登录的时候需要查询到相应的数据
                  }

                  setIsGetUserInfoDown(true);
                })
                .catch((e) => {
                  console.log('Get JWT Token Failed:', e);
                  loginStore.changeLoginModal(false);
                });
            } else {
              loginStore.changeLoginModal(false);
              setIsGetUserInfoDown(true);
            }
          }
        })
        .catch((e) => {
          console.log('Get OKTA User Failed:', e);
          loginStore.changeLoginModal(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    const { beforeLoginCallback, callbackUrl } = props;
    try {
      sessionItemRoyal.remove('rc-token-lose');
      localItemRoyal.set(
        'okta-redirectUrl',
        history?.location.pathname + history?.location.search
      );

      beforeLoginCallback && (await beforeLoginCallback());
      oktaAuth.signInWithRedirect(
        callbackUrl || window.__.env.REACT_APP_HOMEPAGE
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LimitLoginModal />
      <button
        className={cn(
          props.btnClass || props.className || 'rc-btn rc-btn--one bg-rc-red'
        )}
        style={props.btnStyle || {}}
        onClick={login}
        ref={props.buttonRef}
        id="J-btn-login"
      >
        {props.children || <FormattedMessage id="login" />}
      </button>
    </>
  );
};
export default LoginButton;
