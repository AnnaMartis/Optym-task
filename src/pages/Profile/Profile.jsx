import { Stack } from "@mui/system";
import * as React from "react";
import Sidebar from "../../components/Bars/Sidebar";
import Navbar from "../../components/Bars/Navbar";
import { Box } from "@mui/material";
import { ProfileForm } from "../../components/Profile/ProfileForm";

const Profile = () => {
  return (
    <div>
      <Box className="ProfilePage">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <ProfileForm />
        </Stack>
      </Box>
    </div>
  );
};

export default Profile;
