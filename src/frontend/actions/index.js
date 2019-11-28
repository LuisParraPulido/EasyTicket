import axios from 'axios';

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerResquest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const searchRequest = (payload) => ({
  type: 'SEARCH_REQUEST',
  payload,
});

export const setTicket = (payload) => ({
  type: 'SET_TICKET',
  payload,
});

export const createUserTicket = (payload) => ({
  type: 'CREATE_USER_TICKET',
  payload,
});

export const sellTicket = (payload) => ({
  type: 'SELL_TICKET',
  payload,
});

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerResquest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirecUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};
