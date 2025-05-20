// import { createStoreHook } from "react-redux";
import {cartSlice} from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";

const initialData = {
    productsData: []
}

export function addingProducts(datas){
    return {
        type: "ADD_CART",
        payload: datas
        // { ...datas, quantity: 1 }
    }
}

export function removeItem(itemId){
    return {
      type: "REMOVE_CART",
    payload: itemId
    } 
}

// redux.js or your slice file
// export const removeItem = (itemId) => ({
//     type: 'REMOVE_ITEM',
//     payload: itemId,
//   });
  
  // In your reducer
  const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
              const updatedCartItems = [...state.cartItems];
              updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
              return {
                ...state,
                cartItems: updatedCartItems,
              };
            } else {
              return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }], // Default quantity to 1
              };
            }
      case 'REMOVE_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      // other cases...
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
    carts: cartReducer
})

export const cartStores = createStore(rootReducer)
