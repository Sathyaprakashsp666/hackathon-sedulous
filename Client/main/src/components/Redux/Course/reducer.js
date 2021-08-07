import { GET_COURSE_FAILURE, GET_COURSE_REQUEST, GET_COURSE_SUCCESS } from "./actionTypes"

const initState = {
    courses: []
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_COURSE_REQUEST: {
            return {
                ...state
            }
        }

        case GET_COURSE_SUCCESS: {
            return {
                ...state,
                courses: [...payload]
            }
        }

        case GET_COURSE_FAILURE: {
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
}