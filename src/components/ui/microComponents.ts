import { Box, Container, Divider, Typography, styled } from "@mui/material";

export const FlexContainer = styled(Box)({
  display: "flex",
});

export const FlexCentredBox = styled(FlexContainer)({
  justifyContent: "center",
  alignItems: "center",
});

export const FlexBetweenBox = styled(FlexCentredBox)({
  justifyContent: "space-between",
});

export const Wrapper = styled(Container)({
  "@media (min-width: 1440px)": {
    maxWidth: "1440px",
  },
});

export const Text600 = styled(Typography)({
  fontWeight: 600,
});

// export const StyledDivider = styled(Divider)({
//   marginTop: "4px",
//   marginBottom: "4px",
// });
