
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items:<any>[]
    },
    reducers: {
      add: (state, action: PayloadAction) => {

        return {
          ...state,
          items: [...state.items, action.payload]
        }
      },
      remove: (state, action) => {
        return {
          ...state,
          items: []
        }
      }
      
    }
    
});

//exporto las ACCIONES.....
export const { add, remove } = cartSlice.actions;

export const cartData = (state: any) => state.cart;

export default cartSlice.reducer;