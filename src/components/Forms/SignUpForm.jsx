import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { StyledInputField, StyledSubmitButton } from "../../styles";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../api";
import { isDataValid } from "../../config";

export default function SignUpForm() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isDataValidAdd = (data, user) => {
    const password = data.get("password");
    const confirm = data.get("confirm");

    if (password !== confirm) {
      return;
    }

    return isDataValid(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      dot: data.get("dot"),
      organizationName: data.get("org"),
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
    };

    if (!isDataValidAdd(data, user)) {
      setError("Wrong Input Parametres");
      return;
    }

    const result = await RegisterUser(user);

    if (typeof result === "string") {
      setError(result);
      return;
    }

    navigate("../signin");
  };

  return (
    <Container component="main" maxWidth="xs">
      {error && <Typography>{error}</Typography>}

      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledInputField
                autoComplete="dot"
                name="dot"
                required
                fullWidth
                id="dot"
                label="DOT"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <StyledInputField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Your Name"
              />
            </Grid>

            <Grid item xs={12}>
              <StyledInputField
                autoComplete="org-name"
                name="org"
                required
                fullWidth
                id="org"
                label="Organization Name"
              />
            </Grid>

            <Grid item xs={12}>
              <StyledInputField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledInputField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <StyledInputField
                required
                fullWidth
                name="confirm"
                label="Confirm"
                type="password"
                id="confirm"
                autoComplete="confirm-password"
              />
            </Grid>
          </Grid>
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </StyledSubmitButton>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link href="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
