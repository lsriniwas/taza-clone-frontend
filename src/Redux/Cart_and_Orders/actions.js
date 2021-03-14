import axios from "axios";
import {
  ADD_ORDERS_SUCCESS,
  ADD_TO_CART,
  DELETE_CART,
  REQUEST_ORDERS,
  REQUEST_ORDERS_FAILURE,
  REQUEST_ORDERS_SUCCESS,
  UPDATE_CART,
} from "./actionType";
export const addToCart = (payload, qty) => ({
  type: ADD_TO_CART,
  payload,
  qty,
});

export const deletecart = (id) => ({
  type: DELETE_CART,
  payload: id,
});

export const updateOrder = (payload, qty) => ({
  type: UPDATE_CART,
  payload,
  qty,
});


const requestOrder = () => ({
  type: REQUEST_ORDERS,
});

const requestOrderDetails = (payload) => ({
  type: REQUEST_ORDERS_SUCCESS,
  payload,
});

const addOrdersuccess = (payload) => ({
  type: ADD_ORDERS_SUCCESS,
  payload,
});

const failureOrder = (err) => ({
  type: REQUEST_ORDERS_FAILURE,
  payload: err,
});

const requestUserOrder = (payload) => (dispatch) => {
  dispatch(requestOrder());
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/orderlist`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

 return axios(config)
    .then((res) => {
       dispatch(requestOrderDetails(res.data))})
    .catch((err) => dispatch(failureOrder(err)));
};
export { requestUserOrder };

const addOrder = (payload,orderItems) => async(dispatch) => {
  dispatch(requestOrder());
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/order`,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
          const response= await axios(config)
          const options = {
                name: "Taza RazorPay",
                description: "Integration of Razorpay",
                order_id: response.data.id,
                handler: async (response) => {
                  try {
                      const paymentId = response.razorpay_payment_id;
                      var config = {
                        method: "post",
                        url: `${process.env.REACT_APP_API_URL}/order/${paymentId}`,
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data: orderItems,
                      };
                    await axios(config)
                          .then(res=>{
                            alert("order placed successfully")
                            dispatch(addOrdersuccess(res.message));
                          })
                          .catch(err=>{
                            dispatch(failureOrder(err))})
                  } 
                  catch (err) {
                    console.log(err);
                  }
                },
                theme: {
                  color: "#c6203d",
                },
              };
              const rzp1 = new window.Razorpay(options);
              rzp1.open();
};
export { addOrder };
