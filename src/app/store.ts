
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/userSlice';
import detailSlice from '../pages/detailSlice';
import searchSlice from '../pages/searchSlice';
import cartSlice from '../pages/cartSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
    search: searchSlice,
    cart: cartSlice
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});