import axios from "axios"
import { loadData } from "../../Utils/localStorage";
import {FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE, REQUEST_USER_LOGIN, REQUEST_USER_LOGIN_FAILURE, REQUEST_USER_LOGIN_SUCCESS, REQUEST_USER_SIGNUP, REQUEST_USER_SIGNUP_FAILURE, REQUEST_USER_SIGNUP_SUCCESS, USER_LOGOUT } from "./actionType";

const fetchUserSignUp=()=>({
    type:REQUEST_USER_SIGNUP
})

const fetchUserSignUpSuccess=(payload)=>({
    type:REQUEST_USER_SIGNUP_SUCCESS,
    payload
})

const fetchUserSignUpFailure=(err)=>({
    type:REQUEST_USER_SIGNUP_FAILURE,
    payload:err
})

export const userSignUp=payload=>dispatch=>{
    dispatch(fetchUserSignUp());
    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/account/register`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
return axios(config)
       .then((response)=>{
        dispatch(fetchUserSignUpSuccess(response.data.userInfo))})
       .catch((error)=>{
        dispatch(fetchUserSignUpFailure(error))
        });
}

const fetchUserLogin=()=>({
    type:REQUEST_USER_LOGIN
})

const fetchUserLoginSuccess=(payload)=>({
    type:REQUEST_USER_LOGIN_SUCCESS,
    payload
})

const fetchUserLoginFailure=(error)=>({
    type:REQUEST_USER_LOGIN_FAILURE,
    payload:error
})

const fetchuserProfile=(payload)=>({
    type:FETCH_USER_PROFILE,
    payload
})

const fetchuserProfileFailure=(payload)=>({
    type:FETCH_USER_PROFILE_FAILURE,
    payload
})

export const getUserProfile=payload=>dispatch=>{
    var config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/user/activeuser`,
    headers: { 
      'Authorization': `Bearer ${loadData('token')}`
    },
  }; 
  return axios(config)
  .then( (res)=> {
        dispatch(fetchuserProfile(res.data.userInfo))
    }
    )
    .catch((err)=>{
        dispatch(fetchuserProfileFailure(err))
    })
}

export const userLogin=payload=>dispatch=>{
    dispatch(fetchUserLogin());

    var config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/user/profile`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : payload
  }; 
  return axios(config)
  .then( (res)=> {
         dispatch(fetchUserLoginSuccess(res.data.accessToken))
         dispatch(getUserProfile())
        })
         .catch((err)=> {
         dispatch(fetchUserLoginFailure(err.response.data.Error))
  
        });
}


export const userLogout=()=>({
   type:USER_LOGOUT
})