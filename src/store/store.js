// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { contacts: "hello", showContact: true };

const contactReducer = (state = initialState, action) => {
//   if (action.type === 'showContact') {

  return {
    contacts: !state.contacts + "World",
    showContact: state.showContact,
  };
//   }
//   return state
};

const store = configureStore({
  reducer: { contactReducer },
});

console.log(store.getState());

export default store;
