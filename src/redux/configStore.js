import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { UserLoginCyberBugsReducer } from "./reducers/UserCyberBugsReducer";
import { DrawerReducer } from "./reducers/DrawerReducer";
import { ProjectReducer } from "./reducers/ProjectReducer";
import { ProjectCyberBugsReducer } from "./reducers/ProjectCyberBugsReducer";
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReducer";
import { StatusReducer } from './reducers/StatusReducer';

const rootReducer = combineReducers({
    UserLoginCyberBugsReducer,
    DrawerReducer,
    ProjectReducer,
    ProjectCyberBugsReducer,
    ProjectCategoryReducer,
    StatusReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;