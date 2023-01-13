import React, { Component } from 'react';
import { queryStoreCateList } from '@/utils/utils';
import { FormattedMessage } from 'react-intl-phraseapp';
import Skeleton from 'react-skeleton-loader';
import { Link } from 'react-router-dom';
import './css/HubSalesCategory.less';
import { optimizeImage } from '@/utils/utils';

export default class HubSalesCategory extends Component {
  static defaultProps = {
    rule: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      cateGoryList_cat: [],
      cateGoryList_dog: [],
      listLoading: true
    };
  }
  componentDidMount() {
    queryStoreCateList().then((res) => {
      this.setState({ listLoading: false });
      this.rebindCategoryList(res);
    });
  }
  rebindCategoryList(res) {
    const { rule } = this.props;
    let cateGoryList_dog = [];
    let cateGoryList_cat = [];
    cateGoryList_dog = res
      .filter((item) => {
        return rule(item, 'dog');
      })
      .map((item2) => {
        return {
          imgSrc:
            typeof item2.cateImg === 'string' &&
            JSON.parse(item2.cateImg)[0]?.artworkUrl,
          cateName: item2.cateName,
          altName: item2.altName,
          cateRouter: item2.cateRouter,
          goodsCateId: item2.goodsCateId
        };
      });

    cateGoryList_cat = res
      .filter((item) => {
        return rule(item, 'cat');
      })
      .map((item2) => {
        return {
          imgSrc:
            typeof item2.cateImg === 'string' &&
            JSON.parse(item2.cateImg)[0].artworkUrl,
          cateName: item2.cateName,
          altName: item2.altName,
          cateRouter: item2.cateRouter,
          goodsCateId: item2.goodsCateId
        };
      });
    this.setState({ cateGoryList_dog, cateGoryList_cat });
  }
  render() {
    return (
      <div className="hub-category rc-bg-colour--brand3 rc-margin-bottom--xs">
        <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile category-cards rc-padding--sm">
          <h4 className="rc-beta text-center rc-margin-bottom--sm rc-margin-bottom--lg--mobile">
            <FormattedMessage
              id="salesCategory.title"
              values={{
                val1: <br />
              }}
            />
          </h4>
          <div className="rc-intro inherit-fontsize text-center contact_options__subheading">
            <p>
              <span style={{ color: 'black' }}>
                <FormattedMessage
                  id="salesCategory.content"
                  values={{
                    val1: <br />
                  }}
                />
              </span>
            </p>
          </div>
          <div className="rc-layout-container rc-two-column">
            <div className="rc-column rc-padding-x--sm">
              <div className="header-title">
                <div style={{ fontSize: '1.25rem' }} className="rc-espilon">
                  <FormattedMessage id="salesCategory.cat" />
                </div>
                <img
                  src={optimizeImage({
                    originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/salesCategory_cat.png`,
                    width: 100
                  })}
                  alt="cats image"
                />
              </div>
              <div className="rc-layout-container rc-two-column ml-0 mr-0">
                {this.state.listLoading ? (
                  <div style={{ width: '100%' }}>
                    <Skeleton
                      color="#f5f5f5"
                      width="100%"
                      height="10%"
                      count={4}
                    />
                  </div>
                ) : (
                  this.state.cateGoryList_cat.map((item, index) => {
                    return (
                      <div className="rc-column category-goods" key={index}>
                        <Link
                          className="rc-moblie-flex"
                          to={`${item.cateRouter}`}
                        >
                          <picture>
                            <source
                              srcSet={optimizeImage({
                                originImageUrl: item.imgSrc,
                                width: 250
                              })}
                            />
                            <div className="text-center">
                              <img
                                src={optimizeImage({
                                  originImageUrl: item.imgSrc,
                                  width: 250
                                })}
                                alt={item.altName}
                                title={item.altName}
                              />
                            </div>
                          </picture>
                          <div className="d-flex justify-content-center">
                            <h3 className="rc-margin--none">{item.cateName}</h3>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="rc-column rc-padding-x--sm">
              <div className="header-title">
                <div style={{ fontSize: '1.25rem' }} className="rc-espilon">
                  <FormattedMessage id="salesCategory.dog" />
                </div>
                <img
                  src={optimizeImage({
                    originImageUrl: `${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/home/salesCategory_dog.png`,
                    width: 100
                  })}
                  alt="dogs image"
                />
              </div>
              <div className="rc-layout-container rc-two-column ml-0 mr-0">
                {this.state.listLoading ? (
                  <div style={{ width: '100%' }}>
                    <Skeleton
                      color="#f5f5f5"
                      width="100%"
                      height="10%"
                      count={4}
                    />
                  </div>
                ) : (
                  this.state.cateGoryList_dog.map((item, index) => {
                    return (
                      <div className="rc-column category-goods" key={index}>
                        <Link
                          className="rc-moblie-flex"
                          to={`${item.cateRouter}`}
                        >
                          <picture>
                            <source
                              srcSet={optimizeImage({
                                originImageUrl: item.imgSrc,
                                width: 250
                              })}
                            />
                            <div className="text-center">
                              <img
                                src={optimizeImage({
                                  originImageUrl: item.imgSrc,
                                  width: 250
                                })}
                                alt={item.altName}
                                title={item.altName}
                              />
                            </div>
                          </picture>
                          <div className="d-flex justify-content-center">
                            <h3 className="rc-margin--none">{item.cateName}</h3>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
