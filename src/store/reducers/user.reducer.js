export const SET_CURRENT_USER = "SET_CURRENT_USER";

const initialState = {
  currentUser: {},
  users: [],
};

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    default:
      return state;
  }
};
