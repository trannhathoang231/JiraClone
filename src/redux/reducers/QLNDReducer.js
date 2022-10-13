import { USER_LOGIN } from './../../ulti/setting';
import { LOGIN } from './../types/QLNDType';

let userLocal = null;

if (localStorage.getItem(USER_LOGIN)) {
    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: userLocal,
}

export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            state.userLogin = action.userLogin;

            return { ...state };

        default:
            return { ...state };
    }
}