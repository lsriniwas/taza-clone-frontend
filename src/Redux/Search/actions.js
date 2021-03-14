import axios from "axios";
import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "./actionTypes";


const getRequest=()=>({
    type:GET_REQUEST
})

const getRequestSuccess=(payload)=>({
    type:GET_REQUEST_SUCCESS,
    payload
})

const getRequestFailure=(err)=>({
    type:GET_REQUEST_FAILURE,
    payload:err
})

export const getSearch=payload=>dispatch=>{
    dispatch(getRequest());
    axios.get(`${process.env.REACT_APP_API_URL}/search`,{
        params:{
            q:payload
        }
    }).then(res=>dispatch(getRequestSuccess(res.data)))
      .catch(err=>dispatch(getRequestFailure(err)))
    
}