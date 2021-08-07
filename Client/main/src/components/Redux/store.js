import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import {reducer as institutesReducer} from "./Institutes/reducer"
import {reducer as courseReducer} from "./Course/reducer"

const rootReducer = combineReducers({
    institutes: institutesReducer,
    courses: courseReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))