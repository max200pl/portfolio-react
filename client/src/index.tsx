import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </LocalizationProvider>
            <CssBaseline />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
