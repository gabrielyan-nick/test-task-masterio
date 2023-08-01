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
