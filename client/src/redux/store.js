// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import UserReducer from './reducers/UserReducer';
// import userSaga from './saga/userSaga';

// const rootReducer = combineReducers({
//   user: UserReducer,
// });

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(userSaga);

// export default store;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../redux/reducers/UserReducer';
import userSaga from './saga/userSaga';

const rootReducer = combineReducers({
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(userSaga);

export default store;
