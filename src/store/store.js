import { configureStore } from "@reduxjs/toolkit";
// import contactReducers from "./reducer/ContactReducers";
import contactReducer from '../store/slice/contactSlice'

const store = configureStore({
  reducer: {
    contact:contactReducer
  }
});

console.log(store.getState());

export default store;
