import { Stack } from "@mui/system";
import * as React from "react";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import EditTractor from "../../components/Other/EditTractor";

const UpdateTractor = () => {
  return (
    <Box className="ProfilePage">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <EditTractor />
      </Stack>
    </Box>
  );
};

export default UpdateTractor;
