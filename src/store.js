import { configureStore } from "@reduxjs/toolkit";
import listReducer from './Components/List/listSlice.js'

export const store = configureStore({
    reducer: {
      list: listReducer
    },
  });