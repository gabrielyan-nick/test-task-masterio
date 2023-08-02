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
              dark: "rgb(61, 55, 89)",
              "100": "rgba(145, 85, 253, 0.12)",
              "200": "rgba(145, 85, 253, 0.04)",
              "300": "rgba(145, 85, 253, 0.5)",
            },
            secondary: {
              main: "rgb(138, 141, 147)",
              light: "rgb(40, 36, 61)",
              dark: "rgb(128, 75, 223)",
              "100": "rgba(138, 141, 147, 0.12)",
              "200": "rgba(231, 227, 252, 0.04)",
            },
            text: {
              primary: "rgba(231, 227, 252, 0.87)",
              secondary: " rgba(231, 227, 252, 0.38)",
              disabled: "rgba(231, 227, 252, 0.6)",
            },
            background: { default: "#28243d", paper: "rgb(49, 45, 75)" },
            info: {
              main: "rgb(22, 177, 255)",
              light: "rgba(231, 227, 252, 0.12)",
              "100": "rgba(22, 177, 255, 0.12)",
            },
            error: {
              main: "rgb(255, 76, 81)",
              dark: "rgb(224, 67, 71)",
              "100": "rgba(255, 76, 81, 0.12)",
            },
            warning: {
              main: "rgb(255, 180, 0)",
              dark: "rgb(255, 189, 30)",
              light: "rgba(255, 180, 0, 0.12)",
              "100": "rgba(255, 180, 0, 0.12)",
            },
            success: {
              main: "rgb(86, 202, 0)",
              dark: "rgb(76, 178, 0)",
              light: "rgba(86, 202, 0, 0.04)",
              "100": "rgba(86, 202, 0, 0.12)",
            },
            disabled: {
              main: "rgba(231, 227, 252, 0.54)",
            },
            grey: {
              "100": "rgba(40, 36, 61, 0.7)",
              "200": "rgb(87, 80, 115, 0.9)",
            },
          }
        : {
            // light mode
            primary: {
              main: "rgb(145, 85, 253)",
              light: "rgba(255, 255, 255, 0.85)",
              dark: "rgb(249, 250, 252)",
              "100": "rgba(145, 85, 253, 0.12)",
              "200": "rgba(145, 85, 253, 0.04)",
              "300": "rgba(145, 85, 253, 0.5)",
            },
            secondary: {
              main: "rgb(138, 141, 147)",
              light: "rgb(244, 245, 250)",
              dark: "rgb(128, 75, 223)",
              "100": "rgba(138, 141, 147, 0.12)",
              "200": "rgba(58, 53, 65, 0.04)",
            },
            text: {
              primary: "rgba(58, 53, 65, 0.87)",
              secondary: "rgba(58, 53, 65, 0.38)",
              disabled: "rgba(58, 53, 65, 0.6)",
            },
            background: {
              default: "#F4F5FA",
              paper: "#fff",
            },
            error: {
              main: "rgb(255, 76, 81)",
              dark: "rgb(224, 67, 71)",
              "100": "rgba(255, 76, 81, 0.12)",
            },
            info: {
              main: "rgb(22, 177, 255)",
              light: "rgba(58, 53, 65, 0.12)",
              "100": "rgba(22, 177, 255, 0.12)",
            },
            warning: {
              main: "rgb(255, 180, 0)",
              dark: "rgb(224, 158, 0)",
              light: "rgba(255, 180, 0, 0.12)",
              "100": "rgba(255, 180, 0, 0.12)",
            },
            success: {
              main: "rgb(86, 202, 0)",
              dark: "rgb(76, 178, 0)",
              light: "rgba(86, 202, 0, 0.04)",
              "100": "rgba(86, 202, 0, 0.12)",
            },
            disabled: {
              main: "rgba(58, 53, 65, 0.54)",
            },
            grey: {
              "100": "rgba(58, 53, 65, 0.7)",
              "200": "rgba(58, 53, 65, 0.9)",
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  };
};
