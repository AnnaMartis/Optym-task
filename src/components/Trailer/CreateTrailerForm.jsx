import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { StyledInnerHeader } from "../../styles";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { AccountActive } from "../../App";
import Form from "../../defaultComponents/Form";
import { AddTrailer } from "../../api";

const CreateTrailerForm = () => {
  const [error, setError] = useState("");
  const { activeAccount, setActiveAccount } = useContext(AccountActive);
  const navigate = useNavigate();

  const [trailName, setTrailName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");

  const onNameChange = (e) => setTrailName(e.target.value);
  const onMakeChange = (e) => setMake(e.target.value);
  const onModelChange = (e) => setModel(e.target.value);
  const onVinChange = (e) => setVin(e.target.value);
  const onYearChange = (e) => setYear(e.target.value);

  const keys = ["name", "make", "model", "vin", "year"];
  const names = [trailName, make, model, vin, year];
  const handlers = [
    onNameChange,
    onMakeChange,
    onModelChange,
    onVinChange,
    onYearChange,
  ];
  const labels = ["Trailer Name", "Make", "Model", "Vin", "Year"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const trailer = {
      name: data.get("name"),
      make: data.get("make"),
      vin: data.get("vin"),
      model: data.get("model"),
      year: data.get("year"),
      status: "AVAILABLE",
      dot: activeAccount.account.dot,
      organizationId: activeAccount.account.organizationId,
    };

    const result = await AddTrailer(trailer);

    if (typeof result === "string") {
      setError(result);
      return;
    }

    navigate("/pages/trailers/trailers");
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
          <StyledInnerHeader>Add Trailer</StyledInnerHeader>
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

export default CreateTrailerForm;
