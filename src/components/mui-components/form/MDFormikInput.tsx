// Mui
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";

interface FormikFieldProps {
  field: { [key: string]: string };
  form: {
    touched: { [key: string]: string };
    errors: { [key: string]: string };
  };
  props: object;
}

const MDFormikInput = ({
  field,
  form: { touched, errors },
  ...props
}: FormikFieldProps) => (
  <Box>
    <OutlinedInput
      {...field}
      {...props}
      fullWidth={true}
      error={touched[field.name] && errors[field.name] ? true : false}
    />
    {touched[field.name] && errors[field.name] ? (
      <FormHelperText error className="pl-2">
        {errors[field.name]}
      </FormHelperText>
    ) : null}
  </Box>
);

export default MDFormikInput;
