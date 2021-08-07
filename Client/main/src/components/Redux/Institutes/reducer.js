import { GET_INSTITUTES_FAILURE, GET_INSTITUTES_REQUEST, GET_INSTITUTES_SUCCESS } from "./actionTypes"

const initState = {
    institutes: []
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_INSTITUTES_REQUEST: {
            return {
                ...state
            }
        }

        case GET_INSTITUTES_SUCCESS: {
            return {
                ...state,
                institutes: [...payload]
            }
        }

        case GET_INSTITUTES_FAILURE: {
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
}