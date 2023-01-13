import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import { inject, observer } from 'mobx-react';
import Selection from '@/components/Selection';
import CitySearchSelection from '@/components/CitySearchSelection';
import { getDictionary, validData } from '@/utils/utils';
import { ADDRESS_RULE } from '@/utils/constant';
import { getProvincesList } from '@/api/address';

/**
 * add/edit address form - member/visitor
 */
@inject('paymentStore')
@injectIntl
@observer
class EditForm extends React.Component {
  static defaultProps = {
    type: 'billing',
    initData: null,
    isLogin: false,
    updateData: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      address: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        country: window.__.env.REACT_APP_DEFAULT_COUNTRYID || '',
        countryName: '',
        city: '',
        cityName: '',
        provinceNo: '',
        provinceId: '',
        province: '',
        postCode: '',
        phoneNumber: ''
      },
      countryList: [], // 国家列表
      provinceList: [], // 省份列表
      errMsgObj: {}
    };
  }
  componentDidMount() {
    const { initData = {} } = this.props;
    const { address } = this.state;
    // delete initData['email'];
    // delete address['email'];

    console.log('------------- EditForm initData: ', initData);
    console.log('------------- EditForm address: ', address);

    this.setState({ address: Object.assign(address, initData) }, () => {
      this.props.updateData(this.state.address);
    });

    getDictionary({ type: 'country' }).then((res) => {
      const { address } = this.state;
      this.setState({
        countryList: res
      });
      address.countryName = res[0].name;
    });

    // 查询省份列表（美国：州）
    getProvincesList({ storeId: window.__.env.REACT_APP_STOREID }).then(
      (res) => {
        this.setState({
          provinceList: res.context.systemStates
        });
      }
    );
  }
  computedList(key) {
    let tmp = '';
    if (key == 'province') {
      tmp = this.state[`${key}List`].map((c) => {
        return {
          value: c.id.toString(),
          name: c.stateName,
          stateNo: c.stateNo
        };
      });
      tmp.unshift({ value: '', name: 'State' });
    } else {
      tmp = this.state[`${key}List`].map((c) => {
        return {
          value: c.id.toString(),
          name: c.name
        };
      });
      tmp.unshift({ value: '', name: '' });
    }
    return tmp;
  }
  deliveryInputChange = (e) => {
    const { address } = this.state;
    const target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'postCode' || name === 'phoneNumber') {
      value = value.replace(/\s+/g, '');
    }
    if (name === 'phoneNumber' && window.__.env.REACT_APP_COUNTRY === 'fr') {
      value = value.replace(/^[0]/, '+(33)');
    }
    address[name] = value;
    this.setState({ address }, () => {
      this.props.updateData(this.state.address);
    });
    this.inputBlur(e);
  };
  inputBlur = async (e) => {
    const { intl } = this.props;
    const { errMsgObj } = this.state;
    const target = e.target;
    const targetRule = ADDRESS_RULE.filter((e) => e.key === target.name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    try {
      await validData({
        rule: targetRule,
        data: { [target.name]: value },
        intl
      });
      this.setState({
        errMsgObj: Object.assign({}, errMsgObj, {
          [target.name]: ''
        })
      });
    } catch (err) {
      this.setState({
        errMsgObj: Object.assign({}, errMsgObj, {
          [target.name]: err.message
        })
      });
    }
  };
  handleSelectedItemChange(key, data) {
    const { address } = this.state;
    console.log('--------------------------★★★ EditForm data: ', data);
    if (key == 'province') {
      address.provinceId = data.value;
      address.province = data.name;
      address.provinceNo = data.stateNo; // 省份简写
    } else if (key == 'country') {
      address.countryName = data.name;
    } else {
      address[key] = data.value;
    }
    this.setState({ address }, () => {
      this.props.updateData(this.state.address);
    });
  }
  handleCityInputChange = (data) => {
    const { address } = this.state;
    address.city = data.id;
    address.cityName = data.cityName;
    this.setState({ address }, () => {
      this.props.updateData(this.state.address);
    });
  };
  firstNameJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_firstName">
        <label className="form-control-label" htmlFor="shippingFirstName">
          <FormattedMessage id="payment.firstName" />
        </label>
        <span
          className="rc-input rc-input--inline rc-full-width rc-input--full-width"
          input-setup="true"
        >
          <input
            className="rc-input__control shippingFirstName"
            id="shippingFirstName"
            type="text"
            autocomplete="off"
            value={address.firstName}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            name="firstName"
            maxLength="50"
          />
          <label className="rc-input__label" htmlFor="id-text1" />
        </span>
        {errMsgObj.firstName && (
          <div className="text-danger-2">{errMsgObj.firstName}</div>
        )}
      </div>
    );
  };
  lastNameJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_lastName">
        <label className="form-control-label" htmlFor="shippingLastName">
          <FormattedMessage id="payment.lastName" />
        </label>
        <span
          className="rc-input rc-input--inline rc-full-width rc-input--full-width"
          input-setup="true"
        >
          <input
            className="rc-input__control shippingLastName"
            id="shippingLastName"
            type="text"
            autocomplete="off"
            value={address.lastName}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            name="lastName"
            maxLength="50"
          />
          <label className="rc-input__label" htmlFor="id-text1" />
        </span>
        {errMsgObj.lastName && (
          <div className="text-danger-2">{errMsgObj.lastName}</div>
        )}
      </div>
    );
  };
  addressRequiredJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_lastName">
        <label className="form-control-label" htmlFor="shippingAddress1">
          <FormattedMessage id="payment.address1" />
        </label>
        <span
          className="rc-input rc-input--inline rc-full-width rc-input--full-width"
          input-setup="true"
        >
          <input
            className="rc-input__control shippingAddress1"
            id="shippingAddress1"
            type="text"
            autocomplete="off"
            value={address.address1}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            name="address1"
            maxLength="50"
          />
          <label className="rc-input__label" htmlFor="shippingAddress1" />
        </span>
        {errMsgObj.address1 && (
          <div className="text-danger-2">{errMsgObj.address1}</div>
        )}
      </div>
    );
  };
  addressOptionJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group dwfrm_shipping_shippingAddress_addressFields_lastName">
        <label className="form-control-label" htmlFor="shippingAddress2">
          <FormattedMessage id="payment.address2" />
        </label>
        <span
          className="rc-input rc-input--inline rc-full-width rc-input--full-width"
          input-setup="true"
        >
          <input
            className="rc-input__control shippingAddress2"
            id="shippingAddress2"
            type="text"
            autocomplete="off"
            value={address.address2}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            name="address2"
            maxLength="50"
          />
          <label className="rc-input__label" htmlFor="id-text1" />
        </span>
        {errMsgObj.address2 && (
          <div className="text-danger-2">{errMsgObj.address2}</div>
        )}
      </div>
    );
  };
  landJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_country">
        <label className="form-control-label" htmlFor="shippingCountry">
          <FormattedMessage id="payment.country" />
        </label>
        <span
          className="rc-select rc-full-width rc-input--full-width rc-select-processed"
          style={{ marginTop: 0 }}
        >
          <Selection
            selectedItemChange={(data) =>
              this.handleSelectedItemChange('country', data)
            }
            optionList={this.computedList('country')}
            selectedItemData={{
              value: address.country
            }}
            key={address.country}
          />
        </span>
      </div>
    );
  };
  cityJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div
        className="form-group required dwfrm_shipping_shippingAddress_addressFields_city"
        id="addressFieldsCity"
      >
        <label className="form-control-label" htmlFor="shippingAddressCity">
          <FormattedMessage id="payment.city" />
        </label>
        <span
          className="rc-select rc-full-width rc-input--full-width rc-select-processed"
          style={{ marginTop: 0 }}
        >
          <CitySearchSelection
            placeholder={true}
            defaultValue={address.cityName}
            key={address.cityName}
            freeText={true}
            onChange={this.handleCityInputChange}
          />
        </span>
      </div>
    );
  };
  provinceJSX = () => {
    const { address } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_province">
        <label className="form-control-label" htmlFor="shippingProvince">
          <FormattedMessage id="payment.state" />
        </label>
        <span
          className="rc-select rc-full-width rc-input--full-width rc-select-processed"
          style={{ marginTop: 0 }}
        >
          <Selection
            selectedItemChange={(data) => {
              if (data.value != '') {
                this.handleSelectedItemChange('province', data);
              }
            }}
            choicesInput={true}
            emptyFirstItem="State"
            optionList={this.computedList('province')}
            selectedItemData={{ value: address.provinceId }}
            key={address.provinceId}
          />
        </span>
      </div>
    );
  };
  emailPanelJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_phone">
        <label className="form-control-label" htmlFor="shippingEmail">
          <FormattedMessage id="email" />
        </label>
        <span
          className="rc-input rc-input--inline rc-input--label rc-full-width rc-input--full-width"
          input-setup="true"
        >
          <input
            type="email"
            className="rc-input__control input__phoneField shippingPhoneNumber"
            id="shippingEmail"
            value={address.email}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            name="email"
            maxLength="254"
          />
          <label className="rc-input__label" htmlFor="shippingEmail" />
        </span>
        {errMsgObj.email && (
          <div className="text-danger-2">{errMsgObj.email}</div>
        )}
      </div>
    );
  };
  postCodeJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div className="form-group required dwfrm_shipping_shippingAddress_addressFields_postalCode">
        <label className="form-control-label" htmlFor="shippingZipCode">
          <FormattedMessage id="payment.postCode" />
        </label>
        <span
          className="rc-input rc-input--inline rc-input--label rc-full-width rc-input--full-width"
          input-setup="true"
          // data-js-validate="" //需要验证的时候开启
          data-js-warning-message="*Post Code isn’t valid"
        >
          <input
            className="rc-input__control shippingZipCode"
            id="shippingZipCode"
            type="tel"
            required
            value={address.postCode}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            name="postCode"
            // maxLength="5"
            // minLength="5"
            //data-js-pattern="(^\d{5}(-\d{4})?$)|(^[abceghjklmnprstvxyABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$)" //需要验证的时候开启
            data-js-pattern="(*.*)"
          />
          <label className="rc-input__label" htmlFor="id-text1" />
        </span>
        {errMsgObj.postCode && (
          <div className="text-danger-2">{errMsgObj.postCode}</div>
        )}
        <div className="ui-lighter">
          <FormattedMessage id="example" />:{' '}
          <FormattedMessage id="examplePostCode" />
        </div>
        {/* {window.__.env.REACT_APP_COUNTRY === 'de' ? (
          <span style={{ padding: '2px', color: '#CA5264' }}>
            * Pflichtfelder
          </span>
        ) : null} */}
      </div>
    );
  };
  phonePanelJSX = () => {
    const { address, errMsgObj } = this.state;
    return (
      <div
        className={[
          'form-group',
          'dwfrm_shipping_shippingAddress_addressFields_phone',
          window.__.env.REACT_APP_COUNTRY == 'de' ? '' : 'required'
        ].join(' ')}
      >
        {' '}
        {/* 德国电话非必填 */}
        <label className="form-control-label" htmlFor="shippingPhoneNumber">
          <FormattedMessage id="payment.phoneNumber" />
        </label>
        <span
          className="rc-input rc-input--inline rc-input--label rc-full-width rc-input--full-width"
          input-setup="true"
          // data-js-validate=""
          // data-js-warning-message="*Phone Number isn’t valid"
        >
          <input
            type="text"
            autocomplete="off"
            className="rc-input__control input__phoneField shippingPhoneNumber"
            id="shippingPhoneNumber"
            value={address.phoneNumber}
            onChange={this.deliveryInputChange}
            onBlur={this.inputBlur}
            // data-js-pattern="(^(\+?7|8)?9\d{9}$)"
            // data-js-pattern="(^(\+52)\d{8}$)"
            // data-js-pattern="(^(((\\+\\d{2}-)?0\\d{2,3}-\\d{7,8})|((\\+\\d{2}-)?(\\d{2,3}-)?([1][3,4,5,7,8][0-9]\\d{8})))$)"
            name="phoneNumber"
            maxLength="20"
            minLength="18"
          />
          <label className="rc-input__label" htmlFor="shippingPhoneNumber" />
        </span>
        {errMsgObj.phoneNumber && (
          <div className="text-danger-2">{errMsgObj.phoneNumber}</div>
        )}
        <span className="ui-lighter">
          <FormattedMessage id="example" />:{' '}
          <FormattedMessage id="examplePhone" />
        </span>
      </div>
    );
  };
  //总的shipping显示
  showShipping = () => {
    const defaultJSX = (
      <>
        <div className="row">
          <div className="col-12 col-md-6">{this.firstNameJSX()}</div>
          <div className="col-12 col-md-6">{this.lastNameJSX()}</div>

          <div className="col-12">{this.addressRequiredJSX()}</div>
          <div className="col-12">{this.addressOptionJSX()}</div>

          {window.__.env.REACT_APP_COUNTRY != 'us' ? (
            <div className="col-12 col-md-6">{this.landJSX()}</div>
          ) : null}

          <div className="col-12 col-md-6">{this.cityJSX()}</div>

          {window.__.env.REACT_APP_COUNTRY === 'us' ? (
            <div className="col-12 col-md-6">{this.provinceJSX()}</div>
          ) : null}

          <div className="col-12 col-md-6">{this.postCodeJSX()}</div>
          <div className="col-12 col-md-6">{this.phonePanelJSX()}</div>
        </div>
      </>
    );
    return (
      {
        de: (
          <>
            <div className="row">
              <div className="col-12 col-md-6">{this.firstNameJSX()}</div>
              <div className="col-12 col-md-6">{this.lastNameJSX()}</div>

              <div className="col-12 col-md-6">{this.addressRequiredJSX()}</div>
              <div className="col-12 col-md-6" style={{ visibility: 'hidden' }}>
                {this.addressOptionJSX()}
              </div>
              <div className="col-12 col-md-6">{this.postCodeJSX()}</div>
              <div className="col-12 col-md-6">{this.cityJSX()}</div>
              <div className="col-12 col-md-6">
                {this.landJSX()}
                <span style={{ padding: '2px', color: '#CA5264' }}>
                  * Pflichtfelder
                </span>
              </div>
              <div className="col-12 col-md-6">{this.phonePanelJSX()}</div>
            </div>
          </>
        )
      }[window.__.env.REACT_APP_COUNTRY] || defaultJSX
    );
  };
  render() {
    return this.showShipping();
  }
}

export default EditForm;
