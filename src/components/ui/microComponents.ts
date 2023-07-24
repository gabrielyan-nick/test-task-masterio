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
  Container,
  Divider,
  Menu,
  MenuProps,
  Paper,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

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
  backgroundColor: theme.palette.background.paper,
  paddingTop: "64px",
  paddingBottom: "200px",
}));

// export const BtnPurple = styled(Button)<ButtonProps>(({ theme }) => ({
//   backgroundColor: "rgb(145, 85, 253)",
//   color: "#fff",
//   boxShadow: "rgba(58, 53, 65, 0.42) 0px 4px 8px -4px",
//   padding: "0.46875rem 1.375rem",
//   borderRadius: "5px",
//   "&:hover": {
//     backgroundColor: "#8148cb",
//     boxShadow: "rgba(58, 53, 65, 0.56) 0px 6px 18px -8px;",
//   },
// }));

export const WrapperBg = styled(Card)<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
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

export const HeaderMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  marginTop: "35px",
  "& .MuiMenu-paper": { borderRadius: "5px" },
  "& ul": {
    backgroundColor: theme.palette.secondary.main,
    padding: "8px 0",
  },
  "& .MuiDivider-root": {
    margin: "4px 0",
  },
}));
