const initialState = {
    taskDetailModal: {
        "priorityTask": {
            "priorityId": 1,
            "priority": "High"
        },
        "taskTypeDetail": {
            "id": 1,
            "taskType": "bug"
        },
        "assigness": [
            {
                "id": 862,
                "avatar": "https://ui-avatars.com/api/?name=abcdef",
                "name": "abcdef",
                "alias": "crystal"
            },
            {
                "id": 984,
                "avatar": "https://ui-avatars.com/api/?name=Test",
                "name": "Test",
                "alias": "dat"
            }
        ],
        "lstComment": [],
        "taskId": 6118,
        "taskName": "task 3 test",
        "alias": "task-3-test",
        "description": "string",
        "statusId": "1",
        "originalEstimate": 10,
        "timeTrackingSpent": 10,
        "timeTrackingRemaining": 10,
        "typeId": 1,
        "priorityId": 1,
        "projectId": 8143
    }
}

export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case '': {

            return { ...state }
        }

        default:
            return state
    }
}
