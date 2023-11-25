import React from 'react';
import './index.scss';
import './design-tokens/_variables.scss'
import './design-tokens/_helpers.scss'
import './design-tokens/_breakpoints.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';
import StoreContext from './storeContext';
import { createRoot } from 'react-dom/client';

import {
    QueryClientProvider,
} from '@tanstack/react-query'


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript



root.render(
    <React.Fragment>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <StoreContext.Provider value={store}>

                <App />

            </StoreContext.Provider>
        </BrowserRouter>
    </React.Fragment>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
