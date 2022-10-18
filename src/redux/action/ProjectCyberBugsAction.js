import { history } from "../../App";
import { cyberbugsService } from "../../services/CyberbugsService";
import { projectService } from "../../services/ProjectService";
import { PUT_PROJECT_DETAIL } from "../../ulti/constants/Cyberbugs/Cyberbugs";

import { GET_ALL_PROJECT, GET_ALL_TASK_TYPE, GET_ALL_PRIORITY } from './../types/ProjectCyberBugsType';





export const getAllProjectAction = () => {

    return async (dispatch) => {
        try {
            const result = await cyberbugsService.getAllProject();
            
            dispatch({
                type: 'GET_LIST_PROJECT',
                projectList: result

            })

        } catch (err) {
            console.log(err, 'error')
        }
    }
}

// cho FormCreateTask
export const getListProjectAction = () => {
    return async (dispatch) => {
        try {
            const result = await cyberbugsService.getListProject();

            console.log(result, 'result')
            dispatch({
                type: GET_ALL_PROJECT,
                arrProject: result
            })

        } catch (err) {
            console.log(err, 'error')
        }
    }
}

export const getAllTaskType = () => {
    return async (dispatch) => {
        try {
            const result = await cyberbugsService.getAllTaskType();

            console.log(result, 'result')
            dispatch({
                type: GET_ALL_TASK_TYPE,
                arrTaskType: result
            })

        } catch (err) {
            console.log(err, 'error')
        }
    }
}

export const getAllPriority = () => {
    return async (dispatch) => {
        try {
            const result = await cyberbugsService.getAllPriority();

            console.log(result, 'result')
            dispatch({
                type: GET_ALL_PRIORITY,
                arrPriority: result
            })

        } catch (err) {
            console.log(err, 'error')
        }
    }
}

export const createProjectAction = (newProject) => {
    // console.log('actionCreateProject',action);
    return async (dispatch) => {
        try{
            const result = await cyberbugsService.createProjectAuthorization(newProject);
            // console.log('result',result);
            history.push('/projectmanagement');
        }catch (err) {
            console.log(err, 'error')
        }
    }
}

export const updateProjectAction = (updateProject) => {
    return async (dispatch) => {
        try{
            const result = await cyberbugsService.updateProject(updateProject);
            console.log('result',result);

            // history.push('/projectmanagement');
            dispatch(getAllProjectAction());
            dispatch({ type: "CLOSE_DRAWER" });
        }catch (err) {
            console.log(err, 'error')
        }
    }
}

export const getProjectDetailAction = (projectId) => {

    return async (dispatch) => {
        try {
            const result = await projectService.getProjectDetail(projectId);
            console.log('result',result);
            dispatch({
                type: PUT_PROJECT_DETAIL,
                projectDetail:result
            })
        } catch (err) {
            console.log(err, 'error')
            history.push('/projectmagagement')
        }
    }
}