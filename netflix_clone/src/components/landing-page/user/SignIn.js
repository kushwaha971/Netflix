import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LoginAppBar from "../NavBar/LoginAppBar";
import SignInStyle from "./SignInStyle";

const SignIn = () => {
  return (
    <SignInStyle>
      <Box className="backgroundImg">
        <LoginAppBar />
        <Box className="container">
          <Typography variant="h1" className="signStyle">
            Sign In
          </Typography>
          <Box className="textFieldStyle">
            <TextField
              fullWidth
              id="filled-basic"
              label="Email or phone number"
              variant="filled"
              className="inputStyled"
            />
            <TextField
              fullWidth
              type="password"
              id="filled-basic"
              label="Password"
              variant="filled"
              className="inputStyled"
            />
            <Button fullWidth variant="contained" className="signButtonStyle">
              Sign In
            </Button>
            <Box className="container1">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    color="default"
                    sx={{ color: "white", marginTop: "-10px" }}
                  />
                }
                label={
                  <Typography variant="subtitle1" className="remberStyle">
                    Rember me
                  </Typography>
                }
              />
              <Typography className="helpStyle">Need help?</Typography>
            </Box>
            <Box>
              <Typography className="newStyle">
                New to Netflix?{" "}
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    color: "#f5f5f5",
                  }}
                >
                  Sign up now.
                </a>
              </Typography>
              <Typography variant="h5" className="learnMoreStyle">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="#" style={{ textDecoration: "none" }}>
                  Learn more.
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
       
        <Box className="signFooterStyle">
        <Box className="borderStyle"></Box>
          <Typography variant="subtitle1" className="contactStyle">
            Questions? Call{" "}
            <a
              href="https://help.netflix.com/en/node/412"
              style={{ textDecoration: "none", color: "#616161" }}
            >
              000-800-040-1843
            </a>
          </Typography>
          
          <Box className="footerContainer">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <ul>
                  <li className="listStyle">
                    <a
                      href="https://help.netflix.com/en/node/412"
                      style={{ textDecoration: "none", color: "#616161" }}
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="listStyle">
                    <a
                      href="https://help.netflix.com/en/node/412"
                      style={{ textDecoration: "none", color: "#616161" }}
                    >
                      Cookie Preferences
                    </a>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={6} sm={3}>
                <ul>
                  <li className="listStyle">
                    <a
                      href="https://help.netflix.com/en/node/412"
                      style={{ textDecoration: "none", color: "#616161" }}
                    >
                      Help Centre
                    </a>
                  </li>
                  <li className="listStyle">
                    <a
                      href="https://help.netflix.com/en/node/412"
                      style={{ textDecoration: "none", color: "#616161" }}
                    >
                      Corporate Information
                    </a>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={6} sm={3}>
                <ul>
                  <li className="listStyle">
                    <a
                      href="https://help.netflix.com/en/node/412"
                      style={{ textDecoration: "none", color: "#616161" }}
                    >
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={6} sm={3}>
                <ul>
                  <li className="listStyle">
                    <a
                      href="https://help.netflix.com/en/node/412"
                      style={{ textDecoration: "none", color: "#616161" }}
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </SignInStyle>
  );
};

export default SignIn;
