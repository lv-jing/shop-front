import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer';
import image1 from './images/image1.jpg';
import image4B from './images/4B.png';
import image4C from './images/4C.png';
import image4D from './images/4D.png';
import image4E from './images/4E.png';
import imagecat from './images/cat-autoship.png';
import imagedog from './images/dog-autoship.png';

import BannerTip from '@/components/BannerTip';
import LazyLoad from 'react-lazyload';
import { list1, list2 } from './goods';
import ProductCarousel from '@/components/ProductCarousel';

import './index.css';

const localItemRoyal = window.__.localItemRoyal;

class Packfeed extends React.Component {
  render(h) {
    const event = {
      page: {
        error: 'none',
        filters: 'none',
        hitTimestamp: new Date(),
        path: location.pathname,
        theme: 'none',
        type: 'Other'
      }
    };
    return (
      <div className="recommendation_PackmixfeedingwetDry">
        <GoogleTagManager
          key={this.props.location.key}
          additionalEvents={event}
        />

        <Header {...this.props} showMiniIcons={true} showUserIcon={true} />
        <main className="rc-content--fixed-header rc-bg-colour--brand3">
          <BannerTip />
          <BreadCrumbs />
          <div className="rc-content-block rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile content-block rc-max-width--xl">
            <a
              id="undefined"
              name="undefined"
              className="page-section-anchor"
              aria-hidden="true"
            ></a>
            <div className="row align-items-md-center">
              <div className=" col-12 col-lg-6">
                <div className=" text-lg-left rc-padding-y--sm rc-padding-y--md--mobile">
                  <h2 className="rc-beta markup-text">
                    Quels sont les avantages de nos combinaisons alimentaires
                    pour chiens et chats ?
                  </h2>
                  <p>
                    Chez ROYAL CANIN®, nous savons que les animaux ont des
                    besoins spécifiques en fonction de leur race, leur taille ou
                    leur âge. Afin de répondre au mieux aux différents profils,
                    nous avons lancé différents packs pour chiens et chats. Ces
                    assortiments permettent de répondre au mieux aux besoins de
                    votre animal, grâce à deux technologies : les croquettes et
                    les bouchées en sauce.
                  </p>
                  <p>
                    Choisissez parmi nos assortiments pour chiens et chats le
                    pack le plus adapté à votre animal.
                  </p>
                </div>
              </div>
              <div className=" col-12 col-lg-6 rc-padding-x--sm--desktop">
                <LazyLoad>
                  <img
                    src={image1}
                    style={{ width: '100%' }}
                    alt="packmixfeedingwet-image"
                  />
                </LazyLoad>
              </div>
            </div>
          </div>
          <div className="rc-max-width--lg rc-padding-x--lg--mobile">
            {/*//轮播图图图图图图图突突突*/}
            <ProductCarousel
              goodsList={list1}
              title={
                <h4 className="rc-gamma text-center">
                  Choisissez l'assortiment ROYAL CANIN® le plus adapté à votre
                  chat
                </h4>
              }
            />
          </div>

          {/*轮播停止*/}
          <br />
          <br />
          <div className="rc-max-width--lg rc-padding-x--lg--mobile">
            {/*//轮播图图图*/}
            <ProductCarousel
              goodsList={list2}
              title={
                <h4 className="rc-gamma text-center">
                  Choisissez l'assortiment ROYAL CANIN® le plus adapté à votre
                  chien
                </h4>
              }
            />
          </div>

          <div className="experience-component experience-layouts-1column">
            <div className="row rc-margin-x--none">
              <div className="rc-full-width">
                <div className="experience-component experience-assets-categoryCtaBlock">
                  <div className="rc-bg-colour--brand4">
                    <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile">
                      <div className="row rc-max-width--lg rc-match-heights rc-padding-y--sm">
                        <div className="col-12 col-md-4 order-1 md:order-0">
                          <div className="rc-column rc-padding--none">
                            <LazyLoad>
                              <img
                                className="mx-auto lazyloaded"
                                src={imagecat}
                                alt="cat image"
                              />
                            </LazyLoad>
                          </div>
                          <div className="d-flex d-md-none justify-content-center rc-bg-colour--brand4 rc-padding-y--lg">
                            <Link
                              className="rc-btn rc-btn--sm rc-btn--two w-50"
                              to="/cats"
                            >
                              Chat
                            </Link>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 m-auto rc-padding-x--sm rc-padding-x--lg--mobile rc-padding-top--lg--mobile order-0 md:order-1">
                          <div className="rc-gamma rc-text--center rc-margin-bottom--xs">
                            Commencez dès maintenant votre Abonnement
                          </div>
                          <div className="rc-intro inherit-fontsize rc-text--center rc-padding-x--sm rc-margin-bottom--sm">
                            <p>
                              Découvrez les meilleures formules nutritionnelles
                              et sélectionnez l'Abonnement avant d'acheter
                            </p>
                          </div>
                          <div className="rc-btn-group rc-margin--none rc-padding-x--xs d-none d-md-flex">
                            <Link
                              className="rc-btn rc-btn--sm rc-btn--two"
                              to="/cats"
                            >
                              Chat
                            </Link>
                            <Link
                              className="rc-btn rc-btn--sm rc-btn--two"
                              to="/dogs"
                            >
                              Chien
                            </Link>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 order-2 md:order-2">
                          <div className="rc-column rc-padding--none">
                            <LazyLoad>
                              <img
                                className="mx-auto lazyloaded"
                                src={imagedog}
                                alt="dog image"
                              />
                            </LazyLoad>
                          </div>
                          <div className="d-flex d-md-none justify-content-center rc-bg-colour--brand4 rc-padding-y--lg">
                            <Link
                              className="rc-btn rc-btn--sm rc-btn--two w-50"
                              to="/dogs"
                            >
                              Chien
                            </Link>
                          </div>
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
                <div className="experience-component experience-assets-valueProposition">
                  <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile value-proposition">
                    <h4 className="rc-beta text-center rc-margin-bottom--sm rc-margin-bottom--lg--mobile">
                      Pourquoi choisir Royal Canin ?
                    </h4>
                    <div className="value-proposition__container">
                      <div className="row mx-0">
                        <div className="col-12 col-md-6 col-xxl-3 d-flex px-0 md:pl-0 md:pr-2  pr-xxl-3 pl-xxl-0 justify-content-center">
                          <div className="d-flex justify-content-start justify-content-xxl-center align-items-center w-100 value-proposition__content">
                            <LazyLoad>
                              <img
                                className="value-proposition__img lazyloaded"
                                src={image4B}
                                alt="delivery icon"
                              />
                            </LazyLoad>
                            <div className="pl-3 d-flex align-items-center value-proposition__text">
                              <p className="rc-margin-bottom--none rc-intro">
                                Livraison gratuite et rapide
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xxl-3 d-flex px-0  md:pl-2 md:pr-0 pr-xxl-3 pl-xxl-0 justify-content-center">
                          <div className="d-flex justify-content-start justify-content-xxl-center align-items-center w-100 value-proposition__content">
                            <LazyLoad>
                              <img
                                className="value-proposition__img lazyloaded"
                                src={image4C}
                                alt="card icon"
                              />
                            </LazyLoad>
                            <div className="pl-3 d-flex align-items-center value-proposition__text">
                              <p className="rc-margin-bottom--none rc-intro">
                                Paiement sécurisé
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xxl-3 d-flex px-0 md:pl-0 md:pr-2  pr-xxl-3 pl-xxl-0 justify-content-center">
                          <div className="d-flex justify-content-start justify-content-xxl-center align-items-center w-100 value-proposition__content">
                            <LazyLoad>
                              <img
                                className="value-proposition__img lazyloaded"
                                src={image4D}
                                alt="medal icon"
                              />
                            </LazyLoad>
                            <div className="pl-3 d-flex align-items-center value-proposition__text">
                              <p className="rc-margin-bottom--none rc-intro">
                                Qualité certifiée
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xxl-3 d-flex px-0  md:pl-2 md:pr-0 pr-xxl-3 pl-xxl-0 justify-content-center">
                          <div className="d-flex justify-content-start justify-content-xxl-center align-items-center w-100 value-proposition__content">
                            <LazyLoad>
                              <img src={image4E} alt="goods icon" />
                            </LazyLoad>
                            <div className="pl-3 d-flex align-items-center value-proposition__text">
                              <p className="rc-margin-bottom--none rc-intro">
                                La nutrition santé livrée à votre domicile
                              </p>
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

export default Packfeed;
