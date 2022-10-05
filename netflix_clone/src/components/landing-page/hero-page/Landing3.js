import { Box, Typography } from "@mui/material";
import React from "react";
import Landing3Style from "./Landing3Style";
import mobileImg from "../../../images/mobile.jpg";

function Landing3() {
  return (
    <Landing3Style>
      <Box className="backgroundStyle">
        <Box className="container1">
          <Box className="textStyle">
            <Typography variant="h4" align="center" className="text1Style">
              Download your shows to watch offline.
            </Typography>
            <Typography variant="h6" align="center" className="text2Style">
              Save your favourites easily and always have something to watch.
            </Typography>
          </Box>
          <Box className="imgStyle">
            <img src={mobileImg} className="mobileImageStyle"  alt="" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", height: "10px", backgroundColor: "#212121" }}
      ></Box>
    </Landing3Style>
  );
}

export default Landing3;
