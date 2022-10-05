import { Box, Typography } from "@mui/material";
import React from "react";
import Landing3Style from "./Landing3Style";
import cartoonImg from "../../../images/cartoon.png";

function Landing5() {
  return (
    <Landing3Style>
      <Box className="backgroundStyle">
        <Box className="container1">
          <Box className="textStyle">
            <Typography variant="h4" align="center" className="text1Style">
              Create profiles for children.
            </Typography>
            <Typography variant="h6" align="center" className="text2Style">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </Typography>
          </Box>
          <Box className="imgStyle">
            <img src={cartoonImg} className="mobileImageStyle"  alt="" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", height: "10px", backgroundColor: "#212121" }}
      ></Box>
    </Landing3Style>
  );
}

export default Landing5;
