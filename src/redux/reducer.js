import * as types from "./actionType";

const initialState = {
  users: [], //array
  user: {}, //object
  loading: false, //bool
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
