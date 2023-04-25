import { takeEvery, call, put, all } from 'redux-saga/effects'

import history from '../../history'
import config from '../../../src/utils/config.json';
import * as types from '../constant'

import * as actions from '../action/UserAction'


function* login({username, password }) {
    try {
        const user = yield call(fetch, `${config.api_base_url}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        if (!user.ok) {
            throw new Error(user.statusText);
        }
        const userData = yield call(user.json.bind(user));
        yield put(actions.userLoggedIn(userData))
        history.push('/home')
    } catch (e) {
        console.error(e);
    }
}
function* logout() {
    yield call(fetch, `${config.api_base_url}/user/logout`);
    yield put(actions.userLoggedOut())
    history.push('/')
}

function* watchLoginUser() {
    yield takeEvery(types.LOGIN_USER, login)
}

function* watchLogoutUser() {
    yield takeEvery(types.LOGOUT_USER, logout)
}


export function* userSaga() {
    yield all([
        watchLoginUser(),
        watchLogoutUser()
    ])
}