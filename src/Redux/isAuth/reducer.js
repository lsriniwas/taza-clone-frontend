import {
  REQUEST_USER_LOGIN,
  REQUEST_USER_LOGIN_FAILURE,
  REQUEST_USER_LOGIN_SUCCESS,
  REQUEST_USER_SIGNUP,
  REQUEST_USER_SIGNUP_FAILURE,
  REQUEST_USER_SIGNUP_SUCCESS,
  USER_LOGOUT,
} from "./actionType";

const initialState = {
  isAuth: false,
  profile: "",
  isLoading: false,
  error: false,
  error_message: "",
};

export const isAuthReducer = (state = initialState, { type, payload }) => {
  console.log(payload)
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
      return {
        ...state,
        profile: payload,
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
      return {
        isAuth: false,
        profile: "",
        isLoading: false,
        error: false,
        error_message: "",
      };
    default:
      return state;
  }
};