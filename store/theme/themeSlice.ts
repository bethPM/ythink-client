import { createSlice } from "@reduxjs/toolkit";
import { RootReducerType } from "../store";

interface ITheme {
  name: "1" | "2" | "3";
}

const initialThemeState: ITheme = {
  name: "1",
};

const themeSlice = createSlice({
  name: "THEME",
  initialState: initialThemeState,
  reducers: {
    editTheme: (state, { type, payload }) => {
      return { ...payload };
    },
  },
});

const { editTheme } = themeSlice.actions;

const selectTheme = (state: RootReducerType) => state.theme;

export { selectTheme, editTheme };

export default themeSlice.reducer;
