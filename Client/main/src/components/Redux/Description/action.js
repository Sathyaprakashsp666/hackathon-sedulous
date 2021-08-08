import axios from "axios"
import { GET_DESCRIPTION_FAILURE, GET_DESCRIPTION_REQUEST, GET_DESCRIPTION_SUCCESS } from "./actionTypes"

export const getDescriptionRequest = () => {
    return {
        type: GET_DESCRIPTION_REQUEST
    }
}
export const getDescriptionSuccess = (payload) => {
    return {
        type: GET_DESCRIPTION_SUCCESS,
        payload
    }
}
export const getDescriptionFailure = () => {
    return {
        type: GET_DESCRIPTION_FAILURE
    }
}



export const getDescription = (payload) => (dispatch) => {
    dispatch(getDescriptionRequest())
    console.log(payload.id)
    axios.get(`http://localhost:2244/career/${payload.id}`)
    .then(res => {
        dispatch(getDescriptionSuccess(res.data.data))
        // console.log(res.data.data)
    })
    .catch(err => {
        console.log(err)
        dispatch(getDescriptionFailure())
    })
}

