import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import Skeleton from 'react-skeleton-loader';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerTip from '@/components/BannerTip';
import BreadCrumbs from '@/components/BreadCrumbs';
import LoginButton from '@/components/LoginButton';
import Help from './Help';
import { formatMoney, getRation } from '@/utils/utils';
import GoogleTagManager from '@/components/GoogleTagManager';
import { seoHoc } from '@/framework/common';

import catImg from '@/assets/images/product-finder-cat.jpg';
import dogImg from '@/assets/images/product-finder-dog.jpg';
import LazyLoad from 'react-lazyload';
import { clubSubscriptionSavePets } from '@/api/pet';
import Canonical from '@/components/Canonical';

const sessionItemRoyal = window.__.sessionItemRoyal;
const localItemRoyal = window.__.localItemRoyal;
const isHubGA = window.__.env.REACT_APP_HUB_GA;

function QListAndPetJSX(props) {
  const { questionlist, petBaseInfo, intl } = props;
  let sterilized = (petBaseInfo && petBaseInfo.sterilized) || '...';
  let sterilizedText = sterilized;
  if (sterilized.toLocaleLowerCase().includes('stérilisé')) {
    // 如果是法语
    sterilizedText = sterilized.includes('Non') ? 'Non' : 'Oui';
  }
  return (
    <div className="p-f-pet-box mt-4 pt-4 mb-4 pb-4">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 md:mb-0">
          <div className="border rounded">
            <p
              className="text-center mt-2 mb-0"
              style={{ fontSize: '1.25rem' }}
              onClick={props.toggleShowQList}
            >
              {props.summaryIcon}
              <FormattedMessage id="productFinder.summary" />
            </p>
            <LazyLoad style={{ height: '100%', width: '100%' }}>
              <img
                src={{ cat: catImg, dog: dogImg }[props.type]}
                style={{ width: '50%', margin: '0 auto' }}
                alt="pet image"
              />
            </LazyLoad>
            <ul className="rc-list rc-list--blank rc-list--align ml-2 mr-2">
              {questionlist.map((ele, i) => (
                <li
                  className={`d-flex justify-content-between align-items-center pt-1 pb-1 ${
                    i ? 'border-top' : ''
                  }`}
                  key={i}
                >
                  <span style={{ flex: 1 }}>
                    {ele.productFinderAnswerDetailsVO.prefix}
                    {ele.productFinderAnswerDetailsVO.prefix ? ' ' : null}
                    <span className="red">
                      {ele.productFinderAnswerDetailsVO.suffix}
                    </span>
                  </span>
                  <p
                    className="rc-styled-link mb-1 ml-2"
                    onClick={props.handleClickEditBtn.bind(this, ele)}
                    style={{ cursor: 'pointer' }}
                  >
                    <FormattedMessage id="edit" />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="border rounded pr-2 pl-2">
            <div className="row align-items-center mt-4 mb-2 md:mb-4">
              <div className="col-12 col-md-5 mb-4 md:mb-0">
                <LazyLoad style={{ height: '100%', width: '100%' }}>
                  <img
                    src={{ cat: catImg, dog: dogImg }[props.type]}
                    className="border"
                    style={{
                      borderRadius: '50%',
                      width: '50%',
                      margin: '0 auto'
                    }}
                    alt="pet image"
                  />
                </LazyLoad>
              </div>
              <div className="col-12 col-md-7 text-center md:text-left text-break">
                <div className="row">
                  <div className="col-6 mb-2 md:mb-0">
                    <FormattedMessage id="age" />
                    <br />
                    <span className="font-weight-normal">
                      {(petBaseInfo && petBaseInfo.age) || '...'}
                    </span>
                  </div>
                  <div className="col-6 mb-2 md:mb-0">
                    <FormattedMessage id="breed" />
                    <br />
                    <span className="font-weight-normal">
                      {(petBaseInfo && petBaseInfo.breed) || '...'}
                    </span>
                  </div>
                  <div className="col-6 mb-2 md:mb-0">
                    <FormattedMessage id="gender" />
                    <br />
                    <span className="font-weight-normal">
                      {(petBaseInfo && petBaseInfo.gender) || '...'}
                    </span>
                  </div>
                  <div className="col-6 mb-2 md:mb-0">
                    <FormattedMessage id="sterilized" />
                    <br />
                    <span className="font-weight-normal">{sterilizedText}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center pt-3 pb-3">
              <FormattedMessage id="productFinder.createMyPetProfileTip" />
              <br />
            </p>
            <div className="text-center pb-4">
              {props.isLogin ? (
                <Link className="rc-btn rc-btn--one mb-3" to="/account/pets">
                  <FormattedMessage id="productFinder.createMyPetProfile" />
                </Link>
              ) : (
                <LoginButton
                  beforeLoginCallback={async () => {
                    localItemRoyal.set('okta-redirectUrl', '/account/pets');
                  }}
                  btnClass="rc-btn rc-btn--one mb-3"
                  intl={intl}
                >
                  <FormattedMessage id="productFinder.createMyPetProfile" />
                </LoginButton>
              )}

              <br />
              <span
                className="rc-btn rc-btn--two mb-4 ui-cursor-pointer"
                onClick={props.handleClickGotoStart}
              >
                <FormattedMessage id="productFinder.startAgin" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

@inject('loginStore')
@injectIntl
@seoHoc('finder-recommendation')
@observer
class ProductFinderResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: localItemRoyal.get('pf-cache-type'),
      qListVisible: false,
      productDetail: null,
      isLoading: true,
      questionlist: [],
      petBaseInfo: null,
      petsId: ''
    };
  }
  async componentDidMount() {
    const res = sessionItemRoyal.get('pf-result');
    const questionlist = sessionItemRoyal.get('pf-questionlist');
    try {
      if (!localItemRoyal.get('pr-petsInfo') && this.props.loginStore.isLogin) {
        // await clubSubscriptionSavePets({
        //   questionParams: JSON.parse(res).queryParams
        // })
        //   .then((res) => {
        //     if (res.code === 'K-000000') {
        //       let petsInfo = res.context;
        //       localItemRoyal.set('pr-petsInfo', petsInfo);
        //       this.setState({ petsId: petsInfo });
        //     }
        //   })
        //   .catch((err) => {});
      }
    } catch (e) {
      console.log(e, 'eeee');
    }
    if (res) {
      let productDetail = JSON.parse(res);
      if (!productDetail.mainProduct || !productDetail.otherProducts) {
        this.props.history.push('/product-finder-noresult');
        return;
      }
      const parsedQuestionlist = questionlist ? JSON.parse(questionlist) : null;
      const ageItem = parsedQuestionlist.filter(
        (ele) => ele.questionName === 'age'
      );
      const breedItem = parsedQuestionlist.filter(
        (ele) => ele.questionName === 'breedCode'
      );
      const genderItem = parsedQuestionlist.filter(
        (ele) => ele.questionName === 'genderCode'
      );
      const neuteredItem = parsedQuestionlist.filter(
        (ele) => ele.questionName === 'neutered'
      );
      let { mainProduct, otherProducts } = productDetail;
      let productArr = [mainProduct, ...otherProducts];
      let spuNoList = productArr?.map((el) => el.spuCode);
      let rationsParams = { ...productDetail.queryParams, spuNoList };
      try {
        let rationRes = await getRation(rationsParams);
        let rations = rationRes?.context?.rationResponseItems;
        rations?.forEach((ration) => {
          if (mainProduct.spuCode == ration.mainItem) {
            mainProduct.petsRation = `${Math.round(ration.weight)}${
              ration.weightUnit
            }/${this.props.intl.messages['day-unit']}`;
          }
          otherProducts?.map((el) => {
            if (el.spuCode == ration.mainItem) {
              el.petsRation = `${Math.round(ration.weight)}${
                ration.weightUnit
              }/${this.props.intl.messages['day-unit']}`;
            }
          });
        });
      } catch (err) {
        console.info(err.message);
      }

      this.setState({
        productDetail: productDetail,
        questionlist: parsedQuestionlist,
        petBaseInfo: {
          age: ageItem.length
            ? ageItem[0].productFinderAnswerDetailsVO.suffix
            : '',
          breed: breedItem.length
            ? breedItem[0].productFinderAnswerDetailsVO.suffix
            : '',
          gender: genderItem.length
            ? genderItem[0].productFinderAnswerDetailsVO.suffix
            : '',
          sterilized: neuteredItem.length
            ? neuteredItem[0].productFinderAnswerDetailsVO.suffix
            : ''
        },
        isLoading: false
      });
      let allGoods = JSON.parse(res);
      // let goodsList = [allGoods.mainProduct,...allGoods.otherProducts]
      let goodsList = [allGoods.mainProduct];
      //(!isHubGA)&&this.GAProductImpression(goodsList)
      this.GAProductImpression(goodsList);
    } else {
      this.props.history.push('/product-finder');
    }
  }
  get isLogin() {
    return this.props.loginStore.isLogin;
  }
  // 商品列表 埋点
  GAProductImpression = (productList, totalElements = {}, keywords = '') => {
    const impressions = productList.map((item, index) => {
      return {
        name: item.goodsName,
        // id: item.goodsInfos[0].goodsInfoId,
        id: item.spuCode,
        club: 'no',
        brand: item.goodsBrand.brandName,
        price: item.fromPrice,
        category: item.goodsCate.cateName,
        list: 'Related Items',
        position: index,
        sku: item.goodsInfos.length && item.goodsInfos[0].goodsInfoNo
      };
    });

    // if (dataLayer[0] && dataLayer[0].search) {
    //   dataLayer[0].search.query = keywords;
    //   dataLayer[0].search.results = totalElements;
    //   dataLayer[0].search.type = 'with results';
    // }

    window?.dataLayer?.push({
      event: `${window.__.env.REACT_APP_GTM_SITE_ID}eComProductImpression`,
      ecommerce: {
        impressions: impressions
      }
    });
  };
  //点击商品 埋点
  GAProductClick = (item, index) => {
    console.info('test', item);
    window?.dataLayer?.push({
      event: `${window.__.env.REACT_APP_GTM_SITE_ID}eComProductClick`,
      ecommerce: {
        click: {
          actionField: { list: 'Related Items' }, //?list's name where the product was clicked from (Catalogue, Homepage, Search Results)
          products: [
            {
              name: item.goodsName,
              // id: item.goodsInfos[0].goodsInfoId,
              id: item.spuCode,
              club: 'no',
              brand: item.goodsBrand.brandName,
              category: item.goodsCate.cateName,
              list: 'Related Items',
              position: index,
              sku: item.goodsInfos.length && item.goodsInfos[0].goodsInfoNo
            }
          ]
        }
      }
    });
  };
  toggleShowQList = () => {
    this.setState((curState) => ({ qListVisible: !curState.qListVisible }));
  };
  handleClickEditBtn = (ele) => {
    sessionItemRoyal.set('pf-edit-order', ele.stepOrder);
    this.props.history.push(`/product-finder`);
  };
  handleClickGotoStart = () => {
    const { type } = this.state;
    localItemRoyal.remove(`pf-cache-type`);
    localItemRoyal.remove(`pf-cache-${type}-question`);
    sessionItemRoyal.remove('pf-edit-order');
    this.props.history.push(`/product-finder`);
  };
  productDailyRation = (rations) =>
    rations && (
      <div
        style={{
          textAlign: 'center',
          background: '#f9f9f9',
          color: '#000',
          maxWidth: '400px',
          margin: '0 auto'
        }}
        className="text-center rc-padding--xs"
      >
        <div style={{ fontSize: '12px' }}>
          <FormattedMessage id="subscription.dailyRation" />
        </div>
        <div style={{ fontSize: '1rem' }} className="rc-padding-bottom--xs">
          {rations}
        </div>
      </div>
    );
  render() {
    const { location, history, match } = this.props;
    const event = {
      page: {
        type: 'Poduct-Finder-Recommandation',
        theme: '',
        path: location.pathname,
        error: '',
        hitTimestamp: new Date(),
        filters: ''
      }
    };
    const {
      productDetail,
      qListVisible,
      isLoading,
      type,
      questionlist,
      petBaseInfo
    } = this.state;
    console.log(productDetail, 'productDetails');
    return (
      <div>
        <GoogleTagManager
          key={this.props.location.key}
          additionalEvents={event}
        />
        <Canonical />
        <Header {...this.props} showMiniIcons={true} showUserIcon={true} />
        <main className="rc-content--fixed-header rc-main-content__wrapper rc-bg-colour--brand3">
          <BannerTip />
          <BreadCrumbs />
          <div className="rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile p-f-product-results">
            {isLoading ? (
              <div className="mt-4">
                <Skeleton color="#f5f5f5" width="100%" height="50%" count={4} />
              </div>
            ) : (
              <div>
                {!qListVisible && (
                  <div className="text-center mb-3 rc-md-down">
                    <div
                      className="rc-bg-colour--brand4 text-center rounded ui-cursor-pointer-pure inlineblock pl-4 pr-4"
                      onClick={this.toggleShowQList}
                    >
                      {qListVisible ? (
                        <span className="rc-icon rc-down--xs rc-iconography mr-2" />
                      ) : (
                        <span className="rc-icon rc-right--xs rc-iconography mr-2" />
                      )}
                      <FormattedMessage id="productFinder.summary" />
                    </div>
                  </div>
                )}
                {qListVisible && (
                  <div>
                    <QListAndPetJSX
                      {...this.props}
                      summaryIcon={
                        <span className="rc-icon rc-down--xs rc-iconography" />
                      }
                      type={type}
                      toggleShowQList={this.toggleShowQList}
                      history={history}
                      isLogin={this.isLogin}
                      questionlist={questionlist}
                      handleClickEditBtn={this.handleClickEditBtn}
                      handleClickGotoStart={this.handleClickGotoStart}
                      petBaseInfo={petBaseInfo}
                    />
                  </div>
                )}

                <h2 className="rc-beta markup-text mb-0 text-center">
                  <FormattedMessage id="productFinder.searchCompleted" />
                </h2>
                <p className="text-center" style={{ fontSize: '1.25rem' }}>
                  {type === 'dog' ? (
                    <FormattedMessage id="productFinder.searchResultTip1ForDog" />
                  ) : (
                    <FormattedMessage id="productFinder.searchResultTip1ForCat" />
                  )}

                  <br />
                  <FormattedMessage id="productFinder.searchResultTip2" />
                </p>
                <div className="p-f-result-box">
                  <div className="border rounded row pt-3 pb-3">
                    <div className="col-12 col-md-6">
                      <LazyLoad style={{ height: '100%', width: '100%' }}>
                        <img
                          src={
                            productDetail.mainProduct.goodsImg ||
                            productDetail.mainProduct.goodsInfos.sort(
                              (a, b) => a.marketPrice - b.marketPrice
                            )[0].goodsInfoImg
                          }
                          className="p-img"
                          alt="goods information image"
                        />
                      </LazyLoad>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                      <header className="rc-text--center">
                        <h3
                          className="rc-card__title rc-gamma ui-text-overflow-line2 text-break mb-1 TitleFitScreen"
                          title={productDetail.mainProduct.goodsName}
                        >
                          {productDetail.mainProduct.goodsName}
                        </h3>
                      </header>
                      <div
                        className="ui-text-overflow-line1 text-break sub-hover text-center SubTitleScreen"
                        title={productDetail.mainProduct.subTitle}
                      >
                        {productDetail.mainProduct.subTitle}
                      </div>
                      {this.productDailyRation(
                        productDetail.mainProduct?.petsRation
                      )}

                      <div className="text-center mt-2 card--product-contaner-price">
                        {productDetail.mainProduct?.toPrice ? (
                          <FormattedMessage
                            id="pirceRange"
                            values={{
                              fromPrice: (
                                <span className="contaner-price__value">
                                  {formatMoney(
                                    productDetail.mainProduct.fromPrice
                                  )}
                                </span>
                              ),
                              toPrice: (
                                <span className="contaner-price__value">
                                  {formatMoney(
                                    productDetail.mainProduct.toPrice
                                  )}
                                </span>
                              )
                            }}
                          />
                        ) : (
                          <span className="contaner-price__value">
                            {formatMoney(productDetail.mainProduct.fromPrice)}
                          </span>
                        )}
                      </div>
                      <div
                        className="d-flex justify-content-center mt-3 testtest"
                        onClick={() => {
                          this.GAProductClick(productDetail.mainProduct, 0);
                        }}
                      >
                        <Link
                          to={`/${productDetail.mainProduct.lowGoodsName
                            .toLowerCase()
                            .split(' ')
                            .join('-')
                            .replace('/', '')}-${
                            productDetail.mainProduct.spuCode
                          }`}
                          className="rc-btn rc-btn--one rc-btn--sm"
                        >
                          <FormattedMessage id="seeTheProduct" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row flex-nowrap mt-2">
                    <span className="rc-icon rc-incompatible--xs rc-iconography" />
                    <p style={{ fontSize: '.66em' }}>
                      <FormattedMessage id="productFinder.searchResultWarningTip1" />
                    </p>
                  </div>
                </div>
                <p className="text-center" style={{ fontSize: '1.4rem' }}>
                  <FormattedMessage id="productFinder.otherProductsToConsider" />
                </p>
                <div className="p-f-other-box rc-scroll--x pb-4">
                  <div className="d-flex">
                    {productDetail.otherProducts.map((ele, i) => (
                      <div
                        className={`border rounded pt-3 pb-3 pl-2 pr-2 md:pl-0 md:pr-0 ${
                          i ? 'ml-2' : ''
                        }`}
                        key={ele.id}
                        style={{ flex: 1 }}
                      >
                        <div className="mb-3" style={{ minHeight: '12rem' }}>
                          <LazyLoad style={{ height: '100%', width: '100%' }}>
                            <img
                              src={
                                ele.goodsImg ||
                                ele.goodsInfos.sort(
                                  (a, b) => a.marketPrice - b.marketPrice
                                )[0].goodsInfoImg
                              }
                              className="p-img"
                              alt="goods information image"
                            />
                          </LazyLoad>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <header className="rc-text--center">
                            <h3
                              className="rc-card__title rc-gamma ui-text-overflow-line2 text-break mb-1 TitleFitScreen p-f-product-title"
                              title={ele.goodsName}
                            >
                              {ele.goodsName}
                            </h3>
                          </header>
                          <div
                            className="ui-text-overflow-line1 text-break sub-hover text-center SubTitleScreen"
                            title={ele.subTitle}
                          >
                            {ele.subTitle}
                          </div>
                          {this.productDailyRation(ele?.petsRation)}
                          <div className="text-center mt-2 card--product-contaner-price">
                            {ele.toPrice ? (
                              <FormattedMessage
                                id="pirceRange"
                                values={{
                                  fromPrice: (
                                    <span className="contaner-price__value">
                                      {formatMoney(ele.fromPrice)}
                                    </span>
                                  ),
                                  toPrice: (
                                    <span className="contaner-price__value">
                                      {formatMoney(ele.toPrice)}
                                    </span>
                                  )
                                }}
                              />
                            ) : (
                              <span className="contaner-price__value">
                                {formatMoney(ele.fromPrice)}
                              </span>
                            )}
                          </div>
                          <div
                            className="d-flex justify-content-center mt-3"
                            // onClick={()=>{
                            //   this.GAProductClick(ele, i+1)
                            // }}
                          >
                            <Link
                              to={`/${ele.lowGoodsName
                                .toLowerCase()
                                .split(' ')
                                .join('-')
                                .replace('/', '')}-${ele.spuCode}`}
                              className="rc-btn rc-btn--one rc-btn--sm"
                            >
                              <FormattedMessage id="seeTheProduct" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rc-md-up">
                  <QListAndPetJSX
                    type={type}
                    toggleShowQList={this.toggleShowQList}
                    history={history}
                    isLogin={this.isLogin}
                    questionlist={questionlist}
                    handleClickEditBtn={this.handleClickEditBtn}
                    handleClickGotoStart={this.handleClickGotoStart}
                    petBaseInfo={petBaseInfo}
                  />
                </div>
              </div>
            )}
          </div>
          <hr />
          <div className="rc-layout-container rc-one-column rc-max-width--md rc-padding-x--none--mobile rc-padding-top--md rc-padding-bottom--lg">
            <div className="rc-full-width rc-text--center rc-padding-x--sm rc-padding-x--lg--mobile">
              <p className="text-center pt-3" style={{ fontSize: '1.3rem' }}>
                <FormattedMessage id="productFinder.helpTip1" />
              </p>
              <p className="rc-meta rc-margin-y--lg--mobile">
                <FormattedMessage id="productFinder.helpTip2" />
              </p>
            </div>

            <Help />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default ProductFinderResult;
