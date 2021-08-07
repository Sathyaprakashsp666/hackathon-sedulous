import { GET_KNOWLEDGE_FAILURE, GET_KNOWLEDGE_REQUEST, GET_KNOWLEDGE_SUCCESS } from "./actionTypes"

const initState = {
    knowledge: []
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_KNOWLEDGE_REQUEST: {
            return {
                ...state
            }
        }

        case GET_KNOWLEDGE_SUCCESS: {
            return {
                ...state,
                knowledge: [...payload]
            }
        }

        case GET_KNOWLEDGE_FAILURE: {
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
}