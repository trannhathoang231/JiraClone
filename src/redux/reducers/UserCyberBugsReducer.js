import { GET_USER_SEARCH } from "../types/UserCyberBugsType";

const { USER_LOGIN } = require("../../ulti/constants/Cyberbugs/Cyberbugs");

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: usLogin,
  userSearch: [],
};

export const UserLoginCyberBugsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_SEARCH: {
      state.userSearch = action.lstUserSearch;
      console.log("stateUser", state);
      return { ...state };
    }

    default:
      return { ...state };
  }
};
