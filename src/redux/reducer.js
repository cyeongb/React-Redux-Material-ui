import * as types from "./actionType";

const initialState = {
  users: [], //array
  user: {}, //object
  loading: true, //bobool
};

const usersReducers = (state = initialState, action) => {
  console.log("action.type :: ", action.type);
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
