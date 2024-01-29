import { TokenResponse } from '@react-oauth/google';
import { baseQuery } from './api.helper';

const AUTH_API_BASE_URL = "http://localhost:8000/auth";

export const getAuthGoole = (codeResponse: TokenResponse) => {
    const baseQueryFn = baseQuery;

    return baseQueryFn({
        url: AUTH_API_BASE_URL + '/google',
        body: codeResponse,
        method: 'post',
        credentials: 'include'
    })
};