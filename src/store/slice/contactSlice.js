import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
};

export const contactSlice = createSlice({
  name: "showContact",
  initialState,
  reducers: {
      showContactData(state, action) {
        //   console.log(action)
          return {
              ...state,contact:action.payload
          }
    },
  },
});

export const { showContactData } = contactSlice.actions;


export default contactSlice.reducer;
