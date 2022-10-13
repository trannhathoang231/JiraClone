import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { DrawerReducer } from "./reducers/DrawerReducer";
import { ProjectReducer } from "./reducers/ProjectReducer";
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReducer";
import { ProjectCyberBugsReducer } from "./reducers/ProjectCyberBugsReducer";
import { QLNDReducer } from './reducers/QLNDReducer';

const rootReducer = combineReducers({
    QLNDReducer,
    ProjectCategoryReducer,
    ProjectCyberBugsReducer,
    DrawerReducer,
    ProjectReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;