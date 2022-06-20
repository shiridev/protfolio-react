import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../theme/theme";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    defaultTheme: Theme.light,
  },

  reducers: {
    changeTheme: (state) => {
      if (state.defaultTheme.type === Theme.light.type) {
        state.defaultTheme = Theme.dark;
      } else {
        state.defaultTheme = Theme.light;
      }
    },
  },
});

export default themeSlice;
