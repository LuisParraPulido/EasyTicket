const reducer = (state, action) => {

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_TICKET':
      return {
        ...state,
        userTicket: action.payload,
      };
    case 'CREATE_USER_TICKET':
      return {
        ...state,
        userTicket: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
