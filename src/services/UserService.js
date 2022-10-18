import BaseServices from "./baseService";

export class UserService extends BaseServices {

    constructor(){
        super();
    }

    getUser = (keyword) => {

        return this.get(`/api/Users/getUser?keyword=${keyword}`);
    }


    assignUserProject = ({projectId,userId}) => {
        return this.post(`/api/Project/assignUserProject`,{projectId,userId});
    }

    deleteUserFromProject = ({projectId,userId}) => {
        return this.post(`/api/Project/removeUserFromProject`,{projectId,userId})
    }
}


export const userService = new UserService()