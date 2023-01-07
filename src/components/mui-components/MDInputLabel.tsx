import { styled } from "@mui/material";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";

const MDInputLabel = styled((props: any) => (
  <InputLabel {...props} />
))<InputLabelProps>(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: ".875rem",
  color: theme.palette.neutral[600],
}));
export default MDInputLabel;
