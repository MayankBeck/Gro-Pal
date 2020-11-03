import {
  SET_SHOPS,
  LOADING_DATA,
  SET_SHOP,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  SET_CART,
  DELETE_ITEM_CART,
  SET_ORDERS,
  EDIT_STATUS,
} from "../types";

const initialState = {
shops: [],
shop: {},
  cart: [],
  price: "",
  loading: false,
  addCartSuccess: null,
  deleteSuccessItem: null,
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SHOPS:
      return {
        ...state,
        loading: false,
      shops: action.payload,
      };
    case SET_SHOP:
      return {
        ...state,
        loading: false,
      shop: action.payload.result,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartSuccess: true,
      };
    case ADD_CART_FAIL:
      return {
        ...state,
        addCartSuccess: false,
      };
    case DELETE_ITEM_CART:
      return {
        ...state,
        deleteSuccessItem: true,
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case EDIT_STATUS:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.payload._id ? { ...action.payload } : order
        ),
      };
    case SET_CART:
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
        price: action.payload.totalPrice,
      };
    default:
      return state;
  }
}
