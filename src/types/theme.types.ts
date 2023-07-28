import { BoxProps, Palette } from "@mui/material";

export interface IThemeState {
  mode: "light" | "dark";
}

export type TButtonColors =
  | "inherit"
  | "grey"
  | "success"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning";

export type TChipColors =
  | Exclude<TButtonColors, "inherit" | "grey">
  | "default";

export interface MyPalette extends Palette {
  disabled: {
    main: string;
  };
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
    100: string;
    200: string;
    300: string;
  };
}
