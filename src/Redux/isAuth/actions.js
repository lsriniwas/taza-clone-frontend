import axios from "axios"
import { REQUEST_USER_LOGIN, REQUEST_USER_LOGIN_FAILURE, REQUEST_USER_LOGIN_SUCCESS, REQUEST_USER_SIGNUP, REQUEST_USER_SIGNUP_FAILURE, REQUEST_USER_SIGNUP_SUCCESS, USER_LOGOUT } from "./actionType";

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
        url: 'http://localhost:5000/account/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
return axios(config)
       .then((response)=>{
        dispatch(fetchUserSignUpSuccess(response.data.userInfo))})
       .catch((error)=>{
        dispatch(fetchUserSignUpFailure(error.response.data))
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

export const userLogin=payload=>dispatch=>{
    dispatch(fetchUserLogin());

    var config = {
    method: 'post',
    url: 'http://localhost:5000/user/profile',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : payload
  };
   return axios(config)
  .then( (res)=> {
        dispatch(fetchUserLoginSuccess(res.data.userInfo))})
  .catch((err)=> {
       dispatch(fetchUserLoginFailure(err.response.data.Error))
  });
}


export const userLogout=()=>({
   type:USER_LOGOUT
})