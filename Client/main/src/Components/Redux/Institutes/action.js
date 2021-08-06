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

export const getDescription = (payload) => (dispatch) => {
    dispatch(getInstitutesRequest())
    axios.get("")
    .then(res => {
        dispatch(getInstitutesSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getInstitutesFailure())
    })
}
