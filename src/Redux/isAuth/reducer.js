import { loadData, saveData } from "../../Utils/localStorage";
import {
  FETCH_USER_PROFILE_FAILURE,
  REQUEST_USER_LOGIN,
  REQUEST_USER_LOGIN_FAILURE,
  REQUEST_USER_LOGIN_SUCCESS,
  REQUEST_USER_SIGNUP,
  REQUEST_USER_SIGNUP_FAILURE,
  REQUEST_USER_SIGNUP_SUCCESS,
  USER_LOGOUT,
  FETCH_USER_PROFILE,
} from "./actionType";

const initialState = {
  isAuth: false,
  profile: "",
  isLoading: false,
  error: false,
  error_message: "",
  token:loadData('token')||null
};

export const isAuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_USER_SIGNUP || REQUEST_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        error: false,
        error_message: "",
        profile: "",
      };
      case REQUEST_USER_SIGNUP_SUCCESS:
        return {
          ...state,
          profile: payload,
          isLoading: false,
          isAuth: true,
          error: false,
        };
      case REQUEST_USER_LOGIN_SUCCESS:
       let data=payload 
       saveData('token',data)
      return {
        ...state,
        token: data,
        isLoading: false,
        isAuth: true,
        error: false,
      };
    case REQUEST_USER_SIGNUP_FAILURE: {
      return {
        ...state,
        isAuth: false,
        error_message: payload,
        error: true,
        isLoading: false,
      };
    }
    case REQUEST_USER_LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        error_message: payload,
        error: true,
        isLoading: false,
      };
    }
    case USER_LOGOUT:
    localStorage.removeItem("token");
      return {
        token:null,
        isAuth: false,
        profile: "",
        isLoading: false,
        error: false,
        error_message: "",
      };
case   FETCH_USER_PROFILE:{
        return {
          ...state,
          profile: payload,
          isLoading: false,
          isAuth: true,
          error: false,
        }
}
 case FETCH_USER_PROFILE_FAILURE:{
  localStorage.removeItem("token");
   return {
    ...state,
    profile:'',
    token: null,
    isLoading: false,
    isAuth: false,
    error: false,
  }
 }
    default:
      return state;
  }
};