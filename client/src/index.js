import React from 'react';
import './index.scss';
import './design-tokens/_variables.scss'
import './design-tokens/_helpers.scss'
import './design-tokens/_breakpoints.scss'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const queryClient = new QueryClient()

root.render(
    <React.Fragment>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    </React.Fragment>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
