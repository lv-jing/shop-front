import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumbs from '@/components/BreadCrumbs';
import SideMenu from '@/components/SideMenu';
import BannerTip from '@/components/BannerTip';
import Rate from '@/components/Rate';
import ReviewForm from './components/ReviewForm';
import { getGoodsList, addGoodsEvaluate } from '@/api/order';
//import ReviewList from './components/ReviewList';
import Skeleton from 'react-skeleton-loader';
import { myAccountActionPushEvent } from '@/utils/GA';
import { seoHoc } from '@/framework/common';
import Canonical from '@/components/Canonical';

@injectIntl
@seoHoc()
class ProductReview extends React.Component {
  constructor() {
    super();
    this.state = {
      orderId: 0,
      productList: [],
      purchaseRate: 0,
      logisticsRate: 0,
      productRate: 0,
      current: 1,
      reviewList: [],
      imgList: [],
      isSubmit: false,
      loading: false,
      title: '',
      titleList: [],
      errorMsg: ''
    };
    this.selectPurchaseRate = this.selectPurchaseRate.bind(this);
    this.selectLogisticsRate = this.selectLogisticsRate.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
    this.imgUploaderRef = React.createRef();
  }
  componentDidMount() {
    this.setState(
      {
        orderId: this.props.match.params.tid
      },
      () => {
        this.getGoodsList(this.state.orderId);
      }
    );
  }
  showErrMsg(msg) {
    this.setState({
      errorMsg: msg
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        errorMsg: ''
      });
    }, 3000);
  }
  selectPurchaseRate(rate) {
    this.setState({
      purchaseRate: rate
    });
  }
  selectLogisticsRate(rate) {
    this.setState({
      logisticsRate: rate
    });
  }
  updateCurrent(id) {
    this.setState({
      current: id
    });
  }
  async getGoodsList(orderId) {
    this.setState({
      loading: true
    });
    const res = await getGoodsList(orderId);
    this.setState({
      loading: false
    });
    const productList = res.context;
    const list = [];
    if (productList.length > 0) {
      productList.forEach((item) => {
        let obj = {
          id: item.skuId
        };
        list.push(obj);
      });
      this.setState({
        productList: productList,
        reviewList: list
      });
    }
  }
  handleSubmit = async () => {
    try {
      await this.handleSubmitPromise();
    } catch (err) {
      this.showErrMsg(err.message);
    }
  };
  async handleSubmitPromise() {
    try {
      const { purchaseRate, logisticsRate, reviewList: list } = this.state;
      const goodsParams = [];
      this.setState({
        isSubmit: true
      });
      if (!purchaseRate) {
        throw new Error(
          this.props.intl.messages['comment.noShoppingExperienceTip']
        );
      }
      if (!logisticsRate) {
        throw new Error(
          this.props.intl.messages['comment.noLogisticsRatingTip']
        );
      }
      if (list) {
        list.forEach((item) => {
          if (!item.productRate) {
            throw new Error(
              this.props.intl.messages['comment.noProductRatingTip']
            );
          }
          if (item.consumerComment.length > 500) {
            throw new Error(
              this.props.intl.messages['comment.commentsTooLong']
            );
          }
          let obj = {
            evaluateScore: item.productRate ? item.productRate : 0,
            evaluateContent: item.consumerComment,
            isAnonymous: item.isAnonymous ? 1 : 0,
            orderNo: this.state.orderId,
            goodsInfoId: item.id,
            goodsEvaluateImageList: item.goodsEvaluateImageList
              ? item.goodsEvaluateImageList
              : [],
            evaluateReviewTitle: item.title,
            // 服务类型产品 1  普通产品 0
            goodsTypeRelateEvaluate: 0
          };
          goodsParams.push(obj);
        });
      }
      const params = {
        goodsEvaluateAddRequest: goodsParams,
        storeEvaluateAddRequestList: {
          orderNo: this.state.orderId,
          serverScore: purchaseRate,
          logisticsScore: logisticsRate
        }
      };
      await addGoodsEvaluate(params);
      this.props.history.push('/account/orders');
    } catch (err) {
      throw new Error(err.message || err);
    }
  }
  handleConsumerCommentChange(e, product) {
    const value = e.target.value;
    const list = this.state.reviewList;
    if (list.length > 0) {
      list.forEach((item) => {
        if (item.id === product.skuId) {
          item.consumerComment = value;
        }
      });
    }
    this.setState(
      {
        reviewList: list
      },
      () => {
        console.log(this.state.reviewList, '-----------');
      }
    );
  }
  handleTitleChange(e, product) {
    const value = e.target.value;
    const list = this.state.reviewList;
    if (list.length > 0) {
      list.forEach((item) => {
        if (item.id === product.skuId) {
          item.title = value;
        }
      });
    }
    this.setState(
      {
        reviewList: list
      },
      () => {
        console.log(this.state.reviewList, '-----------');
      }
    );
  }

  handleInputChange(e, product) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const list = this.state.reviewList;
    const list2 = this.state.productList;
    if (list2.length > 0) {
      list2.forEach((item) => {
        if (item.skuId === product.skuId) {
          if (target.type === 'checkbox') {
            item.isAnonymous = value;
          }
        }
      });
    }
    if (list.length > 0) {
      list.forEach((item) => {
        if (item.id === product.skuId) {
          if (target.type === 'checkbox') {
            item.isAnonymous = value;
          }
        }
      });
    }
    this.setState({
      productList: list2,
      reviewList: list
    });
    // this.setState({
    //     [name]: value
    // });
  }

  selectProductRate(rate, product) {
    const list = this.state.reviewList;
    if (list.length > 0) {
      list.forEach((item) => {
        if (item.id === product.skuId) {
          item.productRate = rate;
        }
      });
    }
    this.setState({
      reviewList: list
    });
  }
  handleImgChange(imgRef, product) {
    myAccountActionPushEvent('Add picture');
    const list = this.state.reviewList;
    if (list.length > 0) {
      let imgsParam = [];
      list.forEach((item) => {
        if (item.id === product.skuId) {
          imgRef.current.state.imgList.forEach((item, i) => {
            let obj = {
              uid: i + 1,
              status: 'done',
              artworkUrl: item
            };
            imgsParam.push(obj);
          });
          item.goodsEvaluateImageList = imgsParam;
        }
      });
      this.setState({
        reviewList: list
      });
    }
  }
  render() {
    // const lang = this.props.intl.locale || 'en'
    const event = {
      page: {
        type: 'Account',
        theme: ''
      }
    };
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
          <div className="rc-padding--sm rc-max-width--xl">
            <div className="rc-layout-container rc-five-column">
              <SideMenu type="Orders" />
              <div className="my__account-content rc-column rc-quad-width rc-padding-top--xs--desktop">
                <div className="rc-border-bottom rc-border-colour--interface">
                  <h4 className="rc-delta rc-margin--none pb-2">
                    <FormattedMessage id="writeReview" />
                  </h4>
                </div>
                {/*main*/}
                {this.state.loading ? (
                  <Skeleton color="#f5f5f5" width="100%" height="100%" />
                ) : (
                  <div>
                    <div
                      className={`js-errorAlertProfile-personalInfo rc-margin-bottom--xs ${
                        this.state.errorMsg ? '' : 'hidden'
                      }`}
                    >
                      <aside
                        className="rc-alert rc-alert--error rc-alert--with-close errorAccount"
                        role="alert"
                      >
                        <span className="pl-0">{this.state.errorMsg}</span>
                        <button
                          className="rc-btn rc-alert__close rc-icon rc-close-error--xs"
                          onClick={() => {
                            this.setState({ errorMsg: '' });
                          }}
                          aria-label="Close"
                        >
                          <span className="rc-screen-reader-text">
                            <FormattedMessage id="close" />
                          </span>
                        </button>
                      </aside>
                    </div>
                    <div className="rc-border-bottom rc-border-colour--interface ">
                      <div className="rc-margin--none">
                        <div>
                          <div className="rc-column">
                            <div>
                              <span className=" rc-text-colour--text ui-text-overflow-line2 text-break">
                                <span
                                  className="rc-font-bold"
                                  style={{ fontWeight: '500' }}
                                >
                                  <FormattedMessage id="purchaseRating" />
                                </span>
                              </span>
                              <div className="rc-margin-top--xs">
                                <Rate
                                  def={this.state.purchaseRate}
                                  disabled={false}
                                  selectRate={this.selectPurchaseRate}
                                  marginSize="maxRate"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rc-border-bottom rc-border-colour--interface ">
                      <div className="rc-margin--none pb-2">
                        {/*rc-layout-container rc-one-column*/}
                        <div className="">
                          <div className="rc-column">
                            <div>
                              <span className=" rc-text-colour--text ui-text-overflow-line2 text-break">
                                <span
                                  className="rc-font-bold"
                                  style={{ fontWeight: '500' }}
                                >
                                  <FormattedMessage id="logisticsRating" />
                                </span>
                              </span>
                              <div className="rc-margin-top--xs">
                                <Rate
                                  def={this.state.logisticsRate}
                                  disabled={false}
                                  selectRate={this.selectLogisticsRate}
                                  marginSize="maxRate"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rc-border-bottom rc-border-colour--interface">
                      {/*<div className="rc-column rc-triple-width pad-left0 pad-right0">*/}
                      {/*    <ReviewList update={this.updateCurrent} />*/}
                      {/*</div>*/}
                      {/*<div className="rc-padding-right--xs rc-bg-colour--brand4"></div>*/}
                      {/*rc-double-width*/}
                      <div className="rc-column">
                        <div className="rc-padding-top--xs">
                          <span className=" rc-text-colour--text ui-text-overflow-line2 text-break">
                            <span
                              className="rc-font-bold "
                              style={{ fontWeight: '500' }}
                            >
                              <FormattedMessage id="productRating" />
                            </span>
                          </span>
                        </div>
                        {this.state.productList.length > 0
                          ? this.state.productList.map((item) => (
                              <ReviewForm
                                currentId={this.state.current}
                                product={item}
                                isSubmit={this.state.isSubmit}
                                handleImgChange={(imgRef, product) =>
                                  this.handleImgChange(imgRef, product)
                                }
                                selectProductRate={(rate, product) =>
                                  this.selectProductRate(rate, product)
                                }
                                handleConsumerCommentChange={(e, product) =>
                                  this.handleConsumerCommentChange(e, product)
                                }
                                handleTitleChange={(e, product) =>
                                  this.handleTitleChange(e, product)
                                }
                                handleInputChange={(e, product) =>
                                  this.handleInputChange(e, product)
                                }
                              />
                            ))
                          : null}
                      </div>
                    </div>
                    {this.state.productList.length > 0 ? (
                      <div className="rc-padding-top--sm">
                        <button
                          className="rc-btn rc-btn--sm rc-btn--two"
                          name="contactPreference"
                          type="submit"
                          onClick={this.handleSubmit}
                        >
                          <FormattedMessage id="submit" />
                        </button>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default ProductReview;
