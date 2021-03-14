import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "./actionTypes"

const initialState = {
    searchResult:[],
    isLoading:false,
    error:false,
    message:""
}

export const searchReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_REQUEST:
        return { ...state, 
                isLoading:true
        }
    case GET_REQUEST_SUCCESS:
        return{
            ...state,
            searchResult:payload,
            isLoading:false,
            error:false
        }
    case GET_REQUEST_FAILURE:{
        return{
            ...state,
            error:true,
            message:payload,
            isLoading:false
        }
    }
    default:
        return state
    }
}
