import { GET_DESCRIPTION_FAILURE, GET_DESCRIPTION_REQUEST, GET_DESCRIPTION_SUCCESS } from "./actionTypes"

const initState = {
    description: []
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_DESCRIPTION_REQUEST: {
            return {
                ...state
            }
        }

        case GET_DESCRIPTION_SUCCESS: {
            return {
                ...state,
                description: [...payload]
            }
        }

        case GET_DESCRIPTION_FAILURE: {
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
}