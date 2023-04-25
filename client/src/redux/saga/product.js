import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios';
import config from '../../../src/utils/config.json';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constant';


function* getProducts() {
  try {
    const response = yield call(axios.get, `/${config.api_base_url}/api/products`);
    const data = response.data;
    yield put({ type: SET_PRODUCT_LIST, data });
  } catch (error) {
    console.error(error);
  }
}


function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;

