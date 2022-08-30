import * as React from "react";
import { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { StyledInputField, StyledSubmitButton } from "../../styles";
import { LoginUser } from "../../api";
import { useNavigate } from "react-router-dom";
import { AccountActive } from "../../App";
import {isDataValid} from "../../config"


export default function SignInForm() {

  const {activeAccount, setActiveAccount} = useContext(AccountActive);

  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
      dot: data.get("dot"),
    };

    if (!isDataValid(user)) {
      setError("Wrong Input Parametres");
      return;
    }

    const account = await LoginUser(user);

    if (typeof account === "string") {
      setError(account);
      return;
    }

   
    setActiveAccount(account)
    navigate("../pages/profile");

   
  };

  return (
    <Container component="main" maxWidth="xs">
     {error && <Typography>{error}</Typography>}

      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <StyledInputField
            margin="normal"
            required
            fullWidth
            id="dot"
            label="DOT"
            name="dot"
            autoComplete="dot"
            autoFocus
          />
          <StyledInputField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <StyledInputField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </StyledSubmitButton>
          <Grid container>
            <Grid item>
              <Link href="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
