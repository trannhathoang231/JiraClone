import { history } from '../../App';
import { userService } from './../../services/UserService';
import { GET_USER_SEARCH, GET_USER_BY_PROJECT_ID, GET_USER_SEARCH_BY_PROJECT_ID, LOGIN, USER_LOGIN } from './../types/UserCyberBugsType';
import { getAllProjectAction } from './ProjectCyberBugsAction';


export const getAllUser = (keyWord) => {
    return async (dispatch) => {
        try {
            const result = await userService.getUser(keyWord);

            console.log(result,'result')
            dispatch({
                type: GET_USER_SEARCH,
                lstUserSearch: result
            })

        } catch (err) {
            console.log(err,'error')
        }
    }
}

export const getUserByProjectId = (projectId) => {
    return async (dispatch) => {
        try {
            const result = await userService.getUserByProjectId(projectId);

            console.log(result,'result')
            dispatch({
                type: GET_USER_BY_PROJECT_ID,
                arrUser: result
            })

        } catch (err) {
            // console.log(err,'error')
            dispatch({
                type: GET_USER_BY_PROJECT_ID,
                arrUser: []
            })
        }
    }
}

export const getUserSearchByProjectId = (keyWord) => {
    return async (dispatch) => {
        try {
            const result = await userService.getUser(keyWord);

            console.log(result,'result')
            dispatch({
                type: GET_USER_SEARCH_BY_PROJECT_ID,
                arrUser: result
            })

        } catch (err) {
            console.log(err,'error')
        }
    }
}

export const addUserProjectAction = ({projectId,userId}) => {
    return async (dispatch) => {
        try {
            const result = await userService.assignUserProject({projectId,userId});
            console.log(result,'result')
            dispatch(getAllProjectAction())
        } catch (err) {
            console.log(err,'error')
        }
    }
}

export const deleteUserFromProject = ({projectId,userId}) => {
    return async (dispatch) => {
        try {
            const result = await userService.deleteUserFromProject({projectId,userId});
            console.log(result,'result')
            dispatch(getAllProjectAction())
        } catch (err) {
            console.log(err,'error')
        }
    }
}

export const loginAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userService.login(userInfo);

            console.log(result);

            dispatch({
                type: LOGIN,
                userLogin: result,
            })

            const userLogin = JSON.stringify(result);

            localStorage.setItem(USER_LOGIN, userLogin);
            localStorage.setItem("accessToken", result.accessToken);

            history.push('/');

        } catch (error) {
            console.log(error);
        }
    }
}