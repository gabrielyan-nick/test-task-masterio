"use client";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  SvgIcon,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { LogoIcon } from "../icons";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useAppSelector } from "@/hooks/redux-hooks";
import { useActions } from "@/hooks/useActions";
import {
  FlexBetweenBox,
  FlexCentredBox,
  FlexContainer,
  Text600,
  Wrapper,
} from "./microComponents";
import AvatarWithBadge from "./Avatar";

const HeaderContainer = styled(Wrapper)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1.5rem",
});

const Header = styled(AppBar)(({ theme }) => ({
  minHeight: "64px",
  boxShadow: "rgba(58, 53, 65, 0.42) 0px 4px 8px -4px",
  zIndex: 10,
  backgroundColor: theme.palette.primary.light,
  backdropFilter: "blur(8px)",
  justifyContent: "center",
}));

const LogoLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary,
  gap: "0.75rem",
}));

const IconBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  height: "40px",
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: "50px",
  "& .MuiMenu-paper": { borderRadius: "5px" },
  "& ul": {
    backgroundColor: theme.palette.secondary.main,
    padding: "8px 0",
  },
  "& li": { width: "230px", padding: "0.5rem 1rem" },
  "& li svg": { width: "22px", height: "22px" },
  "& .MuiDivider-root": {
    margin: "4px 0",
  },
}));

const menuData = [
  { icon: <PersonOutlineIcon />, label: "Profile" },
  { icon: <MailOutlineIcon />, label: "Inbox" },
  { icon: <ChatBubbleOutlineIcon />, label: "Chat" },
  { icon: <SettingsOutlinedIcon />, label: "Settings" },
  { icon: <AttachMoneyOutlinedIcon />, label: "Pricing" },
  { icon: <HelpOutlineOutlinedIcon />, label: "FAQ" },
  { icon: <LogoutOutlinedIcon />, label: "Logout" },
];

const HeaderBar = () => {
  const mode = useAppSelector((s) => s.theme.mode);
  const { setMode } = useActions();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Header position="fixed">
      <HeaderContainer maxWidth="xl">
        <LogoLink href="/" underline="none">
          <LogoIcon />
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textTransform: "uppercase" }}
          >
            Materio
          </Typography>
        </LogoLink>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconBtn>
            <SearchIcon />
          </IconBtn>
          <IconBtn>
            <TranslateIcon />
          </IconBtn>
          <IconBtn onClick={() => setMode()}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconBtn>
          <IconBtn>
            <GridViewIcon />
          </IconBtn>
          <IconBtn>
            <NotificationsNoneIcon />
          </IconBtn>

          <Box sx={{ marginLeft: "0.5rem" }}>
            <AvatarWithBadge handleClick={handleOpenMenu} />
            <StyledMenu
              sx={{}}
              id="menu-bar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <FlexContainer sx={{ padding: "0.5rem 1rem 0.5rem" }}>
                <AvatarWithBadge />

                <Box sx={{ marginLeft: "0.75rem" }}>
                  <Text600>John Doe</Text600>
                  <Typography
                    sx={{ fontSize: "0.8rem" }}
                    color={theme.palette.text.secondary}
                  >
                    Admin
                  </Typography>
                </Box>
              </FlexContainer>
              <Divider />
              {menuData.map((item, i) => (
                <div key={i}>
                  <MenuItem onClick={handleCloseMenu}>
                    {item.icon}
                    <Typography sx={{ marginLeft: "0.5rem" }}>
                      {item.label}
                    </Typography>
                  </MenuItem>
                  {(i === 2 || i === 5) && <Divider />}
                </div>
              ))}
            </StyledMenu>
          </Box>
        </Box>
      </HeaderContainer>
    </Header>
  );
};

export default HeaderBar;
