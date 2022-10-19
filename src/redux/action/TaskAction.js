import { taskService } from '../../services/TaskService';
import { CREATE_TASK } from './../types/UserCyberBugsType';


export const createTask = (taskObject) => {
    return async (dispatch) => {
        try {
            const result = await taskService.createTask(taskObject);

            console.log('result', result)
            // dispatch({
            //     type: CREATE_TASK,
            //     lstUserSearch: result
            // })

        } catch (err) {
            console.log('error', err)
        }
    }
}

export const getStatus = ()=>{
    return async (dispatch)=>{
        try {
            const result = await taskService.getStatus();
            console.log(result,'status')
            dispatch()
        }catch(err) {
            console.log(err,'status')
        }
    }
}