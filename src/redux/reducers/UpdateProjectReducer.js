const stateDefault = {
  updateProject: {
    id: 0,
    projectName: "string",
    creator: 0,
    description: "string",
    categoryId: "string",
  },
  projectId: "",
};
export const UpdateProjectReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "UPDATE_PROJECT": {
      state.updateProject = action.updateProject;
      console.log(action.updateProject, "update");
      return { ...state };
    }
    case "DELETE_PROJECT": {
      state.projectId = action.projectId;
      console.log(action.projectId, "dellip");
      return { ...state };
    }
    default:
      return { ...state };
  }
};
