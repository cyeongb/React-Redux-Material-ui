import * as types from "./actionType";
import axios from "axios";

// 2) 액션 타입에 따른 액션 만듬
// 액션 타입에따라 서버에 function()을 요청하고 get()/delete()..
// 요청이 성공하면 reducer에  dispatch()합니다.
// dispatch()가 실행되면 root-reducer를 호출하고 리듀서 중에 action이 존재하는 reducer가 실행.
//

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

export const loadUsers = () => {
  console.log("loadUsers()");
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("response ::", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log("error : ", err));
  };
};

export const deleteUser = (id) => {
  console.log("deleteUser() id:", id);
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response ::", res);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => console.log("error : ", err));
  };
};

export const addUser = (user) => {
  console.log("addUser() user:", user);
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("response ::", res);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((err) => console.log("error : ", err));
  };
};

export const getSingleUser = (id) => {
  console.log("getSingleUser() id:", id);
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response ::", res);
        dispatch(getUser(res.data));
      })
      .catch((err) => console.log("error : ", err));
  };
};

export const updateUser = (user, id) => {
  console.log("addUser() user:", user);
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("response ::", res);
        dispatch(userUpdated());
      })
      .catch((err) => console.log("error : ", err));
  };
};
