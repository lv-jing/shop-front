import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';
import Help from './Help';
import NavItem from './NavItem';
import LazyLoad from 'react-lazyload';
import { optimizeImage } from '@/utils/utils';
import cn from 'classnames';

/**
 * 渲染二级菜单
 */
export default class DropDownMenu extends React.Component {
  static defaultProps = {
    headerNavigationList: [],
    activeTopParentId: -1,
    handleClickNavItem: () => {},
    showNav: true,
    showLoginBtn: true
  };
  constructor(props) {
    super(props);
    this.state = { currentDesc: null };
    this.hanldeListItemMouseOver = this.hanldeListItemMouseOver.bind(this);
    this.handleNavChildrenMouseOver =
      this.handleNavChildrenMouseOver.bind(this);
    this.handleClickNavItem = this.handleClickNavItem.bind(this);
    this.hubGA = window.__.env.REACT_APP_HUB_GA == '1';
  }
  handleNavChildrenMouseOver(item, childrenItem, e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      currentDesc: {
        text: childrenItem.navigationDesc,
        imageLink: childrenItem.imageLink
      }
    });
    this.props.updateActiveTopParentId(item.id);
  }
  handleNavChildrenMouseOut = () => {
    this.setState({
      currentDesc: null
    });
  };
  hanldeListItemMouseOver(item) {
    // 若存在子项，才展开
    this.props.updateActiveTopParentId(item.expanded ? item.id : -1);
  }
  hanldeListItemMouseOut = () => {
    this.props.updateActiveTopParentId(-1);
  };
  // 埋点submenu和banner
  GAClickMenu(interaction) {
    const { category, action, label, value } = interaction;
    window?.dataLayer?.push({
      event: `${window.__.env.REACT_APP_GTM_SITE_ID}clickMenu`,
      interaction: {
        category,
        action,
        label,
        value
      }
    });
  }

  handleClickNavItem = (item, navItem) => {
    // 解决de点击菜单,蒙层未自动消失问题
    this.props.toggleShowBodyMask({ visible: false });
    // 点击subMenu埋点-start
    let interaction = {
      category: 'submenu',
      action: 'submenu',
      label: item.navigationLink,
      value: item.navigationName
    };
    this.GAClickMenu(interaction);
    this.hubGAClickMenu(item, navItem);
    // 点击subMenu埋点-end
    // this.props.handleClickNavItem(item);
  };

  hubGAClickMenu(item, navItem) {
    const level1 = navItem?.navigationName;
    const level2 = item?.navigationName;
    const itemName = [level1, level2].filter((item) => item).join('|');
    this.hubGA &&
      window.dataLayer &&
      dataLayer &&
      dataLayer.push({
        event: 'navTopClick',
        navTopClick: {
          itemName
        }
      });
  }

  renderNormalMenu = (item, i) => {
    const { activeTopParentId } = this.props;
    const { currentDesc } = this.state;
    let descObj = {};
    if (item.navigationDesc && item.imageLink) {
      descObj = {
        text: item.navigationDesc,
        imageLink: item.imageLink
      };
    }
    if (currentDesc && (currentDesc.text || currentDesc.imageLink)) {
      descObj = Object.assign(descObj, {
        text: currentDesc.text || '',
        imageLink: currentDesc.imageLink || ''
      });
    }
    return (
      <div
        className={`${
          window.__.env.REACT_APP_COUNTRY == 'de' ? 'drop' : ''
        } dropdown-nav d-flex ${activeTopParentId === item.id ? 'show' : ''}`}
        aria-hidden={activeTopParentId === item.id}
        onMouseOver={this.hanldeListItemMouseOver.bind(this, item)}
        onMouseOut={this.hanldeListItemMouseOut}
        key={i}
      >
        <div className="flex-grow-1 rc-padding-y--xs rc-padding-left--sm--desktop flex justify-center">
          <ul
            className="d-flex justify-content-center rc-padding--none rc-margin--none fullHeight flex-wrap"
            role="menu"
          >
            {(item.children || [])
              .sort((a, b) => a.sort - b.sort)
              .map((mitem, mIndx) => (
                <li
                  className="dropdown-nav__item rc-padding-top--xs relative"
                  role="menuitem"
                  key={mIndx}
                  onMouseOver={this.handleNavChildrenMouseOver.bind(
                    this,
                    item,
                    mitem
                  )}
                  onMouseOut={this.handleNavChildrenMouseOut}
                >
                  <div className="dropdown-nav__title rc-margin-bottom--xs">
                    <span className="dropdown-nav__item font-weight-normal">
                      <NavItem
                        item={mitem}
                        onClick={this.handleClickNavItem.bind(this, mitem)}
                      >
                        {mitem.navigationName}
                      </NavItem>
                    </span>
                  </div>
                  <ul
                    className="rc-padding--none"
                    role="menu"
                    aria-hidden="true"
                  >
                    {(mitem.children || [])
                      .sort((a, b) => a.sort - b.sort)
                      .map((citem, cIndex) => (
                        <li
                          className="dropdown-nav__item"
                          role="menuitem"
                          key={cIndex}
                          onMouseOver={this.handleNavChildrenMouseOver.bind(
                            this,
                            item,
                            citem
                          )}
                          onMouseOut={this.handleNavChildrenMouseOut}
                        >
                          <NavItem
                            className="dropdown-nav__link"
                            item={citem}
                            onClick={this.handleClickNavItem.bind(
                              this,
                              citem,
                              item
                            )}
                          >
                            {citem.navigationName}
                          </NavItem>
                        </li>
                      ))}
                  </ul>
                  {mIndx === 0 && (
                    <div className="dropdown-nav__cat-link rc-padding-bottom--xs">
                      <NavItem
                        item={item}
                        onClick={this.handleClickNavItem.bind(this, item)}
                        className="rc-styled-link"
                      >
                        <FormattedMessage id="viewAll" />
                      </NavItem>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
        {descObj && Object.keys(descObj).length > 0 ? (
          <div className={`content-asset`}>
            <div className="dropdown-nav__banner rc-bg-colour--brand4 flex-column flex-sm-row">
              <div className="align-self-center rc-padding-left--md rc-padding-right--xs rc-padding-y--lg--mobile">
                <div className="rc-large-intro rc-margin-bottom--sm inherit-fontsize">
                  <p>{descObj.text}</p>
                </div>
                <Link to="/product-finder">
                  <button
                    className="rc-btn rc-btn--one"
                    onClick={() =>
                      this.GAClickMenu({
                        category: 'banner',
                        action: 'banner',
                        label: '/product-finder',
                        value: 'product-finder'
                      })
                    }
                  >
                    <FormattedMessage id="findTheRightDiet" />
                  </button>
                </Link>
              </div>
              <div className="mt-auto">
                <LazyLoad>
                  <FormattedMessage id="findTheRightDiet">
                    {(txt) => (
                      <img
                        className="pull-right rc-lg-up ls-is-cached lazyloaded"
                        src={optimizeImage({
                          originImageUrl: descObj.imageLink,
                          width: 245
                        })}
                        alt={txt}
                      />
                    )}
                  </FormattedMessage>
                </LazyLoad>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  renderHelpMenu = (item, i) => {
    const { configStore, activeTopParentId } = this.props;
    return (
      <div
        className={`dropdown-nav d-flex full-width-asset justify-content-center ${
          activeTopParentId === item.id ? 'show' : ''
        }`}
        aria-hidden={activeTopParentId === item.id}
        onMouseOver={this.hanldeListItemMouseOver.bind(this, item)}
        onMouseOut={this.hanldeListItemMouseOut}
        key={i}
      >
        <div className="content-asset">
          <Help configStore={configStore} />
        </div>
      </div>
    );
  };
  render() {
    const { headerNavigationList, activeTopParentId } = this.props;
    return (
      <>
        <nav
          className={`rc-header__nav rc-header__nav--secondary rc-md-up ${
            this.props.showNav ? '' : 'rc-hidden'
          }`}
          // style={{ maxWidth: '1120px' }}
        >
          <ul
            className={cn(
              `rc-list rc-list--blank rc-list--inline rc-list--align rc-header__center flex-nowrap`,
              { 'rc-hidden': !this.props.showLoginBtn }
            )}
          >
            {headerNavigationList.map((item, i) => (
              <li
                className={cn(`rc-list__item`, {
                  dropdown: item.expanded,
                  active: activeTopParentId === item.id,
                  'mr-0': i === headerNavigationList.length - 1
                })}
                key={i}
                onMouseOver={this.hanldeListItemMouseOver.bind(this, item)}
                onMouseOut={this.hanldeListItemMouseOut.bind(this, item)}
              >
                <ul className="rc-list rc-list--blank rc-list--inline rc-list--align rc-header__center">
                  <li className="rc-list__item">
                    <span className="rc-list__header">
                      <NavItem
                        item={item}
                        onClick={() => this.hubGAClickMenu(item)}
                        className="rc-list__header"
                      >
                        {item.expanded ? (
                          <span className="rc-header-with-icon header-icon">
                            {item.navigationName}
                            <span
                              className={`rc-icon rc-iconography ${
                                item.id === activeTopParentId
                                  ? 'rc-up rc-brand1'
                                  : 'rc-down'
                              }`}
                            />
                          </span>
                        ) : (
                          item.navigationName
                        )}
                      </NavItem>
                    </span>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <div className="rc-md-up">
          {headerNavigationList
            .filter(
              (ele) =>
                (ele.expanded && ele.children && ele.children.length) ||
                (ele.navigationLink && ele.navigationLink.includes('/help'))
            )
            .map((item, i) =>
              item.navigationLink && item.navigationLink.includes('/help')
                ? this.renderHelpMenu(item, i)
                : this.renderNormalMenu(item, i)
            )}
        </div>
      </>
    );
  }
}
