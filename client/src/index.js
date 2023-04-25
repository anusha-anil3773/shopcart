import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import history from './history';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import {BrowserRouter,Route,Router} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import history from './history'
// import store from './redux/store'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//   <Router history={history}> {/*<BrowserRouter> */}
//       <Route component={App} />
//   </Router>
// </Provider>
// );

