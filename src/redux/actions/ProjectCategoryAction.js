import { cyberbugsService } from "../../services/CyberbugsService";




export const projectCategoryAction = () => {
    return async (dispatch) => {
        try{
            const result = await cyberbugsService.getAllProjectCategory();

            console.log('result',result);

            dispatch({
                type: 'GET_ALL_PROJECT_CATEGORY',
                arrProjectCategory: result,
            })
            
        }catch (err) {
            console.log('err',err)
        }
    }
}