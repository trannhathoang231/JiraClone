import { history } from "../../App";
import { userService } from "./../../services/UserService";
import {
  GET_USER_SEARCH,
  GET_USER_BY_PROJECT_ID,
  GET_USER_SEARCH_BY_PROJECT_ID,
  USER_LOGIN,
} from "./../types/UserCyberBugsType";
import { getAllProjectAction } from "./ProjectCyberBugsAction";
import swal from "sweetalert";

export const getAllUser = (keyWord) => {
  return async (dispatch) => {
    try {
      const result = await userService.getUser(keyWord);
      dispatch({
        type: GET_USER_SEARCH,
        lstUserSearch: result,
      });
    } catch (err) {
      
    }
  };
};

export const getUserByProjectId = (projectId) => {
  return async (dispatch) => {
    try {
      const result = await userService.getUserByProjectId(projectId);
      dispatch({
        type: GET_USER_BY_PROJECT_ID,
        arrUser: result,
      });
    } catch (err) {
      
    }
  };
};

export const getUserSearchByProjectId = (keyWord) => {
  return async (dispatch) => {
    try {
      const result = await userService.getUser(keyWord);
      dispatch({
        type: GET_USER_SEARCH_BY_PROJECT_ID,
        arrUser: result,
      });
    } catch (err) {
      
    }
  };
};

export const addUserProjectAction = ({ projectId, userId }) => {
  return async (dispatch) => {
    try {
      const result = await userService.assignUserProject({ projectId, userId });
      dispatch(getAllProjectAction());
    } catch (err) {
      
    }
  };
};

export const deleteUserFromProject = ({ projectId, userId }) => {
  return async (dispatch) => {
    try {
      const result = await userService.deleteUserFromProject({
        projectId,
        userId,
      });
      dispatch(getAllProjectAction());
    } catch (err) {
      
    }
  };
};

export const loginAction = (userInfo) => {
  return async () => {
    try {
      const result = await userService.login(userInfo);
      const userLogin = JSON.stringify(result);

      localStorage.setItem(USER_LOGIN, userLogin);
      localStorage.setItem("accessToken", result.accessToken);
      history.push("/");
    } catch (error) {
      swal("????ng nh???p th???t b???i!", `${error.message}`, "error");
    }
  };
};

export const registerAction = (regisInfo) => {
  return async () => {
    try {
      const result = await userService.register(regisInfo);
      const userLogin = JSON.stringify(result);

      localStorage.setItem(USER_LOGIN, userLogin);
      localStorage.setItem("accessToken", result.accessToken);
      swal("Ch??c m???ng!", "B???n ???? ????ng k?? th??nh c??ng!", "success");
      history.push("/login");
    } catch (error) {
      swal("????ng k?? th???t b???i!", `${error.message}`, "error");
    }
  };
};
