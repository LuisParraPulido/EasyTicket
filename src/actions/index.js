export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
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
