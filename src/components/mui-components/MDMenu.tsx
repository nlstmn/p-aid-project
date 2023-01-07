// Mui
import Menu, { MenuProps } from "@mui/material/Menu";
import { styled } from "@mui/material/styles";

const MDMenu = styled((props: any) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))<MenuProps>(() => ({
  "& .MuiPaper-root": {
    boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
  },
}));

export default MDMenu;
