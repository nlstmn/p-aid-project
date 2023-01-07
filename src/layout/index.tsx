import * as React from "react";
// Mui 
import Box from "@mui/material/Box";
import Header from "./Header";
import RegistrationPage from "../pages/RegistrationPage";

const Layout = () => {
  return (
    <Box className="root-container">
      <Header />
      <Box component="main" className="main-container">
        <RegistrationPage />
      </Box>
    </Box>
  );
};

export default Layout;
