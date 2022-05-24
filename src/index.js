import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './design-tokens/_variables.scss'
import './design-tokens/_helpers.scss'
import './design-tokens/_breakpoints.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import StoreContext from './storeContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
