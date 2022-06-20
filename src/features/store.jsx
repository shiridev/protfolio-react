import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
