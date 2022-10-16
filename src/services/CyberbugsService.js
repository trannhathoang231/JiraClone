import axios from "axios";
import { DOMAIN_CYBERBUG, TOKEN } from "../ulti/constants/settingSystem";
import BaseServices from "./baseService";


class CyberbugsService extends BaseServices {
    constructor() {
        super();
    }

    getAllProjectCategory = () => {
        return this.get("/api/ProjectCategory")
    }
    
    getListProject = () => {
        return this.get("/api/Project/getAllProject");
      }
      
    // getAllProject = () => {
    //     return axios({
    //         url:`${DOMAIN_CYBERBUG}/api/Project/getAllProject`,
    //         method: 'GET',
    //         id: 2809,
    //         headers:{
    //             'Authorization':'Bearer' + ' eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdHJpbmciLCJuYmYiOjE2NjM3NjY0ODEsImV4cCI6MTY2Mzc3MDA4MX0.PmxU7BAK9EVd4QyI43O7R18HH9OIeTdKOWupvXYkzgw',
    //             'TokenCybersoft':`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMyIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDc3NzYwMDAwMCIsIm5iZiI6MTY0NTgwODQwMCwiZXhwIjoxNjc0OTI1MjAwfQ.LrAtwphIhIIrGz5ssg4cQOfyHiF8X8oDbkMMa8YAebQ`
    //         }
    //     })

    // }

}

export const cyberbugsService = new CyberbugsService();