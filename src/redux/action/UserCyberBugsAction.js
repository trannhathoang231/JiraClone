import { userService } from './../../services/UserService';
import { GET_USER_SEARCH } from './../types/UserCyberBugsType';
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