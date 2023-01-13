import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import LazyLoad from 'react-lazyload';
import { optimizeImage } from '@/utils/utils';

import './modules/css/Advantage.less';

export function Advantage() {
  const defaultList = [
    {
      imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/pack@2x.png`,
      imgAlt: 'pack icon',
      text: <FormattedMessage id="home.whyShopRoyalCanin.findDiet" />
    },
    {
      imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/autoship@2x.png`,
      imgAlt: 'autoship icon',
      text: <FormattedMessage id="home.whyShopRoyalCanin.autoShip" />
    },
    {
      imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/delivery@2x.png`,
      imgAlt: 'delivery icon',
      text: <FormattedMessage id="home.whyShopRoyalCanin.goodDelivery" />
    },
    {
      imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/question@2x.png`,
      imgAlt: 'question icon',
      text: <FormattedMessage id="home.whyShopRoyalCanin.goodAfterService" />
    }
  ];

  const list =
    {
      us: [
        {
          imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/CLUB-BENEFITS_PRODUCT-RECOS@x2.png`,
          imgAlt: 'ideal formula',
          text: 'Expert recommendations on food tailored to your pet’s needs'
        },
        {
          imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/CLUB-BENEFITS_DISCOUNT@x2.png`,
          imgAlt: 'club benefits',
          text: '5% off every autoship order'
        },
        {
          imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/CLUB-BENEFITS_FREE-SHIPPING@x2.png`,
          imgAlt: 'Free Automatic Shipping',
          text: 'Free automatic shipping – no minimum purchase'
        },
        {
          imgUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/COHORT-A_CLUB-BENEFITS_PET-ADVISOR2@x2.png`,
          imgAlt: 'Welcome Box',
          text: 'Expert feeding advice, product updates and support from a Royal Canin Advisor'
        }
      ]
    }[window.__.env.REACT_APP_COUNTRY] || defaultList;

  return list.map((item, i) => (
    <div
      className={`col-12 col-md-6 col-xxl-${
        12 / list.length
      } d-flex px-0 md:pl-0 md:pr-2 pr-xxl-3 pl-xxl-0 justify-content-center`}
      key={i}
    >
      <div className="d-flex justify-content-center align-items-center w-100 value-proposition__content">
        <LazyLoad height={200}>
          <img
            className="value-proposition__img"
            style={{ width: '80px' }}
            src={optimizeImage({ originImageUrl: item.imgUrl, width: 80 })}
            alt={item.imgAlt}
            title=""
          />
        </LazyLoad>

        <div className="pl-3 d-flex align-items-center value-proposition__text">
          <p className="rc-margin-bottom--none rc-intro text-left">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  ));
}

