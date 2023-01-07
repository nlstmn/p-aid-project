// ----------------------------------------------------------------------

export default function Checkbox(theme: any) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0.5),
          color: theme.palette.neutral[400],
          "& + .MuiFormControlLabel-label": {
            color: theme.palette.neutral[600],
            fontSize: 14,
            fontWeight: 500,
            paddingTop: theme.spacing(0.5),
          },
          "&.Mui-checked": {
            "& + .MuiFormControlLabel-label": {
              color: theme.palette.neutral[700],
            },
          },
        },
      },
    },
  };
}
