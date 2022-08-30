import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { StyledInnerHeader } from "../../styles";
import { Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Form from "../../defaultComponents/Form";
import { useNavigate } from "react-router-dom";
import { AccountActive } from "../../App";
import { UpdateTractor } from "../../api";
import { useSearchParams } from "react-router-dom";
import { GetTractorDetails } from "../../api";

const EditTractor = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");
  const { activeAccount, setActiveAccount } = useContext(AccountActive);
  const navigate = useNavigate();

  const [tracName, setTracName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");

  const onNameChange = (e) => setTracName(e.target.value);
  const onMakeChange = (e) => setMake(e.target.value);
  const onModelChange = (e) => setModel(e.target.value);
  const onVinChange = (e) => setVin(e.target.value);
  const onYearChange = (e) => setYear(e.target.value);
  const onStatusChange = (e) => setStatus(e.target.value);

  const keys = ["name", "make", "model", "vin", "year", "status"];
  const names = [tracName, make, model, vin, year, status];
  const handlers = [
    onNameChange,
    onMakeChange,
    onModelChange,
    onVinChange,
    onYearChange,
    onStatusChange,
  ];
  const labels = ["Tractor Name", "Make", "Model", "Vin", "Year ", "Status"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const tractor = {
      name: data.get("name"),
      make: data.get("make"),
      model: data.get("model"),
      year: data.get("year"),
      status: "AVAILABLE",
      vin: data.get("vin"),
      dot: activeAccount.account.dot,
      organizationId: activeAccount.account.organizationId,
    };

    if (tractor.status !== "AVAILABLE") {
      return;
    }

    const result = await UpdateTractor(tractor);

    if (typeof result === "string") {
      setError(result);
      return;
    }
    navigate("../tractors");
  };
  const tractorId = searchParams.get("tractorId");

  useEffect(() => {
    GetTractorDetails(tractorId).then((result) => {
      setTracName(result.name);
      setMake(result.make);
      setModel(result.model);
      setYear(result.year);
      setStatus(result.status);
      setVin(result.vin);
    });
  }, []);

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
          <StyledInnerHeader>Edit Tractor</StyledInnerHeader>

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

export default EditTractor;
