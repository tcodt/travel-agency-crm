import { createTheme } from "@mui/material";
import "../fonts.css";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "customFont, Roboto",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Equivalent to rounded-xl
          transition: "all 0.2s ease-in-out",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#38bdf8", // Tailwind sky-500
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#38bdf8", // Focused state
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
