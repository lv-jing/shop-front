import LoginStore from './loginStore';
import CheckoutStore from './checkoutStore';
import ClinicStore from './clinicStore';
import FrequencyStore from './frequencyStore';
import ConfigStore from './configStore';
import HeaderCartStore from './headerCartStore';
import PaymentStore from './paymentStore';
import HeaderSearchStore from './headerSearchStore';
import AddressStore from './addressStore';

const stores = {
  loginStore: new LoginStore(),
  checkoutStore: new CheckoutStore(),
  clinicStore: new ClinicStore(),
  frequencyStore: new FrequencyStore(),
  configStore: new ConfigStore(),
  headerCartStore: new HeaderCartStore(),
  paymentStore: new PaymentStore(),
  headerSearchStore: new HeaderSearchStore(),
  addressStore: new AddressStore()
};
/// 默认导出接口
export default stores;
