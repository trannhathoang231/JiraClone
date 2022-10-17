
import { cyberbugsService } from "../../services/CyberbugsService"
import { getAllProjectAction } from "./ProjectCyberBugsAction";




export const updateProjectAction = (action) => { 
    return async (dispatch)=>{
        try {
            const result = await cyberbugsService.updateProject(action.updateProject);
            console.log(action,'action');

            dispatch(getAllProjectAction())
            dispatch({
                type:'CLOSE_DRAWER'
            })
        }catch(err){
            console.log(err)
        }
        
    }
    
 }
