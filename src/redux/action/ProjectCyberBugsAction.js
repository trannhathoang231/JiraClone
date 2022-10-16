import axios from "axios";
import { DOMAIN_CYBERBUG, TOKEN } from "../../ulti/constants/settingSystem";



export const getAllProjectAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://jiranew.cybersoft.edu.vn/api/Project/getAllProject`,
                method: 'GET',
                keyword: 2809,
                headers: {
                    'Authorization': 'Bearer' + ' eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJxdWFuZ3F1eWVuZGFkQGdtYWlsLmNvbSIsIm5iZiI6MTY2NTgzODM0MiwiZXhwIjoxNjY1ODQxOTQyfQ.Vli3T-CQLpgNNeLnsZSSkh9pxjQRMdqWMqpD8ydMpD8',
                    'TokenCybersoft': `${TOKEN}`
                }
            });
            console.log(result, 'result')
            dispatch({
                type: 'GET_LIST_PROJECT',
                projectList: result.data.content

            })

        } catch (err) {
            console.log(err, 'error')
        }
    }
}