import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer';
import BannerTip from '@/components/BannerTip';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import './index.css';
import { seoHoc } from '@/framework/common';
import Canonical from '@/components/Canonical';

@injectIntl
@seoHoc('About Us Page')
class about extends React.Component {
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
          {/* {window.__.env.REACT_APP_COUNTRY == 'fr' ? null: <BannerTip />} */}
          <br />
          <BreadCrumbs />
          <div className="storefront-page">
            <nav
              className="rc-progress rc-progress--breadcrumbs-stepped rc-max-width--xl rc-padding-x--sm rc-padding-y--xs rc-margin-top--xs "
              data-progress-setup="true"
            />
          </div>
          <div
            className="rc-padding-x--sm rc-margin-bottom--xs rc-bg-colour--brand3 hero-panel"
            data-component="content-animation"
            id="hero-panel-3-about-us-page"
          >
            <div className="rc-padding-y--md rc-md-down" />
            <div className="rc-layout-container rc-two-column rc-max-width--lg rc-content-h-middle ">
              <div className="rc-column rc-padding-bottom--none  rc-text--left">
                <div className="rc-full-width">
                  <div>
                    <h1 className="rc-alpha ">
                      Gesundheit ist unsere Leidenschaft
                    </h1>
                    <p>
                      Im Mittelpunkt unserer Aufmerksamkeit stehen die
                      besonderen Bedürfnisse von Katzen und Hunden. Diese Liebe
                      zum Detail eröffnet uns die Möglichkeit, eine präzise und
                      effektive Ernährung bereitzustellen, die ihre optimale
                      Entwicklung unterstützt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rc-column rc-padding-bottom--none  rc-text--left">
                <div className="rc-full-width">
                  <img
                    className="lazyautosizes lazyloaded"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6732 8984'%3E%3C/svg%3E"
                    data-srcset="https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=320&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=360&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=640&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=720&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=960&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=1280&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=1440&amp;auto=compress&amp;fm=jpg 1440w"
                    data-sizes="auto"
                    alt="Inline Image 9"
                    sizes="519px"
                    srcSet="https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=320&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=360&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=640&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=720&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=960&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=1280&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/0vksa2QBIYfdNSoCF_yf/v11/english-cocker-spaniel-adult-dermatology-emblematic?w=1440&amp;auto=compress&amp;fm=jpg 1440w"
                  />
                </div>
              </div>
            </div>
            <div className="rc-hidden" />
          </div>
          <div
            className="rc-padding-x--sm rc-margin--none rc-bg-colour--brand3 rc-animation-001--base rc-animation-001--active"
            data-component="content-animation"
          >
            <div className="rc-padding-y--md rc-md-down" />
            <div className="rc-layout-container rc-two-column rc-content-h-middle rc-max-width--xl ">
              <div className="rc-column rc-padding-y--none rc-single ">
                <div
                  className="rc-padding-x--sm rc-margin-bottom--xs rc-bg-colour--brand3 rc-full-width"
                  data-component="content-animation"
                  id="content-block-with-text-and-image-6-about-us-page"
                >
                  <div className="rc-padding-y--md rc-md-down" />
                  <div className="rc-layout-container rc-one-column rc-max-width--xl rc-content-h-middle rc-reverse-layout">
                    <div className="rc-column">
                      <div className="rc-full-width rc-text--left ">
                        <div>
                          <h2 className="rc-beta ">Unsere Werte</h2>
                          <p>
                            Erfahren Sie mehr über die Ideen und Werte, die
                            Royal Canin prägen.
                          </p>
                          <a
                            className="rc-btn rc-btn--two"
                            data-component="cta-event-tracker"
                            data-track-category="About us / Button"
                            data-track-custom="false"
                            data-track-custom-action=""
                            data-track-custom-category=""
                            data-track-custom-event=""
                            data-track-custom-label=""
                            data-track-label="Mehr erfahren / Unsere Werte / Gesundheit ist unsere Leidenschaft | Royal Canin DE - Royal Canin - DE"
                            target="_blank"
                            href="https://www.royalcanin.com/de/about-us/our-values"
                          >
                            Mehr erfahren
                            {Boolean(
                              window.__.env
                                .REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                            ) && (
                              <span className="warning_blank">
                                <FormattedMessage id="opensANewWindow" />
                              </span>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="rc-column rc-padding-bottom--none">
                      <div className="rc-full-width ">
                        <img
                          className="lazyautosizes lazyloaded"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3807 4614'%3E%3C/svg%3E"
                          data-srcset="https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                          data-sizes="auto"
                          alt="Ausgewachsene Deutsche Dogge in Schwarzweiß vor weißem Hintergrund"
                          sizes="271px"
                          srcSet="https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/8yEva2QBaxEApS7Ln_vw/v15/yorkshire-terrier-adult-brand-breed-health-management-emblematic?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rc-hidden rc-md-down" />
                </div>
              </div>
              <div className="rc-column rc-single ">
                <div
                  className="rc-padding--sm rc-margin-bottom--xs rc-bg-colour--brand3 rc-full-width"
                  data-component="content-animation"
                  id="content-block-with-text-and-image-5-about-us-page"
                >
                  <div className="rc-padding-y--md rc-md-down" />
                  <div className="rc-layout-container rc-one-column rc-max-width--xl rc-content-h-middle rc-reverse-layout">
                    <div className="rc-column">
                      <div className="rc-full-width rc-text--left ">
                        <div>
                          <h2 className="rc-beta ">Unsere Geschichte</h2>
                          <p>
                            Erfahren Sie mehr darüber, wie wir diese Werte seit
                            50 Jahren täglich leben.
                          </p>
                          <a
                            className="rc-btn rc-btn--two"
                            data-component="cta-event-tracker"
                            data-track-category="About us / Button"
                            data-track-custom="false"
                            data-track-custom-action=""
                            data-track-custom-category=""
                            data-track-custom-event=""
                            data-track-custom-label=""
                            data-track-label="Mehr erfahren / Unsere Geschichte / Gesundheit ist unsere Leidenschaft | Royal Canin DE - Royal Canin - DE"
                            target="_blank"
                            href="https://www.royalcanin.com/de/about-us/our-history"
                          >
                            Mehr erfahren
                            {Boolean(
                              window.__.env
                                .REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                            ) && (
                              <span className="warning_blank">
                                <FormattedMessage id="opensANewWindow" />
                              </span>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="rc-column ">
                      <div className="rc-full-width ">
                        <img
                          className="lazyautosizes lazyloaded"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7360 4912'%3E%3C/svg%3E"
                          data-srcset="https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                          data-sizes="auto"
                          alt="Ausgewachsene Britisch Kurzhaar in Schwarzweiß vor weißem Hintergrund"
                          sizes="271px"
                          srcSet="https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/zmliI2UBG95Xk-RBt9xG/v7/english-setter-puppy-vet-vhn?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rc-padding-y--md rc-md-down" />
                </div>
              </div>
            </div>
            <div className="rc-padding-y--md rc-md-down rc-hidden" />
          </div>
          <div
            className="rc-padding--sm rc-margin-bottom--xs rc-bg-colour--brand3"
            data-component="content-animation"
          >
            <div className="rc-padding-y--md rc-md-down" />
            <div className="rc-layout-container rc-two-column rc-content-h-middle rc-max-width--xl ">
              <div className="rc-column rc-single ">
                <div
                  className="rc-padding--sm rc-margin-bottom--xs rc-bg-colour--brand3 rc-full-width"
                  data-component="content-animation"
                  id="content-block-with-text-and-image-8-about-us-page"
                >
                  <div className="rc-padding-y--md rc-md-down" />
                  <div className="rc-layout-container rc-one-column rc-max-width--xl rc-content-h-middle rc-reverse-layout">
                    <div className="rc-column">
                      <div className="rc-full-width rc-text--left ">
                        <div>
                          <h2 className="rc-beta ">
                            Für eine nachhaltige Zukunft
                          </h2>
                          <p>
                            Nachhaltigkeit ist zentraler Bestandteil der
                            täglichen globalen Aktivitäten von Royal Canin.
                          </p>
                          <a
                            className="rc-btn rc-btn--two"
                            data-component="cta-event-tracker"
                            data-track-category="About us / Button"
                            data-track-custom="false"
                            data-track-custom-action=""
                            data-track-custom-category=""
                            data-track-custom-event=""
                            data-track-custom-label=""
                            data-track-label="Mehr erfahren / Für eine nachhaltige Zukunft / Gesundheit ist unsere Leidenschaft | Royal Canin DE - Royal Canin - DE"
                            target="_blank"
                            href="https://www.royalcanin.com/de/about-us/sustainability"
                          >
                            Mehr erfahren
                            {Boolean(
                              window.__.env
                                .REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                            ) && (
                              <span className="warning_blank">
                                <FormattedMessage id="opensANewWindow" />
                              </span>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="rc-column ">
                      <div className="rc-full-width ">
                        <img
                          className="lazyautosizes lazyloaded"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6708 8956'%3E%3C/svg%3E"
                          data-srcset="https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                          data-sizes="auto"
                          alt="Ausgewachsene Britisch Kurzhaar in Schwarzweiß vor weißem Hintergrund"
                          sizes="271px"
                          srcSet="https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/Nvkva2QBIYfdNSoCg_--/v44/german-shepherd-puppy-brand-breed-emblematic?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rc-padding-y--md rc-md-down" />
                </div>
              </div>
              <div className="rc-column rc-single ">
                <div
                  className="rc-padding--sm rc-margin-bottom--xs rc-bg-colour--brand3 rc-full-width"
                  data-component="content-animation"
                  id="content-block-with-text-and-image-9-about-us-page"
                >
                  <div className="rc-padding-y--md rc-md-down" />
                  <div className="rc-layout-container rc-one-column rc-max-width--xl rc-content-h-middle rc-reverse-layout">
                    <div className="rc-column">
                      <div className="rc-full-width rc-text--left ">
                        <div>
                          <h2 className="rc-beta ">
                            Der Qualität verpflichtet
                          </h2>
                          <p>
                            Ernährungsqualität und Produktsicherheit stehen im
                            Mittelpunkt unseres weltweiten Handelns.
                          </p>
                          <a
                            className="rc-btn rc-btn--two"
                            data-component="cta-event-tracker"
                            data-track-category="About us / Button"
                            data-track-custom="false"
                            data-track-custom-action=""
                            data-track-custom-category=""
                            data-track-custom-event=""
                            data-track-custom-label=""
                            data-track-label="Mehr erfahren / Der Qualität verpflichtet / Gesundheit ist unsere Leidenschaft | Royal Canin DE - Royal Canin - DE"
                            target="_blank"
                            href="https://www.royalcanin.com/de/about-us/qualitat-und-futtermittelsicherheit"
                          >
                            Mehr erfahren
                            {Boolean(
                              window.__.env
                                .REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                            ) && (
                              <span className="warning_blank">
                                <FormattedMessage id="opensANewWindow" />
                              </span>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="rc-column ">
                      <div className="rc-full-width ">
                        <img
                          className="lazyautosizes lazyloaded"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6732 4761'%3E%3C/svg%3E"
                          data-srcset="https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                          data-sizes="auto"
                          alt="Ausgewachsene Ragdoll-Katze in Schwarzweiß vor weißem Hintergrund"
                          sizes="271px"
                          srcSet="https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=320&amp;h=568&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=360&amp;h=640&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=640&amp;h=1137&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=720&amp;h=1280&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=960&amp;h=1706&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=1280&amp;h=2275&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/qPkwa2QBIYfdNSoCWv9p/v37/maine-coon-kitten-brand-birth-growth-breed-emblematic?w=1440&amp;h=2560&amp;fit=crop&amp;crop=entropy&amp;auto=compress&amp;fm=jpg 1440w"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rc-padding-y--md rc-md-down" />
                </div>
              </div>
            </div>
            <div className="rc-padding-y--md rc-md-down" />
          </div>
          <div
            className="rc-padding--sm rc-margin-bottom--xs rc-bg-colour--brand3 rc-full-width rc-animation-001--base rc-animation-001--active"
            data-component="content-animation"
            id="content-block-with-text-1-about-us-page"
          >
            <div className="rc-padding-y--md rc-md-down" />
            <div className="rc-layout-container rc-one-column rc-max-width--md">
              <div className="rc-column">
                <div className="rc-full-width rc-text--center rc-padding-x--sm">
                  <div>
                    <h2 className="rc-beta ">
                      Einzigartig bis ins kleinste Detail
                    </h2>
                    <p>
                      Wir handeln aus Überzeugung und mit Leidenschaft, denn wir
                      glauben daran, dass Haustiere die Welt besser machen..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rc-padding-y--md rc-md-down" />
          </div>
          <div className="rc-bg-colour--brand3">
            <div className="rc-max-width--md">
              <div className="rc-video-wrapper">
                <iframe
                  title=""
                  src="https://www.youtube.com/embed/cJ4LgiFpbcg?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.royalcanin.com"
                  frameBorder="0"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
          <div
            className="rc-padding--sm rc-margin--none rc-bg-colour--brand3 rc-full-width rc-animation-001--base rc-animation-001--active"
            data-component="content-animation"
            id="content-block-with-text-3-about-us-page"
          >
            <div className="rc-padding-y--md rc-md-down" />
            <div className="rc-layout-container rc-one-column rc-max-width--md">
              <div className="rc-column">
                <div className="rc-full-width rc-text--center rc-padding-x--sm">
                  <div>
                    <h2 className="rc-beta ">
                      Entdecken Sie die exklusiven Vorteile von ROYAL CANIN
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="rc-padding-y--md rc-md-down" />
          </div>
          <div className="rc-padding--xs rc-bg-colour--brand3">
            <div className="rc-max-width--xl rc-spacer-sides-small">
              <div
                className="rc-fade--x tabbed-nav__wrapper"
                data-ref="list-wrapper"
              >
                <ul
                  className="rc-scroll--x rc-list rc-list--inline rc-list--align rc-list--blank tabbed-nav__list rc-tab--centered"
                  role="tablist"
                  data-ref="list"
                >
                  <li>
                    <a
                      className="rc-tab rc-tab--img rc-btn"
                      target="_blank"
                      href="https://www.royalcanin.com/de/about-us/acceptance-guarantee"
                      data-toggle="image__panel-0"
                      role="tab"
                    >
                      <figure
                        className="rc-tab__img rc-img--round rc-img--round--lg lazyloaded"
                        data-bgset="https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=320&auto=compress&fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=360&auto=compress&fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=640&auto=compress&fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=720&auto=compress&fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=960&auto=compress&fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=1280&auto=compress&fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=1440&auto=compress&fm=jpg 1440w"
                        data-altset="test"
                        style={{
                          backgroundImage:
                            "url('https://cdn.royalcanin-weshare-online.io/iLlZSG0B2t6cTeuUQwrd/v1/akzeptanzgarantie-logo-rc?w=320&auto=compress&fm=jpg')"
                        }}
                      >
                        <figcaption className="rc-screen-reader-text" />
                      </figure>
                      <span className="rc-tab__label invisible">
                        Der kompetente Partner für Hunde- und Katzenzüchter
                      </span>
                      <span className="rc-tab__label invisible">
                        ROYAL CANIN PROFESSIONAL
                      </span>
                      {Boolean(
                        window.__.env.REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                      ) && (
                        <span className="warning_blank">
                          <FormattedMessage id="opensANewWindow" />
                        </span>
                      )}
                    </a>
                  </li>
                  <li>
                    <a
                      className="rc-tab rc-tab--img rc-btn"
                      target="_blank"
                      href="https://www.royalcanin.com/de/about-us/become-a-partner"
                      data-toggle="image__panel-1"
                      role="tab"
                    >
                      <figure
                        className="rc-tab__img rc-img--round rc-img--round--lg lazyloaded"
                        data-bgset="https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=320&auto=compress&fm=jpg 320w,https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=360&auto=compress&fm=jpg 360w,https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=640&auto=compress&fm=jpg 640w,https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=720&auto=compress&fm=jpg 720w,https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=960&auto=compress&fm=jpg 960w,https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=1280&auto=compress&fm=jpg 1280w,https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=1440&auto=compress&fm=jpg 1440w"
                        data-altset="test"
                        style={{
                          backgroundImage:
                            "url('https://cdn.royalcanin-weshare-online.io/VCEia2QBaxEApS7LVvFj/v4/2014-sporting-and-working-dog-pro-logos-trail-4300-endurance-4800-marathon-5000-professional-logo?w=320&auto=compress&fm=jpg')"
                        }}
                      >
                        <figcaption className="rc-screen-reader-text">
                          ROYAL CANIN PROFESSIONAL
                        </figcaption>
                      </figure>
                      <span className="rc-tab__label">
                        Der kompetente Partner für Hunde- und Katzenzüchter
                      </span>
                      <span className="rc-tab__label">
                        ROYAL CANIN PROFESSIONAL
                      </span>
                      {Boolean(
                        window.__.env.REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                      ) && (
                        <span className="warning_blank">
                          <FormattedMessage id="opensANewWindow" />
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="rc-padding--sm rc-margin-bottom--xs rc-bg-colour--brand3 rc-full-width rc-animation-001--base rc-animation-001--active"
            data-component="content-animation"
            id="content-block-with-text-2-about-us-page"
          >
            <div className="rc-padding-y--md rc-md-down" />
            <div className="rc-layout-container rc-one-column rc-max-width--md">
              <div className="rc-column">
                <div className="rc-full-width rc-text--center rc-padding-x--sm">
                  <div>
                    <h2 className="rc-beta ">
                      Neuigkeiten und Veranstaltungen
                    </h2>
                    <p>
                      Entdecken Sie unsere aktuellen Neuigkeiten und
                      Veranstaltungen
                    </p>
                    <a
                      className="rc-btn rc-btn--two"
                      data-component="cta-event-tracker"
                      data-track-category="About us / Button"
                      data-track-custom="false"
                      data-track-custom-action
                      data-track-custom-category
                      data-track-custom-event
                      data-track-custom-label
                      data-track-label="Jetzt entdecken / Neuigkeiten und Veranstaltungen / Gesundheit ist unsere Leidenschaft | Royal Canin DE - Royal Canin - DE"
                      href="https://www.royalcanin.com/de/about-us/news"
                      target="_blank"
                    >
                      Jetzt entdecken
                      {Boolean(
                        window.__.env.REACT_APP_ACCESSBILITY_OPEN_A_NEW_WINDOW
                      ) && (
                        <span className="warning_blank">
                          <FormattedMessage id="opensANewWindow" />
                        </span>
                      )}
                    </a>
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

export default about;
