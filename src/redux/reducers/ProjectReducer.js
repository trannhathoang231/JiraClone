import { PUT_PROJECT_DETAIL } from "../../ulti/constants/Cyberbugs/Cyberbugs";

const initialState = {
  projectEdit: {
    id: 0,
    projectName: "string",
    creator: 0,
    description: "string",
    categoryId: "2",
  },
  projectDetail: {
    // members:[]
  }
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "EDIT_PROJECT": {
      state.projectEdit = action.projectEditModel;
      console.log("actionProject",action.projectEditModel);
      return { ...state };

    }
    case PUT_PROJECT_DETAIL: {
        state.projectDetail = action.projectDetail;
        console.log('projectDetail',action.projectDetail)
        return {...state}
    }

    default:
      return state;
  }
};
