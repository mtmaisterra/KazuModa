import { createSlice } from "@reduxjs/toolkit";

let initialState;

// check if we are in the browser and get session token.
if(typeof window !== 'undefined'){
  initialState = JSON.parse(localStorage.getItem('session'))
}

// Slice to handle current session user data.
export const currentUser = createSlice({
  name: 'currentUser',
  initialState: initialState || null,
  reducers: {
    setCurrentUser: (state, action) => {
      return action.payload;
    }
  }
});

export const { setCurrentUser } = currentUser.actions;

export default currentUser.reducer;
