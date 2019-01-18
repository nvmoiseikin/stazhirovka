const TOKEN_NAME = 'user-token';

export const getToken = () => localStorage.getItem(TOKEN_NAME);

export const setToken = token => localStorage.setItem(TOKEN_NAME, token);

export const removeToken = () => localStorage.removeItem(TOKEN_NAME);

const TOKEN_DATE = 'user-token-date';

export const TOKEN_TIME = 6000;

export const getTokenDate = () => localStorage.getItem(TOKEN_DATE);

export const setTokenRefreshDate = token_date => localStorage.setItem(TOKEN_DATE, (token_date + TOKEN_TIME));

export const removeTokenDate = () => localStorage.removeItem(TOKEN_DATE);
