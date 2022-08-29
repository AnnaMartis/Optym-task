import { Stack } from "@mui/system";
import * as React from "react";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import LoadForm from "../../components/Load/LoadForm";

const Load = () => {
  return (
    
      <Box className="Load">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <LoadForm />
        </Stack>
      </Box>
   
  );
};

export default Load;
