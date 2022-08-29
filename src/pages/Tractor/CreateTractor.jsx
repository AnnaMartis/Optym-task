import React from "react";
import { Stack } from "@mui/system";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import CreateTractorForm from "../../components/Tractor/CreateTractorForm"

const CreateTractor = () => {
  return (
    <Box className="ProfilePage">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <CreateTractorForm />
      </Stack>
    </Box>
  );
};

export default CreateTractor;
