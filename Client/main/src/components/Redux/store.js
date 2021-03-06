import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import {reducer as coursesReducer} from "./Course/reducer"
import { reducer as descriptionReducer } from "./Description/reducer"
const rootReducer = combineReducers({
    courses: coursesReducer,
    dynamicContent: descriptionReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))