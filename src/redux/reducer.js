import * as types from "./actionType";

// 3) actions.js에서 만든 액션으로 액션 타입에 따른 처리를 한다.

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
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
