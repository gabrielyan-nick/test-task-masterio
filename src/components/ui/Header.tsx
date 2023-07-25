"use client";

import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
  styled,
  useMediaQuery,
  MenuProps,
  AppBarProps,
  LinkProps,
  IconButtonProps,
} from "@mui/material";
import React, { useState } from "react";
import { LogoIcon } from "../icons";
import {
  Search,
  Translate,
  DarkMode,
  LightMode,
  GridView,
  NotificationsNone,
  PersonOutline,
  MailOutline,
  ChatBubbleOutline,
  SettingsOutlined,
  AttachMoneyOutlined,
  HelpOutlineOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { useAppSelector } from "@/hooks/redux-hooks";
import { useActions } from "@/hooks/useActions";
import { FlexBox, Text600, Wrapper } from "./microComponents";
import AvatarWithBadge from "./Avatar";

const HeaderContainer = styled(Wrapper)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1.5rem",
});

const Header = styled(AppBar)<AppBarProps>(({ theme }) => ({
  minHeight: "64px",
  boxShadow: "rgba(19, 17, 32, 0.42) 0px 4px 8px -4px",
  zIndex: 10,
  backgroundColor: theme.palette.primary.light,
  backdropFilter: "blur(8px)",
  justifyContent: "center",
}));

const LogoLink = styled(Link)<LinkProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary,
  gap: "0.75rem",
}));

const IconBtn = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  height: "40px",
}));

const StyledMenu = styled(Menu)<MenuProps>(({ theme }) => ({
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
  { icon: <PersonOutline />, label: "Profile" },
  { icon: <MailOutline />, label: "Inbox" },
  { icon: <ChatBubbleOutline />, label: "Chat" },
  { icon: <SettingsOutlined />, label: "Settings" },
  { icon: <AttachMoneyOutlined />, label: "Pricing" },
  { icon: <HelpOutlineOutlined />, label: "FAQ" },
  { icon: <LogoutOutlined />, label: "Logout" },
];

const HeaderBar = () => {
  const mode = useAppSelector((s) => s.theme.mode);
  const { setMode } = useActions();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const matches = useMediaQuery("(min-width:500px)");

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
          {matches && (
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, textTransform: "uppercase" }}
            >
              Materio
            </Typography>
          )}
        </LogoLink>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconBtn>
            <Search />
          </IconBtn>
          <IconBtn>
            <Translate />
          </IconBtn>
          <IconBtn onClick={() => setMode()}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconBtn>
          <IconBtn>
            <GridView />
          </IconBtn>
          <IconBtn>
            <NotificationsNone />
          </IconBtn>

          <Box sx={{ marginLeft: "0.5rem" }}>
            <AvatarWithBadge handleClick={handleOpenMenu} />
            <StyledMenu
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
              <FlexBox sx={{ padding: "0.5rem 1rem 0.5rem" }}>
                <AvatarWithBadge />

                <Box sx={{ marginLeft: "0.75rem" }}>
                  <Text600>John Doe</Text600>
                  <Typography
                    sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                  >
                    Admin
                  </Typography>
                </Box>
              </FlexBox>
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
