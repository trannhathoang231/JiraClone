import { USER_LOGIN } from "../../ulti/setting";
import { LOGIN } from './../types/QLNDType';
import { history } from './../../App';
import { quanLyNguoiDungService } from './../../services/QLNDService';

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            console.log(result);

            dispatch({
                type: LOGIN,
                userLogin: result,
            })

            const userLogin = JSON.stringify(result);
            localStorage.setItem(USER_LOGIN, userLogin);

            history.push('/');

        } catch (error) {
            console.log(error);
        }
    }
}