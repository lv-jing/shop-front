import axios from '@/utils/request';

const api = {
  list: '/trade/page',
  details: '/trade',
  returnTrade: '/return/trade',
  return: '/return',
  returnAdd: '/return/add',
  cancelOrder: `/trade-custom/cancel-refund/`,
  // cancelOrder: '/tradeCustom/cancelAndRefund',
  returnReason: '/return/reasons',
  returnWays: '/return/ways',
  returnList: 'return/page',
  payRecord: '/pay/payment/record',
  returnFindByTid: '/return/findByTid',
  addEvaluate: '/evaluate',
  // addEvaluate: '/evaluate/addEvaluate',
  logistics: '/trade/logistics/refresh', // 查询物流信息
  exportInvoicePDF: '/account/orderInvoice/exportPDF/',
  getGoodsList: '/trade/goods',
  addGoodsEvaluate: '/goods/evaluates',
  cancelOrderForJapan: `/trade/order/cancel`
};

export default api;

export function getOrderList(parameter) {
  return axios({
    url: api.list,
    method: 'post',
    data: parameter
  });
}

export function getOrderDetails(parameter) {
  return axios({
    url: `${api.details}/${parameter}`,
    method: 'get'
  });
}

export function getOrderReturnDetails(parameter) {
  return axios({
    url: `${api.returnTrade}/${parameter}`,
    method: 'get'
  });
}

export function getReturnDetails(parameter) {
  return axios({
    url: `${api.return}/${parameter}`,
    method: 'post'
  });
}

export function cancelOrder(parameter) {
  return axios({
    url: `${api.cancelOrder}/${parameter}`,
    method: 'get'
  });
}

export function returnAdd(parameter) {
  return axios({
    url: api.returnAdd,
    method: 'post',
    data: parameter
  });
}

export function getReturnReasons(parameter) {
  return axios({
    url: `${api.returnReason}`,
    method: 'get'
  });
}

export function getReturnWays(parameter) {
  return axios({
    url: `${api.returnWays}`,
    method: 'get'
  });
}

export function getReturnList(parameter) {
  return axios({
    url: api.returnList,
    method: 'post',
    data: parameter
  });
}

export function getPayRecord(parameter) {
  return axios({
    url: `${api.payRecord}/${parameter}`,
    method: 'get'
  });
}

export function returnFindByTid(parameter) {
  return axios({
    url: `${api.returnFindByTid}/${parameter}`,
    method: 'get'
  });
}

export function addEvaluate(parameter) {
  return axios({
    url: api.addEvaluate,
    method: 'post',
    data: parameter
  });
}

export function queryLogistics(parameter) {
  return axios({
    url: `${api.logistics}/${parameter}`,
    method: 'get'
  });
}

export function exportInvoicePDF(parameter) {
  return axios({
    url: `${api.exportInvoicePDF}/${parameter}`,
    method: 'get'
  });
}

export function getGoodsList(tid) {
  return axios({
    url: `${api.getGoodsList}/${tid}`,
    method: 'get'
  });
}
export function addGoodsEvaluate(data) {
  return axios({
    url: `${api.addGoodsEvaluate}`,
    method: 'post',
    data
  });
}
export function cancelOrderForJapan(data) {
  return axios({
    url: `${api.cancelOrderForJapan}`,
    method: 'post',
    data
  });
}
