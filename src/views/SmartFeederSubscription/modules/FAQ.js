import React from 'react';
import faqJson from './faq.json';
// import { getFaq } from '../../api/faq';
import { FormattedMessage } from 'react-intl-phraseapp';
import Skeleton from 'react-skeleton-loader';
import LazyLoad from 'react-lazyload';
import { getRemainings } from '@/api/dispenser';
import { formatMoney } from '@/utils/utils';
const localItemRoyal = window.__.localItemRoyal;
const pageLink = window.location.href;

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFAQ: faqJson.data,
      remainingsList: [],
      // 当前展开的FAQ
      showCur: -1,
      // loading: true
      loading: false
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentWillUnmount() {}
  componentWillReceiveProps({ planId }) {
    if (planId && this.props.planId != planId) {
      this.getRemainings(planId);
    }
  }
  getRemainings = async (planId) => {
    let params = {
      planId,
      storeId: window.__.env.REACT_APP_STOREID
    };
    let res = await getRemainings(params);
    let remainingsList = res.context;
    this.setState({
      remainingsList
    });
  };

  componentDidMount() {}
  getElementToPageTop(el) {
    if (el.parentElement) {
      return this.getElementToPageTop(el.parentElement) + el.offsetTop;
    }
    return el.offsetTop;
  }
  handleSelect(id) {
    if (id === this.state.showCur) {
      this.setState({
        showCur: -1
      });
    } else {
      this.setState({
        showCur: id
      });
    }
  }

  render(h) {
    const event = {
      page: {
        type: 'other',
        theme: 'Brand',
        // path: this.props.location.pathname,
        error: '',
        hitTimestamp: new Date(),
        filters: ''
      }
    };
    return (
      <div>
        <main className="rc-bg-colour--brand3">
          <div>
            {/* <div className="rc-bg-colour--brand3">
              <div>
                <div className="rc-padding-y--md rc-md-down" />
                <div className="rc-one-column">
                  <div>
                    <div className="rc-max-width--md text-center rc-margin-y--md">
                      <h1
                        className="text-center"
                        className="rc-alpha inherit-fontsize"
                      >
                        <FormattedMessage id="faq.frequentQuestions" />
                      </h1>
                      <p
                        className="text-center"
                        style={{ marginBottom: '4rem' }}
                      >
                        <FormattedMessage
                          id="faq.title"
                          values={{
                            val1: (
                              <Link
                                rel="nofollow"
                                className="rc-styled-link ui-cursor-pointer"
                                target="_blank"
                                to="/help"
                                rel="nofollow"
                              >
                                <FormattedMessage id="here" />
                              </Link>
                            )
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {this.state.loading ? (
              <div className="pb-4">
                <Skeleton color="#f5f5f5" width="100%" height="50%" count={5} />
              </div>
            ) : (
              this.state.dataFAQ.map((pitem, index) => (
                <>
                  <div
                    className="rc-bg-colour--brand3 rc-margin-y--sm"
                    style={{ marginTop: '3rem' }}
                    key={'p-' + index}
                  >
                    <h2
                      name={`catogery-${index}`}
                      id={`catogery-${index}`}
                      className="text-center"
                    >
                      {pitem.faqType}
                    </h2>
                  </div>
                  <dl
                    data-toggle-group=""
                    data-toggle-effect="rc-expand--vertical"
                    className="rc-max-width--xl rc-padding-x--sm rc-padding-x--xl--mobile rc-margin-y--sm rc-margin-y--lg--mobile"
                    // className="rc-max-width--xl rc-padding-x--sm rc-padding-x--xl--mobile rc-margin-y--sm rc-margin-y--lg--mobile"
                  >
                    <div className="experience-region experience-questions">
                      {pitem.storeFaqVo.map((item) => (
                        <div
                          key={item.id}
                          className={`rc-list__accordion-item test-color
                        ${
                          this.state.showCur === item.id
                            ? 'showItem'
                            : 'hiddenItem'
                        }`}
                        >
                          <div
                            className="rc-list__header"
                            onClick={this.handleSelect.bind(this, item.id)}
                            style={{
                              display: 'flex',
                              padding: '1rem 0.5rem',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div
                              style={{ flex: 1 }}
                              dangerouslySetInnerHTML={{
                                __html: item.question
                              }}
                            ></div>

                            <span
                              // style={{ width: '32px' }}
                              className={`scalemin icon-change ${
                                this.state.showCur === item.id
                                  ? 'rc-icon rc-up rc-brand1'
                                  : 'rc-icon rc-down rc-iconography'
                              }`}
                              style={{ right: '9.5rem', height: '28px' }}
                            ></span>
                          </div>
                          <div className={`rc-list__content `}>
                            <p
                              dangerouslySetInnerHTML={{ __html: item.answer }}
                            ></p>
                            {item.showRemainings && (
                              <p>
                                <ul className="subdes-modal-ul-wrap">
                                  <li
                                    className="d-flex"
                                    style={{
                                      background: '#F6F6F6',
                                      lineHeight: '2rem',
                                      borderBottom: '1px solid #E4E4E4',
                                      padding: '0 1rem'
                                    }}
                                  >
                                    <span className="width50">
                                      Unsubcribe before
                                    </span>
                                    <span
                                      className="width50"
                                      style={{ paddingLeft: '0.5rem' }}
                                    >
                                      Remaining price
                                    </span>
                                  </li>
                                  {this.state.remainingsList.map((item) => (
                                    <li
                                      key={item.id}
                                      className="d-flex"
                                      style={{
                                        lineHeight: '2rem',
                                        borderBottom: '1px solid #E4E4E4',
                                        padding: '0 1rem'
                                      }}
                                    >
                                      <span className="width50">
                                        {item.deliveryTimes}
                                        <FormattedMessage id="smartFeederSubscription.times" />
                                      </span>
                                      <span
                                        className="width50"
                                        style={{ paddingLeft: '0.5rem' }}
                                      >
                                        {formatMoney(item.remainingPrice)}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </p>
                            )}
                            <LazyLoad>
                              <img src={item.imgUl} alt="storeFaq image" />
                            </LazyLoad>
                          </div>
                        </div>
                      ))}
                    </div>
                  </dl>
                </>
              ))
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default FAQ;
