import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  StyledInnerHeader,
  StyledInputField,
  StyledSubmitButton,
} from "../../styles";

import { Paper } from "@mui/material";
import Container from "@mui/material/Container";

const CreateTractorForm = () => {
  const [tracName, setTracName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");


  const onNameChange = (e) => setTracName(e.target.value);
  const onMakeChange = (e) => setMake(e.target.value);
  const onModelChange = (e) => setModel(e.target.value);
  const onVinChange = (e) => setVin(e.target.value);
  const onYearChange = (e) => setYear(e.target.value);

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
          <StyledInnerHeader>Add Tractor</StyledInnerHeader>

          <StyledInputField
            onChange={onNameChange}
            value={tracName}
            label={"Tractor Name"}
          />

          <StyledInputField
            onChange={onMakeChange}
            value={make}
            label={"Make"}
          />

          <StyledInputField
            onChange={onModelChange}
            value={model}
            label={"Model"}
          />

          <StyledInputField
            onChange={onVinChange}
            value={vin}
            label={"Vin"}
          />

          <StyledInputField
            onChange={onYearChange}
            value={year}
            label={"Year"}
          />

          <StyledSubmitButton size="large" variant="contained">
            Create
          </StyledSubmitButton>
        </Container>
      </Paper>
    </Box>
  );
};

export default CreateTractorForm;
