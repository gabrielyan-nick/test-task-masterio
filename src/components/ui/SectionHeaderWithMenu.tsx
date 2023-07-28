import React, { useState } from "react";
import { ActionsMenu, ContentHeader } from "./sharedStyledComponents";
import { Divider, IconButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ISectionHeaderWithMenuProps {
  title: string;
}

const SectionHeaderWithMenu = ({ title }: ISectionHeaderWithMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <ContentHeader
      title={title}
      action={
        <>
          <IconButton
            id={`${title}-btn`}
            aria-label="more-btn"
            aria-controls={open ? `${title}-menu` : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleOpenMenu}
          >
            <MoreVertIcon color="disabled" />
          </IconButton>

          <ActionsMenu
            id={`${title}-menu`}
            anchorEl={anchorEl}
            MenuListProps={{
              "aria-labelledby": `${title}-btn`,
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleCloseMenu}
            disablePortal={true}
          >
            <MenuItem onClick={handleCloseMenu}>
              Share {title.toLowerCase()}
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>Suggest edits</MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseMenu}>Report bug</MenuItem>
          </ActionsMenu>
        </>
      }
    />
  );
};

export default SectionHeaderWithMenu;
