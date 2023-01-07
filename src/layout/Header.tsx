// Mui
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LanguagePopover from "../components/utility/LanguagePopover";
import { useGetFact, Response } from "../hooks/useGetFact";

interface Props {}

const Header = (props: Props) => {
  const factData: Response = useGetFact();
  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 1px 0px #E2E8F0;",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between",gap:"10px" }}>
        <Box
          component="img"
          src="./assets/images/logo/logo.svg"
          alt="dr_petaid"
          width={133}
        />
        <Typography variant="body2" sx={{
          color: "textColor.normal",
          textAlign:"center"
        }}>{factData.status && factData.data}</Typography>
        <LanguagePopover />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
