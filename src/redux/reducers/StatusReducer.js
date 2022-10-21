const initialState = {
  arrStatus: {
    "taskId": 0,
    "statusId": "string"

  }
}

export const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS': {
      state.arrStatus = action.arrStatus
      // console.log(action.arrStatus)
      return { ...state }
    }

    default:
      return state
  }
}
