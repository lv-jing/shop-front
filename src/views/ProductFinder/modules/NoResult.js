import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import { inject, observer } from 'mobx-react';
import BannerTip from '@/components/BannerTip';
import Skeleton from 'react-skeleton-loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumbs from '@/components/BreadCrumbs';
import Help from './Help';
import LoginButton from '@/components/LoginButton';
import LazyLoad from 'react-lazyload';

import catImg from '@/assets/images/product-finder-cat2.jpg';
import dogImg from '@/assets/images/product-finder-dog2.jpg';

const sessionItemRoyal = window.__.sessionItemRoyal;
const localItemRoyal = window.__.localItemRoyal;

function PetJSX(props) {
  const { petBaseInfo, intl } = props;
  let sterilized = (petBaseInfo && petBaseInfo.sterilized) || '...';
  let sterilizedText = sterilized;
  if (sterilized.toLocaleLowerCase().includes('stérilisé')) {
    // 如果是法语
    sterilizedText = sterilized.includes('Non') ? 'Non' : 'Oui';
  }
  return (
    <div className="p-f-pet-box mt-4 pt-4 mb-4 pb-4">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="border rounded">
            <div className="row align-items-center text-break">
              <div className="col-12 col-md-6 row mt-4 mb-2 md:mb-4">
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
                      alt="pet-image"
                    />
                  </LazyLoad>
                </div>
                <div className="col-12 col-md-7 text-center md:text-left">
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
                      <span className="font-weight-normal">
                        {sterilizedText}
                        {/* {petBaseInfo && petBaseInfo.sterilized|| '...'} */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <p className="text-center pt-3 pb-3 pf-pd-2rem">
                  <FormattedMessage id="productFinder.rigisterMyPetProfile" />
                  <br />
                </p>
                <div className="row justify-content-center text-center pf-pd-2rem">
                  {props.isLogin ? (
                    <Link
                      className="col-12 col-md-6 rc-btn rc-btn--one mb-3"
                      to="/account/pets"
                    >
                      <FormattedMessage id="productFinder.createMyPetProfile" />
                    </Link>
                  ) : (
                    <LoginButton
                      beforeLoginCallback={async () => {
                        localItemRoyal.set('okta-redirectUrl', '/account/pets');
                      }}
                      btnClass="col-12 col-md-6 rc-btn rc-btn--one mb-3"
                      intl={intl}
                    >
                      <FormattedMessage id="productFinder.createMyPetProfile" />
                    </LoginButton>
                  )}
                  <span
                    className="col-12 col-md-6 rc-btn rc-btn--two mb-4 ui-cursor-pointer"
                    onClick={props.handleClickGotoStart}
                  >
                    <FormattedMessage id="productFinder.startAgin" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

@inject('loginStore')
@injectIntl
@observer
class ProductFinderNoResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: localItemRoyal.get('pf-cache-type'),
      isLoading: false,
      petBaseInfo: null
    };
  }
  componentDidMount() {
    const questionlist = sessionItemRoyal.get('pf-questionlist');
    if (questionlist) {
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
      this.setState({
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
        }
      });
    }
  }
  get isLogin() {
    return this.props.loginStore.isLogin;
  }
  handleClickGotoStart = () => {
    localItemRoyal.remove(`pf-cache-type`);
    this.props.history.push(`/product-finder`);
  };
  render() {
    const { location, history, match } = this.props;
    const { isLoading, questionlist, petBaseInfo, type } = this.state;
    return (
      <div>
        <Header {...this.props} showMiniIcons={true} showUserIcon={true} />
        <main className="rc-content--fixed-header rc-main-content__wrapper rc-bg-colour--brand3">
          <BannerTip />
          <BreadCrumbs />
          <div className="rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile">
            {isLoading ? (
              <div className="mt-4">
                <Skeleton color="#f5f5f5" width="100%" height="50%" count={4} />
              </div>
            ) : (
              <div className="">
                <h2 className="rc-beta markup-text mb-0 text-center">
                  <FormattedMessage id="productFinder.searchResultTip3" />
                </h2>
                <p className="text-center" style={{ fontSize: '1.25rem' }}>
                  <FormattedMessage id="productFinder.searchResultTip4" />
                </p>

                <PetJSX
                  {...this.props}
                  type={type}
                  isLogin={this.isLogin}
                  questionlist={questionlist}
                  petBaseInfo={petBaseInfo}
                  handleClickGotoStart={this.handleClickGotoStart}
                  history={history}
                />
                <div className="row">
                  <div className="col-12 order-0 md:order-1">
                    <div className="rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile rc-max-width--lg mb-0">
                      <div className="row">
                        <div className="col-12 col-md-4 order-0 md:order-1 text-center">
                          <h2 className="rc-beta markup-text mb-4">
                            <FormattedMessage id="seeAllOurProducts" />
                          </h2>
                          <div className="rc-btn-group rc-md-up">
                            <Link className="rc-btn rc-btn--one" to="/cats">
                              <FormattedMessage id="cats3" />
                            </Link>
                            <Link className="rc-btn rc-btn--one" to="/dogs">
                              <FormattedMessage id="dogs3" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 order-1 md:order-0">
                          <LazyLoad style={{ width: '100%' }}>
                            <img src={catImg} alt="cat image" />
                          </LazyLoad>
                          <div className="rc-md-down text-center mt-4">
                            <Link className="rc-btn rc-btn--one" to="/cats">
                              <FormattedMessage id="cats3" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 order-2 md:order-2">
                          <LazyLoad style={{ width: '100%' }}>
                            <img src={dogImg} alt="dog image" />
                          </LazyLoad>
                          <div className="rc-md-down text-center mt-4">
                            <Link className="rc-btn rc-btn--one" to="/dogs">
                              <FormattedMessage id="dogs3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr className="rc-md-down" />
          <div className="col-12 order-1 md:order-0 rc-padding-bottom--lg">
            <div className="p-f-help-box mt-4">
              <p className="text-center pt-3" style={{ fontSize: '1.3rem' }}>
                <FormattedMessage id="productFinder.helpTip1" />
              </p>
              <p className="text-center">
                <FormattedMessage id="productFinder.helpTip2" />
              </p>
              <Help />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default ProductFinderNoResult;
