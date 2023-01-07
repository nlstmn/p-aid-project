import React from "react";
// Mui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
// Custom
import Image from "../../utility/Image";

const RegistrationSteps = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Image src="./assets/images/logo/logo.svg" alt="Brand Logo" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" fontWeight={600}>
                        In wenigen Schritten Patienten online empfangen
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>
                        <ListItem disableGutters sx={{ color: "#A5A2AC" }}>
                            <ListItemIcon sx={{ minWidth: "32px", color: "#A5A2AC" }}>
                                <RadioButtonUncheckedRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Konto erstellen" />
                        </ListItem>
                        <ListItem disableGutters sx={{ color: "#A5A2AC" }}>
                            <ListItemIcon sx={{ minWidth: "32px", color: "#A5A2AC" }}>
                                <RadioButtonUncheckedRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profil ausfüllen" />
                        </ListItem>
                        <ListItem disableGutters sx={{ color: "#A5A2AC" }}>
                            <ListItemIcon sx={{ minWidth: "32px", color: "#A5A2AC" }}>
                                <RadioButtonUncheckedRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Verfügbarkeit festlegen" />
                        </ListItem>
                        <ListItem disableGutters sx={{ color: "#A5A2AC" }}>
                            <ListItemIcon sx={{ minWidth: "32px", color: "#A5A2AC" }}>
                                <RadioButtonUncheckedRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bankverbindung angeben" />
                        </ListItem>
                        <ListItem disableGutters sx={{ color: "#A5A2AC" }}>
                            <ListItemIcon sx={{ minWidth: "32px", color: "#A5A2AC" }}>
                                <RadioButtonUncheckedRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Nutzungsbedingungen akzeptieren" />
                        </ListItem>
                        <ListItem disableGutters sx={{ color: "#A5A2AC" }}>
                            <ListItemIcon sx={{ minWidth: "32px", color: "#A5A2AC" }}>
                                <RadioButtonUncheckedRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Patienten online empfangen" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RegistrationSteps;
