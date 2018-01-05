import axios from 'axios';
const SERVER_URL = '/API';
axios.default.withCredentials = true;

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const CARD_UPDATE = 'CARD_UPDATE';
export const AUTHENTICATION_CHECK = 'AUTHENTICATION_CHECK';
export const START_FRESH = 'START_FRESH';
export const SET_LOCATION = 'SET_LOCATION';
export const NEARBY_USERS = 'NEARBY_USERS';