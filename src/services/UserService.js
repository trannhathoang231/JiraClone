import BaseServices from "./baseService";

export class UserService extends BaseServices {

    constructor(){
        super();
    }


    getUser = (keyWord) => {
        return this.get(`/api/Users/getUser?keyword=${keyWord}`);

    }


    assignUserProject = ({projectId,userId}) => {
        return this.post(`/api/Project/assignUserProject`,{projectId,userId});
    }

    deleteUserFromProject = ({projectId,userId}) => {
        return this.post(`/api/Project/removeUserFromProject`,{projectId,userId})
    }
}


export const userService = new UserService()