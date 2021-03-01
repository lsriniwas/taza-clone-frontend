import axios from "axios";
import { REQUEST_BARS, REQUEST_BARS_FAILURE, REQUEST_BARS_SUCCESS,REQUEST_SINGLE_PRODUCT } from "./actionType";

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
const fetchSingleProduct=(payload)=>({
type:REQUEST_SINGLE_PRODUCT,
payload
})

export const fetchCollectionBars=(payload)=>(dispatch)=>{
    dispatch(fetchBars());
  console.log(process.env.BASE_URL,process.env.REACT_APP_API_URL)
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/collections/amaze-bars`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     return axios(config)
      .then(({data})=>dispatch(fetchBarsSuccess(data)))
      .catch((err)=>dispatch(fetchBarsFailure(err)))
}

export const fetchCollectionTreats=(payload)=>(dispatch)=>{
    dispatch(fetchBars());
  
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/collections/chocolate-covered-nuts`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     return axios(config)
      .then(({data})=>{
        dispatch(fetchBarsSuccess(data))})
      .catch((err)=>{
        dispatch(fetchBarsFailure(err.response))})
}
export const fetchCollectionDiscs=(payload)=>(dispatch)=>{
  dispatch(fetchBars());

  var config = {
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/collections/discs`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : payload
    };
    
   return axios(config)
    .then(({data})=>dispatch(fetchBarsSuccess(data)))
    .catch((err)=>dispatch(fetchBarsFailure(err)))
}
export const fetchCollectionBark=(payload)=>(dispatch)=>{
  dispatch(fetchBars());
  var config = {
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/collections/dark-bark`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : payload
    };
    
   return axios(config)
    .then(({data})=>dispatch(fetchBarsSuccess(data)))
    .catch((err)=>dispatch(fetchBarsFailure(err)))
}
///collections/amaze-bars/:id
export const getProductDetails=(payload)=>(dispatch)=>{
  // dispatch(fetchBars());
   var config = {
       method: 'get',
       url: `${process.env.REACT_APP_API_URL}/collections/${payload.url}/${payload._id}`,
       headers: { 
         'Content-Type': 'application/json'
       },
     };
     console.log(config)
     axios(config)
     .then(({data})=>dispatch(fetchSingleProduct(data)))
     .catch((err)=>dispatch(fetchBarsFailure(err)))
}