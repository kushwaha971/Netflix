import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Appbar from "../NavBar/Appbar";
import Landing1Style from "./Landing1Style";
import Varification from "./Varification";

function Landing1() {
  return (
    <Landing1Style>
      <Paper className="backgroundImg" elevation={15}>
        <Appbar />
        <Box className="container" align="center">
          <Typography variant="h1" align="center" className="headningStyle">
            Unlimited movies, TV shows and more.
          </Typography>
          <Typography variant="h5" align="center" className="subHeadingStyle">
            Watch anywhere. Cancel anytime.
          </Typography>
          <Box>
            <Varification />
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{ width: "100%", height: "10px", backgroundColor: "#212121" }}
      ></Box>
    </Landing1Style>
  );
}

export default Landing1;
