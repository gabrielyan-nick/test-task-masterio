"use client";

import React from "react";
import { FlexBetweenBox, FlexBox, Wrapper } from "./microComponents";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";

const Footer = () => {
  const match = useMediaQuery("(min-width: 900px)");

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Wrapper
        sx={{
          padding: "1rem",
          [`@media (min-width: 600px)`]: {
            px: "1.5rem",
          },
        }}
      >
        <FlexBetweenBox>
          <Typography>
            © 2023, Made with ❤️ by{" "}
            <Link
              href="https://mui.com/store/contributors/themeselection/"
              underline="none"
              target="_blank"
            >
              ThemeSelection
            </Link>
          </Typography>
          {match && (
            <FlexBox gap="1rem">
              <Link
                href="https://mui.com/store/license/"
                underline="none"
                target="_blank"
              >
                License
              </Link>
              <Link
                href="https://mui.com/store/contributors/themeselection/"
                underline="none"
                target="_blank"
              >
                More Themes
              </Link>
              <Link
                href="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/documentation/"
                underline="none"
                target="_blank"
              >
                Documentation
              </Link>
              <Link
                href="https://themeselection.com/support/"
                underline="none"
                target="_blank"
              >
                Support
              </Link>
            </FlexBox>
          )}
        </FlexBetweenBox>
      </Wrapper>
    </Box>
  );
};

export default Footer;
