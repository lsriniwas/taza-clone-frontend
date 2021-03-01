import { REQUEST_BARS, REQUEST_BARS_FAILURE, REQUEST_BARS_SUCCESS, REQUEST_SINGLE_PRODUCT } from "./actionType";

const init={
    isLoading:false,
    bars:[],
    error:false,
    productDetails:"",
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
        case REQUEST_SINGLE_PRODUCT:{
            return{
                ...state,
                productDetails:payload,
                isLoading:false
            }
        }
        default:{
            return state;
        }
    }
}

export {collectionsReducer}