import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { UserLoginCyberBugsReducer } from "./reducers/UserCyberBugsReducer";
import { DrawerReducer } from "./reducers/DrawerReducer";
import { ProjectReducer } from "./reducers/ProjectReducer";
import { ProjectCyberBugsReducer } from "./reducers/ProjectCyberBugsReducer";
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReducer";

const rootReducer = combineReducers({
    UserLoginCyberBugsReducer,
    DrawerReducer,
    ProjectReducer,
    ProjectCyberBugsReducer,
    ProjectCategoryReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;