import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// Mui
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
// Custom
import MDCard from "../../mui-components/MDCard";
import MDInputLabel from "../../mui-components/MDInputLabel";
import MDFormikInput from "../../mui-components/form/MDFormikInput";

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  termsAndConditions: boolean;
}

const RegistrationForm = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be minimum 6 character")
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Confirm Password not match")
      .required("Confirm password is required"),
  });

  return (
    <MDCard>
      <CardContent sx={{ p: 3 }}>
        <Box mb={3}>
          <Typography
            variant="subtitle2"
            component="p"
            color="neutral.700"
            fontWeight={600}
            textTransform="capitalize"
          >
            REGISTRIERUNG
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography
            variant="h5"
            color="primary.main"
            fontWeight={700}
            className="font-comfortaa"
          >
            Wähle deine Zugangsdaten
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("FORM_VALUES :>", values);
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MDInputLabel htmlFor="email" className="mb-1">
                  E-Mail Adresse
                </MDInputLabel>
                <Field id="email" name="email" component={MDFormikInput} />
              </Grid>
              <Grid item xs={12}>
                <MDInputLabel htmlFor="password" className="mb-1">
                  Passwort
                </MDInputLabel>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  component={MDFormikInput}
                />
              </Grid>
              <Grid item xs={12}>
                <MDInputLabel htmlFor="passwordConfirm" className="mb-1">
                  Passwort wiederholen
                </MDInputLabel>
                <Field
                  id="passwordConfirm"
                  type="password"
                  name="passwordConfirm"
                  component={MDFormikInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Field id="termsAndConditions" name="termsAndConditions">
                  {({ field: { name, handleBlur, value }, form }: any) => {
                    return (
                      <FormControlLabel
                        name={name}
                        onBlur={handleBlur}
                        onChange={(event: any) => {
                          form.setFieldValue(name, event.target.checked);
                        }}
                        value={value}
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankRoundedIcon />}
                            checkedIcon={<CheckBoxRoundedIcon />}
                          />
                        }
                        label="Ich habe die AGB und Datenschutzerklärung gelesen und stimme ausdrücklich zu."
                        className="align-items-start"
                        sx={{ marginLeft: "-8px" }}
                      />
                    );
                  }}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  className="text-capitalize"
                >
                  Registrieren
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        <Box mt={1.5} textAlign="center">
          <Typography variant="subtitle2" fontWeight={600}>
            Du hast bereits ein Konto?{" "}
            <Link href="#" underline="hover">
              Melde dich an
            </Link>
            .
          </Typography>
        </Box>
      </CardContent>
    </MDCard>
  );
};

export default RegistrationForm;
