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
              main: "rgb(145, 85, 253)",
              light: "#1a1636d9",
            },
            secondary: {
              main: "#26223e",
            },
            text: {
              primary: "rgba(231, 227, 252, 0.87)",
              secondary: " rgba(231, 227, 252, 0.38)",
              disabled: "rgba(231, 227, 252, 0.6)",
            },
            background: { paper: "#28243d" },
            info: {
              main: "rgb(22, 177, 255)",
              light: "rgba(231, 227, 252, 0.12)",
            },
            error: { main: "rgb(255, 76, 81)" },
            warning: { main: "rgb(255, 180, 0)" },
            success: { main: "rgb(145, 85, 253)" },
          }
        : {
            // light mode
            primary: {
              main: "rgb(145, 85, 253)",
              light: "rgba(255, 255, 255, 0.85)",
            },
            secondary: {
              main: "rgb(255, 255, 255)",
            },
            text: {
              primary: "rgba(58, 53, 65, 0.87)",
              secondary: "rgba(58, 53, 65, 0.38)",
              disabled: "rgba(58, 53, 65, 0.6)",
            },
            background: { paper: "#F4F5FA" },
            error: { main: "rgb(255, 76, 81)" },
            info: {
              main: "rgb(22, 177, 255)",
              light: "rgba(58, 53, 65, 0.12)",
            },
            warning: { main: "rgb(255, 180, 0)" },
            success: { main: "rgb(145, 85, 253)" },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  };
};


