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
  Menu,
  MenuProps,
  Tab,
  TabProps,
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
  paddingTop: "64px",
}));

export const WrapperBg = styled(Card)<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
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
    backgroundColor: theme.palette.secondary.main,
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
