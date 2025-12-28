/* For Production Environment */
const BASE_URL = 'https://dummyjson.com';
const WEBSITE_NAME = '';

const DEFAULT_PAGE_SIZE = 100;

const API_ENDPOINTS = {
    login: '',
    register: '',
    forgotPassword: '',
    logout: '',
    getProfile: '',
    updateProfile: '',
    tokenRenew: "",

    recipes: "/recipes"
};

const LS_KEYS = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    userData: "userData",
};

export { API_ENDPOINTS, LS_KEYS, WEBSITE_NAME, BASE_URL, DEFAULT_PAGE_SIZE };
