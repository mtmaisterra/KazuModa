import { configureStore } from "@reduxjs/toolkit";

// Slice modules
import currentUser from "./features/currentUser";


export default configureStore({
  reducer: {
    currentUser: currentUser,
  }
})
