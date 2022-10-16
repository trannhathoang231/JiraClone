import BaseServices from "./baseService";

export class UserService extends BaseServices {

    constructor(){
        super();
    }

    getUser = (keyWord) => {

        return this.get(`Users/getUser?keyWord=${keyWord}`);
    }


    assignUserProject = (userProject) => {
        return this.post(`Project/assignUserProject`,userProject);
    }

    deleteUserFromProject = (userProject) => {
        return this.post(`Project/removeUserFromProject`,userProject)
    }
}


export const userService = new UserService()