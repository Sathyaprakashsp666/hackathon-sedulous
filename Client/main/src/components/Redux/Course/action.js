import axios from "axios"
import { GET_COURSE_FAILURE, GET_COURSE_REQUEST, GET_COURSE_SUCCESS } from "./actionTypes"

export const getCourseRequest = () => {
    return {
        type: GET_COURSE_REQUEST
    }
}
export const getCourseSuccess = (payload) => {
    return {
        type: GET_COURSE_SUCCESS,
        payload
    }
}
export const getCourseFailure = () => {
    return {
        type: GET_COURSE_FAILURE
    }
}

export const getCourses = (payload) => (dispatch) => {
    dispatch(getCourseRequest())
    axios.get("https://json-server-projects.herokuapp.com/courses")
    .then(res => {
        dispatch(getCourseSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getCourseFailure())
    })
}
