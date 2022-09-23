import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

interface inputType {
  name: string;
  placeholder: string;
  value?: string;
  onChange?: any
}

export const Input = forwardRef((props: inputType, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      type="text"
      
      {...props}
    ></TextField>
  );
});
