// ----------------------------------------------------------------------

export default function Radio(theme: any) {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0.25) + " " + theme.spacing(1),
          color: theme.palette.neutral[400],
          "& + .MuiFormControlLabel-label": {
            color: theme.palette.neutral[400],
          },
          "&.Mui-checked": {
            color: theme.palette.neutral[400],
            "& + .MuiFormControlLabel-label": {
              color: theme.palette.neutral[400],
              fontWeight:600
            },
          },
        },
      },
    },
  };
}
