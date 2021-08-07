import axios from "axios"
import { GET_KNOWLEDGE_FAILURE, GET_KNOWLEDGE_REQUEST, GET_KNOWLEDGE_SUCCESS } from "./actionTypes"

export const getKnowledgeRequest = () => {
    return {
        type: GET_KNOWLEDGE_REQUEST
    }
}
export const getKnowledgeSuccess = (payload) => {
    return {
        type: GET_KNOWLEDGE_SUCCESS,
        payload
    }
}
export const getKnowledgeFailure = () => {
    return {
        type: GET_KNOWLEDGE_FAILURE
    }
}

export const getDescription = (payload) => (dispatch) => {
    dispatch(getKnowledgeRequest())
    axios.get("")
    .then(res => {
        dispatch(getKnowledgeSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getKnowledgeFailure())
    })
}
