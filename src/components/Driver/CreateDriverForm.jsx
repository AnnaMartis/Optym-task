import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  StyledInnerHeader,
  StyledInputField,
  StyledSubmitButton,
} from "../../styles";

import { Paper } from "@mui/material";
import Container from "@mui/material/Container";


const CreateDriverForm = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
  
  
    const onNameChange = (e) => setName(e.target.value);
    const onMailChange = (e) => setMail(e.target.value);
    const onPhoneChange = (e) => setPhone(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);




  return (
    <Box flex={4} p={1}>
      <Paper sx={{ minHeight: "80vh" }}>
        <Container
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <StyledInnerHeader>Add Driver</StyledInnerHeader>

          <StyledInputField
            onChange={onNameChange}
            value={name}
            label={"Driver Name"}
          />

          <StyledInputField
            onChange={onMailChange}
            value={mail}
            label={"E-mail"}
          />

          <StyledInputField
            onChange={onPhoneChange}
            value={phone}
            label={"Phone"}
          />

          <StyledInputField
            onChange={onPasswordChange}
            value={password}
            label={"Password"}
          />

          <StyledSubmitButton size="large" variant="contained">Create</StyledSubmitButton>
        </Container>
      </Paper>
    </Box>
  );
};

export default CreateDriverForm;
