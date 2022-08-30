import React from "react";
import { Stack } from "@mui/system";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import CreateTrailerForm from "../../components/Trailer/CreateTrailerForm";

const CreateTrailer = () => {
  return (
    <Box className="ProfilePage">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <CreateTrailerForm />
      </Stack>
    </Box>
  );
};

export default CreateTrailer;
