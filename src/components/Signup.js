import * as React from "react";
import Avatar from "@mui/material/Avatar";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { labelStyle, inputStyle } from "../utils/helperData";

import { Form, NavLink, useActionData } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ZERO DAY DETECTION
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const data = useActionData();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Form method="post">
            {/* {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )} */}
            {/* {data && data.message && <p>{data.message}</p>} */}
            <Box>
              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                placeholder="Username"
                name="username"
                autoComplete="username"
                InputLabelProps={{
                  shrink: true,
                  sx: labelStyle,
                }}
                InputProps={{
                  sx: {
                    ...inputStyle,
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #fff inset",
                      WebkitTextFillColor: "inherit",
                    },
                  },
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                  shrink: true,
                  sx: labelStyle,
                }}
                InputProps={{
                  sx: {
                    ...inputStyle,
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #fff inset",
                      WebkitTextFillColor: "inherit",
                    },
                  },
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="phone"
                label="Phone"
                placeholder="Phone"
                name="phone"
                autoComplete="phone"
                InputLabelProps={{
                  shrink: true,
                  sx: labelStyle,
                }}
                InputProps={{
                  sx: {
                    ...inputStyle,
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #fff inset",
                      WebkitTextFillColor: "inherit",
                    },
                  },
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  shrink: true,
                  sx: labelStyle,
                }}
                InputProps={{
                  sx: {
                    ...inputStyle,
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #fff inset",
                      WebkitTextFillColor: "inherit",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                InputLabelProps={{
                  shrink: true,
                  sx: labelStyle,
                }}
                InputProps={{
                  sx: {
                    ...inputStyle,
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #fff inset",
                      WebkitTextFillColor: "inherit",
                    },
                  },
                }}
              />
              <FormControlLabel
                sx={{ fontFamily: "Poppins" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Grid item xssx={{ width: "215px" }}>
                  <Grid item>
                    <NavLink to="/" className="underline text-[#1976d2]">
                      Already have an account? Sign In
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
