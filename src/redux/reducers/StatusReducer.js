import { GET_ALL_STATUS } from "../types/StatusType";

const stateDefault = {
    arrStatus: []
}

export const StatusReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_STATUS: {
            state.arrStatus = action.arrStatus;
            return { ...state }
        }
        
         case 'UPDATE_STATUS': {
            state.arrStatus = action.arrStatus
            // console.log(action.arrStatus)
            return { ...state }
    }

        default: return { ...state }
    }
}

