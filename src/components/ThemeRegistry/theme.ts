import { IThemeState } from "@/types/theme.types";
import { ThemeOptions } from "@mui/material";

export const themeSettings = ({ mode }: IThemeState): ThemeOptions => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // dark mode
            primary: {
              main: "#28243d",
              light: "#1a1636d9",
            },
            secondary: {
              main: "rgb(49, 45, 75)",
            },
            text: {
              primary: "rgba(231, 227, 252, 0.87)",
              secondary: " rgba(231, 227, 252, 0.38)",
            },
          }
        : {
            // light mode
            primary: {
              main: "#F4F5FA",
              light: "rgba(255, 255, 255, 0.85)",
            },
            secondary: {
              main: "rgb(255, 255, 255)",
            },
            text: {
              primary: "rgba(58, 53, 65, 0.87)",
              secondary: "rgba(58, 53, 65, 0.38)",
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  };
};
