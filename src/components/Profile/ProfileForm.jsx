import React, { useState } from "react";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { StyledInnerHeader, StyledInputField, StyledSubmitButton } from "../../styles";
import Typography from "@mui/material/Typography";

export const ProfileForm = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [zoomValue, setZoomValue] = useState("");


  const onChangePhone = (e) => setPhoneValue(e.target.value);
  const onChangeZoom = (e) => setZoomValue(e.target.value);

  // const handleSubmit = () => console.log(textValue);

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
          <StyledInnerHeader >Profile</StyledInnerHeader>
          <Typography variant="p" sx={{ fontSize: 16, mb: 3 }}>
            Organization:{" "}
          </Typography>
          <Typography variant="p" sx={{ fontSize: 16, mb: 3 }}>
            Account Type:{" "}
          </Typography>
          <Typography variant="p" sx={{ fontSize: 16, mb: 3 }}>
            Email:{" "}
          </Typography>

          <StyledInputField
            onChange={onChangePhone}
            value={phoneValue}
            label={"Phone"}
          />

          <StyledInputField
            onChange={onChangeZoom}
            value={zoomValue}
            label={"Zoom"}
          
          />

          <StyledSubmitButton size="large" variant="contained">Submit</StyledSubmitButton>
        </Container>
      </Paper>
    </Box>
  );
};
