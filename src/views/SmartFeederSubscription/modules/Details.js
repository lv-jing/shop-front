import { getDeviceType } from '@/utils/utils';
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

const Details = ({ goodsDetailTabs, details }) => {
  const isMobile = getDeviceType() !== 'PC';
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const tabsArr = [
    { show: true },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false }
  ];
  console.info('goodsDetailTab', goodsDetailTab);
  console.info('details', details);
  const [tabs, setTabs] = useState(tabsArr);
  const [goodsDetailTab, setGoodsDetailTab] = useState(goodsDetailTabs || []);
  const getDetail = () => {
    if (!details) {
      return;
    }
    try {
      let res = details;
      let goodsDetailTabTmp = { tabName: [], tabContent: [] };
      // let res = await getDetailsBySpuNo(details.goodsNo);
      try {
        let tmpGoodsDetail = res.context.goods.goodsDetail;
        if (tmpGoodsDetail) {
          tmpGoodsDetail = JSON.parse(tmpGoodsDetail);
          for (let key in tmpGoodsDetail) {
            if (tmpGoodsDetail[key]) {
              if (window.__.env.REACT_APP_COUNTRY === 'fr') {
                let tempObj = {};
                let tempContent = '';
                try {
                  if (key === 'Description') {
                    tmpGoodsDetail[key].map((el) => {
                      if (
                        Object.keys(JSON.parse(el))[0] ===
                        'EretailShort Description'
                      ) {
                        tempContent =
                          tempContent +
                          `<p style="white-space: pre-line">${
                            Object.values(JSON.parse(el))[0]
                          }</p>`;
                      }
                    });
                  } else if (key === 'Bénéfices') {
                    tmpGoodsDetail[key].map((el) => {
                      tempContent =
                        tempContent +
                        `<li>
                        <div className="list_title">${
                          Object.keys(JSON.parse(el))[0]
                        }</div>
                        <div className="list_item" style="padding-top: .9375rem; margin-bottom: 1.25rem;">${
                          Object.values(JSON.parse(el))[0]['Description']
                        }</div>
                      </li>`;
                    });
                    tempContent = `<ul className="ui-star-list rc_proudct_html_tab2 list-paddingleft-2">
                      ${tempContent}
                    </ul>`;
                  } else if (key === 'Composition') {
                    if (res.context.goods.goodsType !== 2) {
                      tmpGoodsDetail[key].map((el) => {
                        tempContent =
                          tempContent +
                          `<p>

                          <div className="content">${
                            Object.values(JSON.parse(el))[0]
                          }</div>
                        </p>`;
                      });
                    } else {
                      tmpGoodsDetail[key].map((el) => {
                        let contentObj = JSON.parse(el);
                        let contentValue = '';
                        Object.values(Object.values(contentObj)[0]).map(
                          (el) => {
                            contentValue += `<p>${el}</p>`;
                          }
                        );
                        tempContent =
                          tempContent +
                          `
                          <div className="title">
                            ${Object.keys(contentObj)[0]}
                          </div>
                          <div className="content">${contentValue}</div>
                        `;
                      });
                    }
                  } else {
                    tempContent = tmpGoodsDetail[key];
                  }
                  goodsDetailTabTmp.tabName.push(key);
                  goodsDetailTabTmp.tabContent.push(tempContent);
                } catch (e) {
                  console.log(e);
                }
              } else {
                goodsDetailTabTmp.tabName.push(key);
                goodsDetailTabTmp.tabContent.push(tmpGoodsDetail[key]);
              }
              console.info('testteste', tmpGoodsDetail[key]);
              tabs.push({ show: false });
              // goodsDetailTabTmp.tabContent.push(translateHtmlCharater(tmpGoodsDetail[key]))
            }
          }
        }
        setGoodsDetailTab(goodsDetailTabTmp);
        setTabs(tabs);
        // this.setState({
        //   goodsDetailTab,
        //   tabs
        // });
      } catch (err) {
        getDict({
          type: 'goodsDetailTab',
          storeId: window.__.env.REACT_APP_STOREID
        }).then((res) => {
          goodsDetailTab.tabName = res.context.sysDictionaryVOS.map(
            (ele) => ele.name
          );
          setGoodsDetailTab(goodsDetailTab);
        });
      }
    } catch {}
  };
  useEffect(() => {
    getDetail();
  }, []);

  const createMarkup = (text) => ({ __html: text });
  return (
    <>
      {!isMobile && goodsDetailTab.tabName && goodsDetailTab.tabName.length ? (
        <div className="rc-max-width--xl">
          <div className="rc-match-heights rc-content-h-middle rc-reverse-layout">
            <div>
              <div className="rc-border-bottom rc-border-colour--interface">
                <nav className="rc-fade--x">
                  <ul
                    className="rc-scroll--x rc-list rc-list--inline rc-list--align rc-list--blank"
                    role="tablist"
                  >
                    {goodsDetailTab.tabName.map((ele, index) => (
                      <li key={index}>
                        <button
                          className="rc-tab rc-btn rounded-0 border-top-0 border-right-0 border-left-0"
                          data-toggle={`tab__panel-${index}`}
                          aria-selected={
                            activeTabIdx === index ? 'true' : 'false'
                          }
                          role="tab"
                          onClick={() => setActiveTabIdx(index)}
                        >
                          {ele}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div
                className="rc-tabs tabs-detail"
                style={{ marginTop: '40px' }}
              >
                {goodsDetailTab.tabContent.map((ele, i) => (
                  <div
                    id={`tab__panel-${i}`}
                    key={i}
                    className="rc-tabs__content__single clearfix benefits ingredients rc-showhide"
                    aria-expanded={activeTabIdx === i ? 'true' : 'false'}
                  >
                    <div className="block">
                      <p
                        className="content rc-scroll--x"
                        style={{ marginBottom: '4rem' }}
                        dangerouslySetInnerHTML={createMarkup(ele)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div></div>
      <div className="dl-box">
        {isMobile &&
          goodsDetailTab.tabName &&
          goodsDetailTab.tabName.map((ele, index) => (
            <dl style={{ marginBottom: '0' }}>
              <div
                className={`rc-list__accordion-item test-color
              ${tabs[index]?.show ? 'showItem' : 'hiddenItem'}`}
              >
                <div
                  className="rc-list__header"
                  onClick={() => {
                    console.info('....', tabs);
                    tabs.forEach((item, idx) => {
                      if (idx != index) {
                        item.show = false;
                      }
                    });
                    tabs[index].show = !tabs[index].show;
                    setTabs([...tabs]);
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: ele }}></div>
                  <span
                    className={`icon-change ${
                      tabs[index]?.show
                        ? 'rc-icon rc-up rc-brand1'
                        : 'rc-icon rc-down rc-iconography'
                    }`}
                  ></span>
                </div>
                <div className={`rc-list__content`}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: goodsDetailTab.tabContent[index]
                    }}
                  />
                  <LazyLoad height={200}>
                    <img
                      src={goodsDetailTab.tabContent[index].imgUl}
                      alt="goods Detail table image"
                    />
                  </LazyLoad>
                </div>
              </div>
            </dl>
          ))}
      </div>
    </>
  );
};
export default Details;
