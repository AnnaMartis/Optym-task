import { Stack } from "@mui/system";
import * as React from "react";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import TrailersList from "../../components/Trailer/TrailersList";

const Trailers = () => {
  return (
    <Box className="Trailers">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <TrailersList />
      </Stack>
    </Box>
  );
};

export default Trailers;
