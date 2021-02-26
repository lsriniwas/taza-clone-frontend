import { REQUEST_BARS, REQUEST_BARS_FAILURE, REQUEST_BARS_SUCCESS } from "./actionType";

const init={
    isLoading:false,
    bars:[],
    error:false
}


const collectionsReducer=(state=init,{type,payload})=>{
    switch(type){
        case REQUEST_BARS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case REQUEST_BARS_SUCCESS:{
            return{
                ...state,
                bars:[...payload],
                isLoading:false
            }
        }
        case REQUEST_BARS_FAILURE:{
            return{
                ...state,
                error:true
            }
        }
        default:{
            return state;
        }
    }
}

export {collectionsReducer}