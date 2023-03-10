import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer';
import BannerTip from '@/components/BannerTip';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import { seoHoc } from '@/framework/common';
import LazyLoad from 'react-lazyload';

import './index.css';
import Canonical from '@/components/Canonical';

const localItemRoyal = window.__.localItemRoyal;
@seoHoc()
class QualitySafety extends React.Component {
  render(h) {
    const event = {
      page: {
        type: 'Content',
        theme: 'Brand',
        path: location.pathname,
        error: '',
        hitTimestamp: new Date(),
        filters: ''
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
        <main className="rc-content--fixed-header rc-bg-colour--brand3">
          <BannerTip />
          <BreadCrumbs />

          <div className="experience-region experience-main">
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width">
                  <div className="experience-component experience-assets-headingBlock">
                    <div className="rc-max-width--md text-center rc-margin-y--md">
                      <div className="rc-alpha inherit-fontsize">
                        <h1>
                          <FormattedMessage id="qualitySafety.title" />
                        </h1>
                      </div>
                      <div className="rc-margin-left--lg text-center rc-intro inherit-fontsize children-nomargin rc-margin-bottom--sm heading-block-content">
                        <p>
                          <FormattedMessage id="qualitySafety.description" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width">
                  <div className="experience-component experience-assets-contentBlock">
                    <div className="rc-content-block rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile content-block rc-max-width--lg">
                      <a
                        id="undefined"
                        name="undefined"
                        className="page-section-anchor"
                        aria-hidden="true"
                      ></a>
                      <div className="row align-items-md-center">
                        <div className=" col-12 col-lg-6">
                          <div className="text-center text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                            <h2 className="rc-beta markup-text">
                              <FormattedMessage id="qualitySafety.foodTitle" />
                            </h2>
                            <p>
                              <FormattedMessage id="qualitySafety.foodDetail" />
                            </p>
                          </div>
                        </div>
                        <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                          <picture data-rc-feature-objectfillpolyfill-setup="true">
                            <LazyLoad>
                              <img
                                className="w-100 lazyloaded"
                                alt="Alimentation et processus de s??curit?? Royal Canin"
                                title="Alimentation et processus de s??curit?? Royal Canin"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/DSC_1225Export_All_Lowres-1.jpg`}
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
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width">
                  <div className="experience-component experience-assets-contentBlock">
                    <div className="rc-content-block rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile content-block rc-max-width--lg">
                      <a
                        id="undefined"
                        name="undefined"
                        className="page-section-anchor"
                        aria-hidden="true"
                      ></a>
                      <div className="row align-items-md-center">
                        <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                          <picture data-rc-feature-objectfillpolyfill-setup="true">
                            <LazyLoad>
                              <img
                                alt="export all lowres image"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/DSC_0847Export_All_Lowres.jpg`}
                              />
                            </LazyLoad>
                          </picture>
                        </div>
                        <div className=" col-12 col-lg-6">
                          <div className="text-center text-center text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                            <h2 className="rc-beta markup-text">
                              <FormattedMessage id="qualitySafety.consistentTitle" />
                            </h2>
                            <p>
                              <FormattedMessage id="qualitySafety.consistentDetail" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width">
                  <div className="experience-component experience-assets-contentBlock">
                    <div className="rc-content-block rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile content-block rc-max-width--lg">
                      <a
                        id="undefined"
                        name="undefined"
                        className="page-section-anchor"
                        aria-hidden="true"
                      ></a>
                      <div className="row align-items-md-center">
                        <div className=" col-12 col-lg-6">
                          <div className="text-center text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                            <h2 className="rc-beta markup-text">
                              Des mati??res premi??res de qualit??
                            </h2>
                            <p>
                              Nous choisissons les ingr??dients en fonction de
                              leur valeur nutritionnelle ??lev??e et de leurs
                              b??n??fices pour la sant?? des animaux. Par exemple,
                              nous n???utilisons que de la viande et du poisson
                              issus de la cha??ne alimentaire humaine. Royal
                              Canin met tout en ??uvre pour s???approvisionner en
                              mati??res premi??res aupr??s de fournisseurs agr????s
                              proches des centres de production, ce qui soutient
                              l?????conomie locale, garantit la fra??cheur des
                              produits et r??duit l???empreinte carbone.
                            </p>
                          </div>
                        </div>
                        <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                          <picture data-rc-feature-objectfillpolyfill-setup="true">
                            <LazyLoad>
                              <img
                                className="w-100 ls-is-cached lazyloaded"
                                alt="Des mati??res premi??res de qualit??"
                                title="Des mati??res premi??res de qualit??"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/2015-Pet-Center-pictures-Campus-Royal-Canin-000004.jpg`}
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
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width">
                  <div className="experience-component experience-assets-textContent">
                    <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile richtext text-center ">
                      <h2>Une s??lection rigoureuse des fournisseurs</h2>
                      <p>
                        Nous appliquons des crit??res de s??lection rigoureux pour
                        choisir les fournisseurs en mesure de nous aider ??
                        maintenir les normes de qualit?? et de s??curit?? les plus
                        ??lev??es du secteur. Dans ce cadre, nous conduisons des
                        audits approfondis pour d??terminer la valeur
                        nutritionnelle, la qualit?? de la production, la
                        tra??abilit?? et les normes de d??veloppement durable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width">
                  <div className="experience-component experience-assets-textContent">
                    <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile richtext text-center ">
                      <h2>Ingr??dients enti??rement tra??ables</h2>
                      <p>
                        100 % des mati??res premi??res utilis??es sont analys??es et
                        un ??chantillon de chacune d'entre elles est conserv??
                        pendant deux ans. Nous sommes ainsi en mesure de tracer
                        d'un bout ?? l'autre de la cha??ne chaque mati??re premi??re
                        pendant toute la dur??e de commercialisation du produit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-component experience-layouts-1column">
              <div className="row rc-margin-x--none">
                <div className="rc-full-width"></div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default QualitySafety;
