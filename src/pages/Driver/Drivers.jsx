import { Stack } from "@mui/system";
import * as React from "react";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import DriversList from "../../components/Driver/DriversList"

const Drivers = () => {
    return (
        
        <Box className="Load">
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <DriversList />
          </Stack>
        </Box>
      
    );
};

export default Drivers;