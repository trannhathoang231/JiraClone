import BaseServices from "./baseService";

class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => { //email:'', matKhau:''
    return this.post('/api/Users/signin', thongTinDangNhap);
  };


}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();