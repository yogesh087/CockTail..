import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cockSlice";

export default configureStore({
  reducer: {
    app: cocktailSlice,
  },
});
