import React from "react";
import Box from "@mui/material/Box";
import { StyledInputField, StyledSubmitButton } from "../styles";

const Form = ({ names, handlers, labels, handleSubmit, keys }) => {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {names.map((name, ind) => (
        <StyledInputField
          margin="normal"
          fullWidth
          name={keys[ind]}
          label={labels[ind]}
          id={keys[ind]}
          autoComplete={name}
          onChange={handlers[ind]}
          value={name}
          key={ind}
        />
      ))}

      <StyledSubmitButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        SUBMIT
      </StyledSubmitButton>
    </Box>
  );
};

export default Form;
