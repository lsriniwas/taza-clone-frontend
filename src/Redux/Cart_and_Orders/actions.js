import { ADD_ORDERS_SUCCESS, ADD_TO_CART, DELETE_CART, REQUEST_ORDERS, REQUEST_ORDERS_FAILURE, REQUEST_ORDERS_SUCCESS, UPDATE_CART } from "./actionType";

export const addToCart=(payload,qty)=>({
    type:ADD_TO_CART,
    payload,
    qty
})

export const deletecart=(id)=>({
    type:DELETE_CART,
    payload:id
})

export const updateOrder=(payload,qty)=>({
    type:UPDATE_CART,
    payload,
    qty
})


const requestOrder=()=>({
    type:REQUEST_ORDERS
})

const requestOrderDetails=(payload)=>({
    type:REQUEST_ORDERS_SUCCESS,
    payload
})

const addOrdersuccess=(payload)=>({
    type:ADD_ORDERS_SUCCESS,
    payload
})

const failureOrder=(err)=>({
    type:REQUEST_ORDERS_FAILURE,
    payload:err
})

const addOrder=payload=>dispatch=>{
    dispatch(requestOrder());
}