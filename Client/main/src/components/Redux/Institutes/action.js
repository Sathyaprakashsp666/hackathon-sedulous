import axios from "axios"
import { GET_INSTITUTES_FAILURE, GET_INSTITUTES_REQUEST, GET_INSTITUTES_SUCCESS } from "./actionTypes"

export const getInstitutesRequest = () => {
    return {
        type: GET_INSTITUTES_REQUEST
    }
}
export const getInstitutesSuccess = (payload) => {
    return {
        type: GET_INSTITUTES_SUCCESS,
        payload
    }
}
export const getInstitutesFailure = () => {
    return {
        type: GET_INSTITUTES_FAILURE
    }
}

export const getInstitutesData = (payload) => (dispatch) => {
    dispatch(getInstitutesRequest())
    axios.get("https://json-server-olx.herokuapp.com/motorcycles")
    .then(res => {
        dispatch(getInstitutesSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getInstitutesFailure())
    })
}