export function JpAdvantage() {
  return (
    <section className="experience-component experience-layouts-1column">
      <div className="row rc-margin-x--none">
        <div className="rc-full-width">
          <div className="rc-max-width--xl rc-padding-y--sm">
            <div class="rc-max-width--md text-center rc-margin-y--md rc-padding-x--sm">
              <div className="rc-margin-bottom--xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 223 83.75"
                  class="rc-header__logo"
                  data-js-import-interactive-svg="true"
                  svg-animate-processed="true"
                >
                  <path
                    class="cls-1 rc-header__logo-text"
                    d="M190.1 79.3a3.2 3.2 0 1 0 6.4 0V56.6a3.2 3.2 0 1 0-6.4 0zm-93.4-3.1a.27.27 0 0 1-.3-.3V57a3.2 3.2 0 0 0-6.4 0v23.4a1.69 1.69 0 0 0 1.7 1.7H103a3 3 0 0 0 0-6zm76-20.1a4.18 4.18 0 0 0-7.8 1.9v21.5a3 3 0 0 0 3 3h.1a3 3 0 0 0 3.1-3V66.4a.22.22 0 0 1 .2-.2l.1.1 7.9 13.8a3.92 3.92 0 0 0 3.5 2.1 4 4 0 0 0 4-4v-22a3 3 0 1 0-6 0v13.2l-.2.2-.1-.1zm35.2 0a4.18 4.18 0 0 0-7.8 1.9v21.6a3 3 0 0 0 3 3h.1a3 3 0 0 0 3.1-3V66.5a.22.22 0 0 1 .2-.2l.1.1 7.9 13.8a3.92 3.92 0 0 0 3.5 2.1 4 4 0 0 0 4-4v-22a3 3 0 0 0-6 0v13.2l-.2.2-.1-.1zM58.8 62.4c-.1 0-.3 0-.3-.1l-7-7.4a3 3 0 0 0-5.2 2.1 3 3 0 0 0 .8 2l8.5 9.8.1 10.4a3 3 0 0 0 6 0l.1-10.4 8.5-9.8a3.18 3.18 0 0 0 .8-2 3 3 0 0 0-5.2-2.1l-7 7.4c.1.1 0 .1-.1.1zm-24-1.8a7.6 7.6 0 1 1-7.6 7.6 7.6 7.6 0 0 1 7.6-7.6zm14.1 7.6a14 14 0 1 0 0 .2v-.2zM150 70.1v.1a.22.22 0 0 1-.2.2h-2.9v-4.6zm-3.8-15.2a3.7 3.7 0 0 0-2.4-1.2c-1.7 0-3.2.9-3.2 2.6v22.6a3.12 3.12 0 0 0 3.1 3.1 3.2 3.2 0 0 0 3.2-3.1v-2.4h7.7l3.2 4.4a3.42 3.42 0 0 0 2.4 1.3 3 3 0 0 0 3-3 2.79 2.79 0 0 0-.6-1.8zM79.7 65.8v4.6h-2.9a.22.22 0 0 1-.2-.2v-.1zM63.8 77.3a3 3 0 0 0-.6 1.8 3 3 0 0 0 3 3 2.81 2.81 0 0 0 2.4-1.3l3.2-4.4h7.7v2.5a3.2 3.2 0 0 0 3.2 3.1 3.12 3.12 0 0 0 3.1-3.1v-22a3.22 3.22 0 0 0-3.2-3.2 3 3 0 0 0-2.4 1.2zm50.5-9a14 14 0 0 0 13.3 14.1c4 0 8.3-1.7 10.6-4.5a3.06 3.06 0 0 0 .7-2 3 3 0 0 0-3-3 3.19 3.19 0 0 0-1.4.3l-2.4 1.6a7.21 7.21 0 0 1-4 1.2 7.75 7.75 0 0 1 0-15.5 7.21 7.21 0 0 1 4 1.2l2.4 1.6a2.88 2.88 0 0 0 4-1.3 3.19 3.19 0 0 0 .3-1.4 3.06 3.06 0 0 0-.7-2 12.24 12.24 0 0 0-9.8-4.4 13.87 13.87 0 0 0-14.1 13.7.76.76 0 0 1 .1.4zM10.4 60.5a3.2 3.2 0 0 1 3.3 3 3.14 3.14 0 0 1-3.3 3h-.1A3.12 3.12 0 0 1 7 63.6a3.37 3.37 0 0 1 3.4-3.1zM1.8 79.3a3.08 3.08 0 0 0 3 3 3.08 3.08 0 0 0 3-3l.1-7.5a.32.32 0 0 1 .3-.3h.1l7.4 10a3 3 0 0 0 2 .8 3.06 3.06 0 0 0 3-2.9 2.2 2.2 0 0 0-.4-1.3l-4.6-7.3a8.1 8.1 0 0 0 4-7.2 9.33 9.33 0 0 0-9-9.5h-.2a9.17 9.17 0 0 0-6.9 2.4c-1.9 1.7-2.4 4.3-2.4 7z"
                    fill="#e2001a"
                  ></path>
                  <path
                    class="cls-1 rc-header__logo-crown"
                    d="M86.6 43.4a2.22 2.22 0 0 1-2-1 2.54 2.54 0 0 1 .5-3.5c6.6-4.8 16.6-7.8 26.9-7.8 10.3 0 20.2 2.9 26.8 7.8a2.41 2.41 0 0 1 .5 3.4.1.1 0 0 1-.1.1 2.53 2.53 0 0 1-3.5.5c-4.4-3.3-13-6.8-23.9-6.8-10.9 0-19.5 3.5-23.9 6.8a1.9 1.9 0 0 1-1.3.5zm2.2 4.1a1.69 1.69 0 0 0 1-.3c5-4.2 13.5-6.7 22-6.7s16.8 2.5 21.9 6.7a1.73 1.73 0 0 0 2.4-.2 1.86 1.86 0 0 0-.2-2.5c-5.7-4.6-14.7-7.5-24.1-7.5s-18.4 2.8-24.1 7.5a1.73 1.73 0 0 0-.2 2.4 1.61 1.61 0 0 0 1.3.6zM75.7 12a6 6 0 0 0-2.9.8 6.34 6.34 0 0 0-2.7 3.5 6.16 6.16 0 0 0 .6 4.2 5.72 5.72 0 0 0 4.8 2.8 5.1 5.1 0 0 0 2.9-.8 6.34 6.34 0 0 0 2.7-3.5 6.44 6.44 0 0 0-.6-4.3 5.85 5.85 0 0 0-4.8-2.7zm36.2 4.4a5.7 5.7 0 0 0-5.7 5.7 5.7 5.7 0 1 0 11.4 0 5.7 5.7 0 0 0-5.7-5.7zm0-14.2a5.7 5.7 0 0 0-5.7 5.7 5.63 5.63 0 0 0 5.7 5.7 5.7 5.7 0 0 0 0-11.4zm-15 16.1a7.72 7.72 0 0 0-1.5.2 5.63 5.63 0 0 0-4 6.8v.2a5.89 5.89 0 0 0 5.4 4.2h.2a6.75 6.75 0 0 0 1.4-.2 5.57 5.57 0 0 0 3.5-2.7 6.36 6.36 0 0 0 .6-4.3 6.25 6.25 0 0 0-5.6-4.2zm-14.1 5.9a6 6 0 0 0-2.9.8 6.47 6.47 0 0 0-2.7 3.4 6.44 6.44 0 0 0 .6 4.3 5.62 5.62 0 0 0 4.8 2.7 6 6 0 0 0 2.9-.8 6.34 6.34 0 0 0 2.7-3.5 6.44 6.44 0 0 0-.6-4.3 5.5 5.5 0 0 0-4.8-2.6zm45.7-5.6a7.72 7.72 0 0 0-1.5-.2 5.64 5.64 0 0 0-1.5 11.1 7.72 7.72 0 0 0 1.5.2 5.74 5.74 0 0 0 5.7-5.6 5.67 5.67 0 0 0-4.2-5.5zm3.7-13.7a7.72 7.72 0 0 0-1.5-.2 5.74 5.74 0 0 0-5.7 5.6 5.76 5.76 0 0 0 4.2 5.5 7.72 7.72 0 0 0 1.5.2 5.58 5.58 0 0 0 5.4-4.1 5.4 5.4 0 0 0-3.6-6.8c-.1-.2-.2-.2-.3-.2zm11.7 20.2a6 6 0 0 0-2.9-.8 5.54 5.54 0 0 0-4.9 2.8 5.74 5.74 0 0 0 2 7.8 6 6 0 0 0 2.9.8 5.88 5.88 0 0 0 4.9-2.8 5.39 5.39 0 0 0 .6-4.3 4.79 4.79 0 0 0-2.6-3.5zm9.9-8.8a5.42 5.42 0 0 0-2.6-3.5 6 6 0 0 0-2.9-.8 5.88 5.88 0 0 0-4.9 2.8 5.39 5.39 0 0 0-.6 4.3 5.15 5.15 0 0 0 2.7 3.4 6 6 0 0 0 2.9.8 5.47 5.47 0 0 0 4.8-2.8 6.16 6.16 0 0 0 .6-4.2zm-60.7-.2a7.72 7.72 0 0 0 1.5-.2 5.65 5.65 0 0 0-1.5-11.1 7.72 7.72 0 0 0-1.5.2 5.63 5.63 0 0 0-4 6.8v.2a6.16 6.16 0 0 0 5.5 4.1z"
                    fill="#e2001a"
                  ></path>
                </svg>
              </div>
              <h3 class="rc-large-body text-center">
                <b>
                  <FormattedMessage id="home.convenientTitle" />​
                </b>
              </h3>
            </div>
            <div className="jp-benefits rc-margin-bottom--sm">
              <dl>
                <dt>
                  <img
                    src={optimizeImage({
                      originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/jp_icon1.png`,
                      width: 100
                    })}
                    width="100"
                    alt="advantage icon"
                  />
                </dt>
                <dd>
                  <FormattedMessage
                    id="home.Advantage.advantage1"
                    values={{ val: <br /> }}
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src={optimizeImage({
                      originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/jp_icon2.png`,
                      width: 100
                    })}
                    width="100"
                    alt="advantage icon"
                  />
                </dt>
                <dd>
                  <FormattedMessage
                    id="home.Advantage.advantage2"
                    values={{ val: <br /> }}
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src={optimizeImage({
                      originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/jp_icon3.png`,
                      width: 100
                    })}
                    width="100"
                    alt="advantage icon"
                  />
                </dt>
                <dd>
                  <FormattedMessage
                    id="home.Advantage.advantage3"
                    values={{ val: <br /> }}
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src={optimizeImage({
                      originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/jp_icon4.png`,
                      width: 100
                    })}
                    width="100"
                    alt="advantage icon"
                  />
                </dt>
                <dd>
                  <FormattedMessage
                    id="home.Advantage.advantage4"
                    values={{ val: <br /> }}
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src={optimizeImage({
                      originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/jp_icon5.png`,
                      width: 100
                    })}
                    width="100"
                    alt="advantage icon"
                  />
                </dt>
                <dd>
                  <FormattedMessage
                    id="home.Advantage.advantage5"
                    values={{ val: <br /> }}
                  />
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
