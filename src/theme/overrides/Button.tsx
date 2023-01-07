// ----------------------------------------------------------------------

export default function Button(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1.25) + " " + theme.spacing(2.75),
        },
      },
    },
  };
}
