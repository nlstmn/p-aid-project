import * as React from "react";
// MUI
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// Custom
import MDMenu from "../mui-components/MDMenu";

const LanguagePopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        sx={{
          color: "textColor.normal",
        }}
      >
        En
      </Button>
      <MDMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>French</MenuItem>
        <MenuItem onClick={handleClose}>German</MenuItem>
      </MDMenu>
    </div>
  );
};
export default LanguagePopover;
