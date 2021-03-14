import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartorderReducer } from "./Cart_and_Orders/reducer";
import { collectionsReducer } from "./Collections/reducer";
import { isAuthReducer } from "./isAuth/reducer";
import {searchReducer } from "./Search/reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  collectionsBarReducer: collectionsReducer,
  authReducer:isAuthReducer,
  cartorderReducer:cartorderReducer,
  search:searchReducer

});
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
