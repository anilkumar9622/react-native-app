/* For Production Environment */
const BASE_URL = '';
const WEBSITE_NAME = '';

const DEFAULT_PAGE_SIZE = 100;

const API_ENDPOINTS = {
    login: '/user/login',
    register: '/auth/signUp',
    forgotPassword: '/auth/password/forgot/',
    logout: '/auth/logout',
    getProfile: '/profile/get',
    updateProfile: 'profile/merchant',
    tokenRenew: "",
    storeDetails: ""
};

const LS_KEYS = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    userData: "userData",
};

export { API_ENDPOINTS, LS_KEYS, WEBSITE_NAME, BASE_URL, DEFAULT_PAGE_SIZE };
