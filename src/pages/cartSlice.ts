
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: []
    },
    reducers: {
      add: (state, action) => {

        return {
          ...state,
          items: [...state.items, action.payload]
        }
      },
      remove: (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload]

        }
      }
      
    }
    
});

//exporto las ACCIONES.....
export const { add, remove } = cartSlice.actions;

export const cartData = (state: any) => state.cart;

export default cartSlice.reducer;