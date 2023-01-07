import React from "react";
// Mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RegistrationSteps from "../components/pages/registration/RegistrationSteps";
import RegistrationForm from "../components/pages/registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Box className="register-container">
      <Toolbar sx={{ justifyContent: "space-between"  }} className="register-header">
        <Button
          sx={{ color: "#4B5768", textTransform: "capitalize" }}
          className="font-inter"
          startIcon={<ArrowBackIosNewRoundedIcon />}
        >
          Zurück
        </Button>
        <Button
          sx={{ color: "#4B5768", textTransform: "capitalize" }}
          className="font-inter"
          endIcon={<CloseRoundedIcon />}
        >
          Abbrechen
        </Button>
      </Toolbar>
      <Container maxWidth="md" className="mt-3">
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={4} xs={12}>
            <RegistrationSteps />
          </Grid>
          <Grid item md={6} xs={12}>
            <RegistrationForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RegistrationPage;
