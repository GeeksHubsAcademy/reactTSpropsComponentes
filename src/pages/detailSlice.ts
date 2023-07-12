
import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
      character: {}
    },
    reducers: {
      addCharacter: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
      
    }
    
});

//exporto las ACCIONES.....
export const { addCharacter } = detailSlice.actions;

export const characterData = (state: any) => state.detail;

export default detailSlice.reducer;