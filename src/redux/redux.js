import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { dark: false };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.dark = !state.dark;
    },
  },
});


const store = configureStore({
    reducer: darkModeSlice.reducer,
    
});

export const darkModeActions = darkModeSlice.actions
export default store;
