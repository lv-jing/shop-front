import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer';
import BannerTip from '@/components/BannerTip';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import LazyLoad from 'react-lazyload';
import { seoHoc } from '@/framework/common';

import './index.css';
import FrTips from '../Help/fr/frTips';
import FrFaq from '../Help/fr/frFaq';
import Canonical from '@/components/Canonical';

const localItemRoyal = window.__.localItemRoyal;

@seoHoc()
class Help extends React.Component {
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
      <div className="recommendation">
        <GoogleTagManager
          key={this.props.location.key}
          additionalEvents={event}
        />
        <Canonical />
        <Header {...this.props} showMiniIcons={true} showUserIcon={true} />
        <main className="rc-content--fixed-header rc-bg-colour--brand3">
          <BannerTip />

          <BreadCrumbs />
          <div className="storefront-page">
            <nav
              className="rc-progress rc-progress--breadcrumbs-stepped rc-max-width--xl rc-padding-x--sm rc-padding-y--xs rc-margin-top--xs "
              data-progress-setup="true"
            ></nav>
            <div className="experience-region experience-main">
              <div className="experience-component experience-layouts-1column">
                <div className="row rc-margin-x--none">
                  <div className="rc-full-width">
                    <div className="experience-component experience-assets-headingBlock">
                      <div className="rc-max-width--md text-center rc-margin-y--md">
                        <div className="rc-alpha inherit-fontsize">
                          <h1>La sant?? est notre obsession</h1>
                        </div>
                        <div className="rc-intro inherit-fontsize children-nomargin rc-margin-bottom--sm heading-block-content">
                          <p>
                            Tout ce que nous faisons est motiv?? par notre
                            passion pour la sant?? et le bien-??tre de chaque
                            chien et chat.
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
                            <div className=" text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                              <h2>Respecter leur nature</h2>
                              <p>
                                Nous respectons les chats et les chiens pour ce
                                qu'ils sont : des animaux de compagnie
                                incroyables. Ce respect est n?? d'une
                                connaissance approfondie de leur vraie nature et
                                de leurs besoins uniques. Ce respect guide
                                chacune de nos d??cisions quant ?? nos produits et
                                services, tout en fa??onnant notre attitude en
                                tant qu'entreprise.
                              </p>
                              <p>
                                <br />
                              </p>
                              <h2>Les animaux de compagnie en premier</h2>
                              <p>
                                Nous faisons toujours passer les besoins des
                                animaux de compagnie en premier. Cela nous donne
                                un objectif clair pour orienter nos recherches,
                                renforce la qualit?? nutritionnelle de tous nos
                                produits et aide les chats et les chiens ?? vivre
                                plus longtemps et en meilleure sant??.
                              </p>
                            </div>
                          </div>
                          <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                            <picture data-rc-feature-objectfillpolyfill-setup="true">
                              <img
                                className="w-100 lazyloaded"
                                alt="Les animaux de compagnie en premier"
                                title="Les animaux de compagnie en premier"
                                src={image1}
                              />
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
                              <img
                                className="w-100 lazyloaded"
                                alt="Une passion pour les animaux de compagnie"
                                title="Une passion pour les animaux de compagnie"
                                src={image2}
                              />
                            </picture>
                          </div>
                          <div className=" col-12 col-lg-6">
                            <div className=" text-center text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                              <h2>Une pr??cision absolue</h2>
                              <p>
                                Nos connaissances et notre exp??rience
                                approfondies nous ont permis de bien comprendre
                                les besoins des animaux de compagnie et les
                                nutriments n??cessaires pour les garder en
                                parfaite sant??. Cette pr??cision garantit la
                                haute performance de nos aliments, que ce soit
                                leur forme, leur texture, leur app??tence, leur
                                digestibilit??, leur innocuit?? ou leur
                                tra??abilit??.
                              </p>
                              <p>
                                <br />
                              </p>
                              <h2>Une passion pour les animaux de compagnie</h2>
                              <p>
                                Nous mettons tout notre c??ur et notre ??me dans
                                tout ce que nous faisons, et notre passion pour
                                rendre le monde meilleur pour les animaux de
                                compagnie et leurs ma??tre est authentique.
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
                            <div className=" text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                              <h2>La qu??te du savoir</h2>
                              <p>
                                Notre compr??hension approfondie des besoins des
                                chiens et des chats nous permet de cr??er la
                                nutrition sant?? pour animaux la plus pr??cise au
                                monde. Nous n'arr??tons jamais d'apprendre et ne
                                tenons jamais rien pour acquis. C'est pourquoi,
                                nous collaborons avec des experts scientifiques,
                                v??t??rinaires et comportementaux, et nous
                                entretenons un dialogue permanent avec les
                                possesseurs de chats et de chiens du monde
                                entier.
                              </p>
                              <p>
                                <br />
                              </p>
                              <h2>L'obsession pour la sant?? animale</h2>
                              <p>
                                Toutes nos actions sont motiv??es par notre
                                passion pour la sant?? et le bien-??tre de chaque
                                chien et chat.
                              </p>
                            </div>
                          </div>
                          <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                            <picture data-rc-feature-objectfillpolyfill-setup="true">
                              <img
                                className="w-100 lazyloaded"
                                alt="L'obsession pour la sant?? animale"
                                title="L'obsession pour la sant?? animale"
                                src={image3}
                              />
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
                        <h3>D??veloppement durable</h3>
                        <p>
                          Gr??ce ?? notre approche en mati??re de d??veloppement
                          durable, nous sommes s??rs d'offrir aux animaux, aux
                          personnes et ?? la plan??te le respect qu???ils m??ritent.
                        </p>
                        <p>
                          <br />
                        </p>
                        <h3>Science, Sant?? et Nutrition</h3>
                        <p>
                          Notre travail s???appuie sur un vaste socle ??volutif de
                          connaissances scientifiques en mati??re de sant?? et de
                          nutrition animale.&nbsp;
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
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Help;
