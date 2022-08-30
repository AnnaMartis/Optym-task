import { styled } from "@mui/system";
import { Button, TextField } from "@mui/material";

export const StyledInnerHeader = styled("h2")({
  fontSize: 25,
  display: "inline-block",
  fontWeight: "bold",
  marginBottom: 50,
  marginTop: 10,
});

export const StyledInputField = styled(TextField)({
  width: 400,
  height: 30,
  marginBottom: 35,
  marginRight : 20
});

export const StyledSubmitButton = styled(Button)({
  width: 400,
  marginBottom: 20,
  fontSize: 17,
});
