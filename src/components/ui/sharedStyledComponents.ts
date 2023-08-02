import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardContent,
  CardContentProps,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Dialog,
  DialogContent,
  DialogContentProps,
  DialogProps,
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Menu,
  MenuProps,
  Tab,
  TabProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

export const FlexBox = styled(Box)<BoxProps>({
  display: "flex",
});

export const FlexCentredBox = styled(FlexBox)({
  justifyContent: "center",
  alignItems: "center",
});

export const FlexBetweenBox = styled(FlexCentredBox)({
  justifyContent: "space-between",
});

export const Text600 = styled(Typography)<TypographyProps>({
  fontWeight: 600,
});

export const TextLight = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.disabled,
}));

export const TextPrimary = styled(Text600)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: "1.5",
  letterSpacing: "0.15px",
  color: theme.palette.text.disabled,
}));

export const Wrapper = styled(Box)<BoxProps>({
  width: "100%",
  padding: "1.5rem",
  margin: "0 auto",
  "@media (min-width: 1440px)": {
    maxWidth: "1440px",
  },
});

export const Main = styled("main")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  paddingTop: "64px",
}));

export const WrapperBg = styled(Card)<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: "none",
  borderRadius: "6px",
  boxShadow: "rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",
}));

export const ContentWrapper = styled(CardContent)<CardContentProps>({
  padding: "1.25rem",
  "&:last-child": {
    paddingBottom: "1.25rem",
  },
});

export const ContentHeader = styled(CardHeader)<CardHeaderProps>({
  padding: "1.25rem 1.25rem 0",
  "& .MuiCardHeader-title": {
    lineHeight: 1.6,
    fontWeight: 500,
    fontSize: "1.25rem",
    letterSpacing: "0.15px",
  },
});

export const SectionTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    display: "block",
    color: theme.palette.text.disabled,
    letterSpacing: "0.4px",
    textTransform: "uppercase",
    marginBottom: "1.25rem",
  })
);

export const ActionsMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  marginTop: "35px",
  "& .MuiMenu-paper": { borderRadius: "5px" },
  "& ul": {
    backgroundColor: theme.palette.background.paper,
  },
  "& .MuiDivider-root": {
    margin: "4px 0",
  },
}));

export const StyledTab = styled(Tab)<TabProps>(({ theme }) => ({
  display: "flex",
  minWidth: "130px",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  borderRadius: "6px",
  minHeight: "40px",
  color: theme.palette.text.disabled,
  "&.Mui-selected": {
    backgroundColor: "rgb(145, 85, 253)",
    color: "#fff",
  },
}));

export const StyledDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "6px",
    backgroundColor: theme.palette.background.paper,
    backgroundImage: "none",
    boxShadow: "rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",
    [`@media (max-width: 600px)`]: {
      margin: "1rem",
      width: "calc(100% - 2rem)",
      maxWidth: "calc(100% - 2rem)",
    },
  },
  "& .MuiModal-backdrop": {
    backgroundColor: theme.palette.grey[100],
  },
  "& .MuiDialogTitle-root": {
    padding: "2rem 1.25rem 1.25rem",
    [`@media (min-width: 600px)`]: {
      padding: "3.125rem 3.75rem 1.25rem 3.75rem",
    },
  },
  "& .MuiDialogActions-root": {
    padding: "0 1.25rem 2rem 1.25rem",
    justifyContent: "center",
    [`@media (min-width: 600px)`]: {
      padding: "0 3.75rem 3.125rem 3.75rem",
    },
  },
  "& h4": {
    fontSize: "1.5625rem",
    [`@media (min-width: 600px)`]: {
      fontSize: "1.8219rem",
    },
    [`@media (min-width: 1200px)`]: {
      fontSize: "2.0243rem",
    },
  },
  "& h5": {
    fontSize: "1.25rem",
    [`@media (min-width: 600px)`]: {
      fontSize: "1.3118rem",
    },
    [`@media (min-width: 900px)`]: {
      fontSize: "1.4993rem",
    },
  },
}));

export const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "6px",
  },
  "& label": { color: "text.disabled" },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.text.secondary,
  },
  "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
}));

export const SelectWrapper = styled(FormControl)<FormControlProps>(
  ({ theme }) => ({
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.text.secondary,
    },
    "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    // @ts-ignore
    "& svg": { color: theme.palette.disabled.main },
    "& label": { color: theme.palette.text.disabled },
  })
);

export const StyledDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  border: "none",
  minHeight: "161px",
  "& .MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-cellCheckbox": {
    maxWidth: "58px !important",
    minWidth: "58px !important",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: 600,
    fontSize: "0.75rem",
    letterSpacing: "0.17px",
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.primary,
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.primary.dark,
  },
  "& .MuiDataGrid-menuIcon > button": {
    color: theme.palette.disabled.main,
  },
  "& .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeaderCheckbox)": {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  "& .MuiDataGrid-cell:not(.MuiDataGrid-cellCheckbox)": {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  "& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
  [`@media (min-width: 1200px)`]: {
    "& .MuiDataGrid-virtualScroller": {
      overflow: "hidden",
    },
  },
}));
