import { taskService } from '../../services/TaskService';
import { CREATE_TASK } from './../types/UserCyberBugsType';
import swal from 'sweetalert';


export const createTask = (taskObject) => {
    return async (dispatch) => {
        try {
            const result = await taskService.createTask(taskObject);

            console.log('result', result)
            // dispatch({
            //     type: CREATE_TASK,
            //     lstUserSearch: result
            // })
            swal("Bạn đã thêm task thành công!", "", "success");

        } catch (err) {
            console.log('error', err);
            swal(`${err.message}`, `${err.content}`, "error");
        }
    }
}

export const updateStatusAction = (action)=>{
    return async (dispatch)=>{
        try {
            const result = await taskService.updateStatus(action);
            console.log(result,'status')
            dispatch({type:'UPDATE_STATUS', arrStatus: result})
        }catch(err) {
            console.log(err,'status')
        }
    }
}