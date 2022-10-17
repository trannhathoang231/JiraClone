import { userService } from './../../services/UserService';
import { GET_USER_SEARCH } from './../types/UserCyberBugsType';


export const getAllUser = (keyWord) => {
    return async (dispatch) => {
        try {
            const result = await userService.getUser(keyWord);

            console.log('result', result)
            dispatch({
                type: GET_USER_SEARCH,
                lstUserSearch: result
            })

        } catch (err) {
            console.log('error', err)
        }
    }
}