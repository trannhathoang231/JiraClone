import { cyberbugsService } from "../../services/CyberbugsService"
import { notifiFunction } from "../../ulti/Notification/NotificationCyberbugs";
import { getAllProjectAction } from "./ProjectCyberBugsAction";



export const DeleteProjectAction = (action) => { 
    return async (dispatch) =>{ 
        try{
            const result = await cyberbugsService.deleteProject(action.projectId);
            console.log(result,'delete result')
            dispatch(getAllProjectAction())
            notifiFunction('success','Delete project success!','')
        }catch (err){
            console.log(err,'delete err')
            notifiFunction('error','Delete project fail!','')
        }
    }
 }