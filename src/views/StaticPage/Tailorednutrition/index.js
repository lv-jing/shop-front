import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerTip from '@/components/BannerTip';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import LazyLoad from 'react-lazyload';

import { inject, observer } from 'mobx-react';
import BreadCrumbs from '@/components/BreadCrumbs';
import { seoHoc } from '@/framework/common';
import './index.css';
import Canonical from '@/components/Canonical';

const localItemRoyal = window.__.localItemRoyal;

@injectIntl
@seoHoc('Health and nutrition page')
class Tailorednutrition extends React.Component {
  render(h) {
    const event = {
      page: {
        type: 'Content',
        theme: 'Health Nutrition',
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
                          <h1>La sant?? est notre obsession&nbsp;</h1>
                        </div>
                        <div className="rc-intro inherit-fontsize children-nomargin rc-margin-bottom--sm heading-block-content">
                          <h2>
                            Notre passion pour la sant?? animale nous a inspir??
                            de nombreuses innovations pour tous les chats et les
                            chiens&nbsp;quels que soient leur ??ge,&nbsp;leur
                            sensibilit??, leur race, leur mode de vie et leurs
                            besoins sp??cifiques. Depuis plus de 50 ans, nous
                            ??laborons des aliments qui soutiennent la sant?? et
                            favorisent le bien-??tre des chiots, chatons, chiens
                            et chats dans le monde entier.
                          </h2>
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
                                Qu'est-ce qu'une alimentation sur mesure?
                              </h2>
                              <p>
                                Nous concevons des aliments pour r??pondre avec
                                une grande pr??cision ?? des besoins uniques.
                                Chaque aliment fournit ?? chaque chat ou chaque
                                chien un complexe complet et ??quilibr?? de
                                nutriments et d'acides amin??s dont il a besoin
                                pour soutenir sa musculature, pr??server son
                                organisme en bonne sant??, l'aider ?? renforcer
                                ses d??fenses naturelles.
                              </p>
                            </div>
                          </div>
                          <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                            <picture>
                              <img
                                className="w-100 lazyloaded"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/SACRED_BIRMAN_KITTEN___BIRTH___GROWTH___BRAND_EMBLEMATIC_Med._Res.___Basic-1.jpg`}
                                alt="Alimentation sur mesure - Chats"
                                title="Alimentation sur mesure - Chats"
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
                            <LazyLoad>
                              <img
                                className="w-100 lazyloaded"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/GERMAN_SHEPHERD_PUPPY___BRAND_-_BREED_EMBLEMATIC_Med._Res.___Basic.jpg`}
                                alt="Alimentation sur mesure - Chiens"
                                title="Alimentation sur mesure - Chiens"
                              />
                            </LazyLoad>
                          </div>
                          <div className=" col-12 col-lg-6">
                            <div className="text-center text-center text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                              <h2 className="rc-beta markup-text">
                                Formules ??labor??es
                              </h2>
                              <p>
                                Prenez l'exemple du berger allemand : il est
                                particuli??rement appr??ci?? pour son courage, sa
                                fid??lit?? et son intelligence. Cependant, malgr??
                                sa grande force physique et mentale, le berger
                                allemand est connu pour sa sensibilit??
                                digestive. Nous avons donc ??labor?? une formule
                                adapt??e qui contient des prot??ines facilement
                                assimilables et des fibres sp??cifiques pour
                                qu'il soit aussi fort ?? l'int??rieur qu'??
                                l'ext??rieur.
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
                                Nourrir leur sant??
                              </h2>
                              <p>
                                Un jack russell en parfaite sant?? peut sauter ??
                                une hauteur ??quivalente ?? six fois sa taille.
                                Favoriser son incroyable potentiel naturel avec
                                des prot??ines et des antioxydants sp??cialement
                                s??lectionn??s permet de r??pondre ?? ses besoins
                                sp??cifiques.
                              </p>
                            </div>
                          </div>
                          <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                            <picture data-rc-feature-objectfillpolyfill-setup="true">
                              <img
                                className="w-100 lazyloaded"
                                alt="Chiens - Alimentation en fonction de la taille"
                                title="Chiens - Alimentation en fonction de la taille"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/JACK_RUSSEL_TERRIER_ADULT_-_VET_VHN_Med._Res.___Basic.jpg`}
                              />{' '}
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
                            <picture>
                              <img
                                className="w-100 lazyloaded"
                                alt="Alimentation sur mesure - Races"
                                title="Alimentation sur mesure - Races"
                                src={`${window.__.env.REACT_APP_EXTERNAL_ASSETS_PREFIX}/img/ROYAL_CANIN_50_YEARS_IMAGES_PERSIAN_3_12_Med._Res.___Basic.jpg`}
                              />
                            </picture>
                          </div>
                          <div className=" col-12 col-lg-6">
                            <div className="text-center text-center text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                              <h2 className="rc-beta markup-text">
                                Des aliments con??us pour r??pondre ?? des besoins
                                uniques
                              </h2>
                              <p>
                                De nombreux animaux de compagnie ont une
                                m??choire sp??cifique et un comportement
                                particulier qui modifient leur fa??on de manger.
                                C'est pour cette raison que nous adaptons non
                                seulement nos recettes au niveau nutritionnel,
                                mais que nous ??tudions aussi la forme et la
                                texture de chaque croquette pour mieux r??pondre
                                aux besoins physiques de chaque animal.
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
                    <div className="experience-component experience-assets-textContent">
                      <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile richtext text-center ">
                        <h2>Le r??sultat</h2>
                        <p>
                          Le r??sultat est une alimentation con??ue pour r??pondre
                          ?? des besoins de sant?? particuliers avec une grande
                          pr??cision. Cette alimentation apporte ?? votre animal
                          un ensemble complet et ??quilibr?? de nutriments et
                          d'acides amin??s dont il a besoin pour d??velopper des
                          muscles forts, garder un corps en bonne sant?? et
                          renforcer son syst??me immunitaire. Donnez-lui toute
                          l?????nergie n??cessaire pour s?????panouir et avoir la
                          meilleure sant?? possible.
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default Tailorednutrition;
