import React, { useState } from "react";
import { ActionsMenu, FlexBox } from "../sharedStyledComponents";
import { IconButton, MenuItem } from "@mui/material";
import {
  DeleteOutlineOutlined,
  RemoveRedEyeOutlined,
  MoreVertOutlined,
  Download,
  EditOutlined,
  ContentCopyOutlined,
} from "@mui/icons-material";

const ActionsCell = ({ id }: { id: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <FlexBox>
      <IconButton size="small">
        <DeleteOutlineOutlined fontSize="small" color="disabled" />
      </IconButton>
      <IconButton size="small">
        <RemoveRedEyeOutlined fontSize="small" color="disabled" />
      </IconButton>
      <IconButton
        id={`${id}-btn`}
        aria-label="more-btn"
        aria-controls={open ? `${id}-menu` : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleOpenMenu}
        size="small"
      >
        <MoreVertOutlined color="disabled" fontSize="small" />
      </IconButton>

      <ActionsMenu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": `${id}-btn`,
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
        sx={{ "& .MuiMenuItem-root svg": { marginRight: "0.5rem" } }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Download fontSize="small" />
          Download
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <EditOutlined fontSize="small" />
          Edit
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <ContentCopyOutlined fontSize="small" />
          Duplicate
        </MenuItem>
      </ActionsMenu>
    </FlexBox>
  );
};

export default ActionsCell;
