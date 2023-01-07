import { map } from "lodash";
import React from "react";
// Mui
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
// Custom
import Image from "../../utility/Image";

const RegistrationSteps = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box p={2} className="register-steps">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Image src="./assets/images/logo/logo.svg" alt="Brand Logo" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" fontWeight={600}>
            In wenigen Schritten Patienten online empfangen
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              aria-labelledby="steps-radio-buttons-group"
              name="steps-radio-buttons-group"
              value={value}
              onChange={handleChange}
              className="gap-3"
            >
              {map(StepsData, (item, index) => (
                <FormControlLabel
                  key={index}
                  value={item?.value}
                  control={<Radio color="primary" />}
                  label={item?.label}
                  sx={{ alignItems: "flex-start" }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationSteps;

const StepsData = [
  { label: "Konto erstellen", value: "1" },
  { label: "Profil ausfüllen", value: "2" },
  { label: "Verfügbarkeit festlegen", value: "3" },
  { label: "Bankverbindung angeben", value: "4" },
  { label: "Nutzungsbedingungen akzeptieren", value: "5" },
  { label: "Patienten online empfangen", value: "6" },
];
