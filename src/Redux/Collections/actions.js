import axios from "axios";
import { REQUEST_BARS, REQUEST_BARS_FAILURE, REQUEST_BARS_SUCCESS } from "./actionType";

const fetchBars=()=>({
    type:REQUEST_BARS
})

const fetchBarsSuccess=(payload)=>({
    type:REQUEST_BARS_SUCCESS,
    payload
})

const fetchBarsFailure=(err)=>({
    type:REQUEST_BARS_FAILURE,
    payload:err
})


export const fetchCollectionBars=(payload)=>(dispatch)=>{
    dispatch(fetchBars());

    var config = {
        method: 'get',
        url: 'http://localhost:5000/collections/amaze-bars',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     return axios(config)
      .then(({data})=>dispatch(fetchBarsSuccess(data)))
      .catch((err)=>dispatch(fetchBarsFailure(err)))
}



