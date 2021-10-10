import React from "react";
import {
  alpha,
  Box,
  OutlinedInputProps,
  styled,
  TextField,
  TextFieldProps,
} from "@material-ui/core";

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function FreightSendInput() {
  return (
    <Box
      component="form"
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
      }}
    >
      <RedditTextField
        label="Reddit"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
      />
    </Box>
  );
}
