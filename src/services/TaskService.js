import BaseServices from "./baseService";

export class TaskService extends BaseServices {

    constructor(){
        super();
    }

    createTask = (taskObject) => {
        return this.post('/api/Project/createTask', taskObject);
    }
    getStatus = () =>{
        return this.get('/api/Status/getAll')
    }

}

export const taskService = new TaskService();