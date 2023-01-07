// ----------------------------------------------------------------------

export default function Input(theme: any) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.1)`,
          "& .MuiOutlinedInput-input": {
            height: "16px",
            padding: "14px 14px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EFEFEF",
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  };
}
