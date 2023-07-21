import { IThemeState } from "@/types/theme.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (s) => {
      s.mode = s.mode === "light" ? "dark" : "light";
    },
  },
});

export const themeActions = themeSlice.actions;