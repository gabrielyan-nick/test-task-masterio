import {
  Divider,
  IconButton,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { ActionsMenu } from "../microComponents";

const ActionsCell = ({ id }: { id: number }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id={`${id}-btn`}
        aria-label="more-btn"
        aria-controls={open ? `${id}-menu` : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <MoreVertIcon color="disabled" />
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
      >
        <MenuItem onClick={handleCloseMenu}>Details</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Archive</MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseMenu}  sx={{ color: "error.main" }}>
          Delete
        </MenuItem>
      </ActionsMenu>
    </>
  );
};

export default ActionsCell;
