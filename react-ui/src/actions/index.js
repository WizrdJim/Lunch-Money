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

export const setLocation = (data) => {
  console.log("data passed to Redux: " + data);
  const locUpdate = {
    loc: [data.longitude, data.latitude],
    id: localStorage.getItem('id')
  }
  axios.put(`${SERVER_URL}/location`, locUpdate)
  return {
    type: SET_LOCATION,
    payload: data
  }
};

export const authError = (error) => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const register = (user, history) => {
  const {username, password, confirmPassword} = user;
  return (dispatch) => {
    if(password !== confirmPassword) {
      dispatch(authError('Please use matching passwords'));
      return;
    }
    console.log(`USERNAME in actions: ${username}`)
    axios.post(`${SERVER_URL}/user`, { username, password })
    .then((data)=> {
      localStorage.setItem('id', data.data.id);
      //Stores the card id in the local storage
      //ideally everything would go through redux!
      localStorage.setItem('cardId', data.data.bCard);
      dispatch({
        type: USER_AUTHENTICATED,
      })
      history.push('./updatecard')
    })
    .catch(() => {
      dispatch(authError('Failed to register user'));
    });
  };
};