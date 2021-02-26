import { ADD_TO_CART, DELETE_CART, UPDATE_CART } from "./actionType";

const initialState = {
  cart: [],
  totalAmt: 0,
  totalItems: 0,
};
const getTotal = (cart) => {
  const total = cart.reduce((a, c) => a + Number(c.qty) * Number(c.price), 0);

  const totaItems = cart.reduce((a, c) => a + Number(c.qty), 0);

  return { total, totaItems };
};

export const cartorderReducer = (
  state = initialState,
  { type, payload, qty = 1 }
) => {
  switch (type) {
    case ADD_TO_CART:
      let searchCart = state.cart.findIndex((items) => items.id === payload.id);

      if (searchCart === -1) {
        let cart = [...state.cart, payload];
        let total = getTotal(cart);
        return {
          ...state,
          cart: cart,
          totalAmt: total.total,
          totalItems: total.totaItems,
        };
      } else {
        let newCart = state.cart?.map((item, i) =>
          i === searchCart
            ? { ...item, qty: Number(item.qty) + Number(qty) }
            : item
        );
        let total = getTotal(newCart);
        return {
          ...state,
          cart: [...newCart],
          totalAmt: total.total,
          totalItems: total.totaItems,
        };
      }
    case DELETE_CART:
      let index = state.cart.findIndex((items) => items.id === payload);
      state.cart.splice(index, 1);
      let total = getTotal(state.cart);
      return {
        ...state,
        cart: [...state.cart],
        totalAmt: total.total,
        totalItems: total.totaItems,
      };
    case UPDATE_CART:{
    let newCart=state.cart.map(item=>item.id===payload?{...item,qty:qty}:item)
      let total = getTotal(newCart);
      return {
        ...state,
        cart: [...newCart],
        totalAmt: total.total,
        totalItems: total.totaItems,
      };
    }
    default:
      return state;
  }
};
