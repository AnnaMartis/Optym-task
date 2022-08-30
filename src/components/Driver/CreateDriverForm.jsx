import React, { useState, useContext } from "react";

import { StyledInnerHeader } from "../../styles";

import { Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { isDataValid } from "../../config";
import { AccountActive } from "../../App";
import { AddDriver } from "../../api";
import { useNavigate } from "react-router-dom";
import Form from "../../defaultComponents/Form";
import Box from "@mui/material/Box";
import { StyledInputField, StyledSubmitButton } from "../../styles";

const CreateDriverForm = () => {
  const [error, setError] = useState("");
  const { activeAccount, setActiveAccount } = useContext(AccountActive);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onMailChange = (e) => setMail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const names = [name, mail, phone, password];
  const keys = ["name", "mail", "phone", "password"];
  const handlers = [
    onNameChange,
    onMailChange,
    onPhoneChange,
    onPasswordChange,
  ];
  const labels = ["Driver Name", "E-mail", "Phone", "Password"];

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);

    const driver = {
      email: data.get("mail"),
      password: data.get("password"),
      phone: data.get("phone"),
      name: data.get("name"),
      dot: activeAccount.account.dot,
      organizationId: activeAccount.account.organizationId,
    };

    if (!isDataValid(driver)) {
      return;
    }

    const result = await AddDriver(driver);

    if (typeof result === "string") {
      setError(result);
      return;
    }

    navigate("/pages/drivers/drivers");
  };

  return (
    <Box flex={4} p={1}>
      {error && <Typography>{error}</Typography>}
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

          <Form
            names={names}
            handlers={handlers}
            labels={labels}
            handleSubmit={handleSubmit}
            keys={keys}
          />
        </Container>
      </Paper>
    </Box>
  );
};

export default CreateDriverForm;
