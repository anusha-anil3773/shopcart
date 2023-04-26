import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../utils/config.json';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../action/UserAction';

function* login(action) {
  try {
    const response = yield axios.post(`${config.api_base_url}/user/login`, {
      username: action.payload.username,
      password: action.payload.password,
    });
    if (response.status === 200) {
      if (response.data.message) {
        yield put(loginFailure());
      } else {
        yield put(loginSuccess());
      }
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    yield put(loginFailure());
    console.error(error);
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default loginSaga;
