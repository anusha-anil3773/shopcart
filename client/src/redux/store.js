import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer'
import rootSaga from './saga/rootSaga'

import { checkUser } from './services/userServices'
import { userLoggedIn } from './action/UserAction'


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const user = checkUser()
if (user) {
    store.dispatch(userLoggedIn(user))
}

sagaMiddleware.run(rootSaga);

export default store