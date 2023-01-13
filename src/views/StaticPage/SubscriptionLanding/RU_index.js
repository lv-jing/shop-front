import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerTip from '@/components/BannerTip';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import emailImg from '@/assets/images/emailus_icon@1x.jpg';
import callImg from '@/assets/images/customer-service@2x.jpg';
import helpImg from '@/assets/images/slider-img-help.jpg';
import autoship from './images/autoship.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import { seoHoc } from '@/framework/common';
import './index.css';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Canonical from '@/components/Canonical';

const localItemRoyal = window.__.localItemRoyal;

@seoHoc('Subscription Page')
class Help extends React.Component {
  render(h) {
    const event = {
      page: {
        type: 'Content',
        theme: ''
      }
    };

    return (
      <div className="recommendation">
        <GoogleTagManager
          key={this.props.location.key}
          additionalEvents={event}
        />
        <Canonical />
        <Header {...this.props} showMiniIcons={true} showUserIcon={true} />
        <main className="rc-content--fixed-header rc-bg-colour--brand3">
          <BannerTip />
          <section
            style={{ textAlign: 'center', width: '50%', margin: '0 auto' }}
          >
            <h2 style={{ color: '#E2001A', marginTop: '40px' }}>
              <FormattedMessage id="subscriptionLanding.title1" />
            </h2>
            <p>
              <FormattedMessage id="subscriptionLanding.content1" />
            </p>
          </section>

          <div
            className="rc-layout-container rc-two-column"
            style={{ padding: '1.25rem' }}
          >
            <div
              className="rc-column"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>
                <div>
                  <em className="rc-icon rc-rate-fill--xs rc-brand1"></em>
                  <FormattedMessage id="subscriptionLanding.description1" />
                </div>
                <div>
                  <em className="rc-icon rc-rate-fill--xs rc-brand1"></em>
                  <FormattedMessage id="subscriptionLanding.description2" />
                </div>
                <div>
                  <em className="rc-icon rc-rate-fill--xs rc-brand1"></em>
                  <FormattedMessage id="subscriptionLanding.description3" />
                </div>
                {/* <div>
                  <em className="rc-icon rc-rate-fill--xs rc-brand1"></em><FormattedMessage id="subscriptionLanding.description4"/>
                </div> */}
                <div style={{ marginTop: '1.25rem' }}>
                  <Link className="rc-btn rc-btn--one" to="/cats">
                    <FormattedMessage id="subscriptionLanding.catButton" />
                  </Link>
                </div>
                <div style={{ marginTop: '1.25rem' }}>
                  <Link className="rc-btn rc-btn--one" to="/dogs">
                    <FormattedMessage id="subscriptionLanding.dogButton" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rc-column">
              <LazyLoad>
                <img
                  src={autoship}
                  style={{ width: '100%' }}
                  alt="autoship icon"
                />
              </LazyLoad>
            </div>
          </div>
          <section
            style={{ textAlign: 'center', width: '50%', margin: '0 auto' }}
          >
            <h2 style={{ color: '#E2001A', marginTop: '40px' }}>
              Как работает подписка?
            </h2>
          </section>
          <div
            className="rc-layout-container rc-four-column"
            style={{ padding: '1.25rem' }}
          >
            <div className="rc-column" style={{ textAlign: 'center' }}>
              <LazyLoad>
                <img
                  alt="Bitmap image"
                  src={icon1}
                  style={{
                    width: '100px',
                    display: 'inline-block',
                    marginBottom: '1.25rem'
                  }}
                />
              </LazyLoad>
              {/* <p>Выберите подходящий рацион питания для Вашего питомца</p> */}
              <p>
                Выберите&nbsp;<strong>подходящий рацион</strong>&nbsp;питания
                для Вашего питомца
              </p>
            </div>
            <div className="rc-column" style={{ textAlign: 'center' }}>
              <LazyLoad>
                <img
                  alt="Bitmap image"
                  src={icon2}
                  style={{
                    width: '100px',
                    display: 'inline-block',
                    marginBottom: '1.25rem'
                  }}
                />
              </LazyLoad>
              {/* <p>Выберите частоту отправки, адрес доставки и способ оплаты</p> */}
              <p>Выберите частоту отправки, адрес доставки и способ оплаты</p>
            </div>
            <div className="rc-column" style={{ textAlign: 'center' }}>
              <LazyLoad>
                <img
                  alt="Bitmap image"
                  src={icon3}
                  style={{
                    width: '100px',
                    display: 'inline-block',
                    marginBottom: '1.25rem'
                  }}
                />
              </LazyLoad>
              {/* <p>Получайте заказ автоматически по Вашему расписанию</p> */}
              <p>
                Получайте заказ автоматически&nbsp;
                <strong>по Вашему расписанию</strong>
              </p>
            </div>
            <div className="rc-column" style={{ textAlign: 'center' }}>
              <LazyLoad>
                <img
                  alt="Bitmap image"
                  src={icon4}
                  style={{
                    width: '100px',
                    display: 'inline-block',
                    marginBottom: '1.25rem'
                  }}
                />
              </LazyLoad>
              {/* <p>Меняйте график доставки в любое время, когда захотите</p> */}
              <p>
                Меняйте график доставки в любое время,&nbsp;
                <strong>когда захотите</strong>
              </p>
            </div>
          </div>
          <div className="help-page" style={{ marginBottom: '1rem' }}>
            <section style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#E2001A', marginTop: '40px' }}>
                Есть вопросы
              </h2>
              <p style={{ width: '60%', margin: '0 auto' }}>
                Нужна помощь?
                <br />
                Наша команда готова ответить на все Ваши вопросы и обеспечить
                наилучшие условия для совершения покупок. Вы можете связаться с
                нами, используя один из трех способов:
              </p>
            </section>
            <div className="experience-region experience-main">
              <div className="experience-region experience-main">
                <div className="experience-component experience-layouts-1column">
                  <div className="row rc-margin-x--none">
                    <div className="rc-full-width">
                      <div className="experience-component experience-assets-contactUsBlock">
                        <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile">
                          <div className="rc-layout-container rc-two-column rc-margin-y--sm text-center md:text-left rc-margin-top--lg--mobile"></div>
                          <div className="rc-layout-container rc-five-column rc-match-heights rc-reverse-layout-mobile text-center md:text-left">
                            <div className="rc-column rc-double-width rc-padding--none">
                              <article className="rc-full-width rc-column rc-margin-top--md--mobile">
                                <div className="rc-border-all rc-border-colour--interface fullHeight">
                                  <div className="rc-layout-container rc-three-column rc-margin--none rc-content-h-middle rc-reverse-layout-mobile fullHeight rc-padding-top--md--mobile">
                                    <div className="rc-column rc-double-width rc-padding-top--md--mobile">
                                      <div className="w-100">
                                        <b style={{ color: '#00BCA3' }}>
                                          <FormattedMessage id="help.byTelephone" />
                                        </b>
                                        <p>
                                          {
                                            this.props.configStore
                                              ?.contactTimePeriod
                                          }
                                        </p>
                                        <div className="rc-margin-top--xs">
                                          <p
                                            style={{ color: '#00BCA3' }}
                                            className="rc-numeric rc-md-up"
                                          >
                                            {
                                              this.props.configStore
                                                ?.storeContactPhoneNumber
                                            }
                                          </p>
                                        </div>
                                        <div className="rc-margin-top--xs">
                                          <p
                                            style={{ color: '#00BCA3' }}
                                            className="rc-alpha rc-border--none rc-md-down"
                                          >
                                            {
                                              this.props.configStore
                                                ?.storeContactPhoneNumber
                                            }
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="rc-column rc-content-v-middle">
                                      <LazyLoad>
                                        <img
                                          className="align-self-center widthAuto"
                                          src={callImg}
                                          alt="By telephone"
                                          title="By telephone"
                                        />
                                      </LazyLoad>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article className="rc-full-width rc-column">
                                <div className="rc-border-all rc-border-colour--interface fullHeight">
                                  <div className="rc-layout-container rc-three-column rc-margin--none rc-content-h-middle rc-reverse-layout-mobile fullHeight rc-padding-top--md--mobile">
                                    <div className="rc-column rc-double-width rc-padding-top--md--mobile">
                                      <div className="w-100">
                                        <b style={{ color: '#0087BD' }}>
                                          <font
                                            style={{ verticalAlign: 'inherit' }}
                                          >
                                            <font
                                              style={{
                                                verticalAlign: 'inherit'
                                              }}
                                            >
                                              <FormattedMessage id="help.byEmail" />
                                            </font>
                                          </font>
                                        </b>
                                        <p>
                                          <span
                                            style={{ color: 'rgb(0, 0, 0)' }}
                                          >
                                            <font
                                              style={{
                                                verticalAlign: 'inherit'
                                              }}
                                            >
                                              <font
                                                style={{
                                                  verticalAlign: 'inherit'
                                                }}
                                              >
                                                <FormattedMessage id="help.tip3" />
                                              </font>
                                            </font>
                                          </span>
                                        </p>
                                        <div className="rc-margin-top--xs">
                                          <p
                                            className="rc-numeric rc-md-up"
                                            style={{
                                              color: 'rgb(0, 135, 189)'
                                            }}
                                          >
                                            {
                                              this.props.configStore
                                                ?.storeContactEmail
                                            }
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="rc-column rc-content-v-middle">
                                      <LazyLoad>
                                        <img
                                          className="align-self-center widthAuto"
                                          src={emailImg}
                                          alt="By email"
                                          title="By email"
                                        />
                                      </LazyLoad>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="rc-column rc-triple-width">
                              <div
                                className="background-cover"
                                style={{
                                  backgroundImage: `url(${require('@/assets/images/slider-img-help.jpg?sw=802&amp;sh=336&amp;sm=cut&amp;sfrm=png')})`
                                }}
                              >
                                <picture className="rc-card__image">
                                  <LazyLoad>
                                    <img
                                      src={helpImg}
                                      alt="help icon"
                                      title=" "
                                    />
                                  </LazyLoad>
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Help;
