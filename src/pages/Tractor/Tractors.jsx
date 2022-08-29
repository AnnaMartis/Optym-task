import { Stack } from "@mui/system";
import * as React from "react";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import TractorsList from "../../components/Tractor/TractorsList";

const Tractors = () => {
    return (
        <Box className="Tractors">
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <TractorsList />
          </Stack>
        </Box>
    );
};

export default Tractors;