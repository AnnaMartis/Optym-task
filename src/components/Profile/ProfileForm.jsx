import React, { useState, useContext } from "react";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  StyledInnerHeader,
  StyledInputField,
  StyledSubmitButton,
} from "../../styles";
import Typography from "@mui/material/Typography";
import { AccountActive } from "../../App";
import { UpdateUser } from "../../api";

export const ProfileForm = () => {
  const { activeAccount, setActiveAccount } = useContext(AccountActive);

  const [error, setError] = useState("");

  const [phoneValue, setPhoneValue] = useState("");
  const [zoomValue, setZoomValue] = useState("");

  const [submitDone, setSubmitDone] = useState(false);

  const onChangePhone = (e) => setPhoneValue(e.target.value);
  const onChangeZoom = (e) => setZoomValue(e.target.value);

  const names = [phoneValue, zoomValue];
  const handlers = [onChangePhone, onChangeZoom];
  const labels = ["Phone", "E-mail", "Phone", "Password"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      phone: data.get("phone"),
      zoom: data.get("zoom"),
      id: activeAccount.account.id,
    };

    const result = await UpdateUser(user);

    if (typeof result === "string") {
      setError(result);
      return;
    }

    setSubmitDone(true);
    setPhoneValue("");
    setZoomValue("");
  };

  return (
    <Box flex={4} p={1}>
      {error && <Typography>{error}</Typography>}
      {submitDone && <Typography>Changes Have Been Made</Typography>}
      <Paper sx={{ minHeight: "80vh" }}>
        <Container
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <StyledInnerHeader>Profile</StyledInnerHeader>
          <Typography variant="p" sx={{ fontSize: 16, mb: 3 }}>
            Organization: {activeAccount.account.organizationName}
          </Typography>
          <Typography variant="p" sx={{ fontSize: 16, mb: 3 }}>
            Account Type: {activeAccount.account.accountType}
          </Typography>
          <Typography variant="p" sx={{ fontSize: 16, mb: 3 }}>
            Email: {activeAccount.account.email}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <StyledInputField
              margin="normal"
              required
              fullWidth
              name="zoom"
              label="Zoom"
              id="zoom"
              autoComplete="zoom"
              onChange={onChangeZoom}
              value={zoomValue}
            />
            <StyledInputField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              id="phone"
              autoComplete="phone"
              onChange={onChangePhone}
              value={phoneValue}
            />
            <StyledSubmitButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </StyledSubmitButton>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};
