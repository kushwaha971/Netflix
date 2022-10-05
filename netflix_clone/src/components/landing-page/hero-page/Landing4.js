import { Box, Typography } from "@mui/material";
import React from "react";
import Landing2Style from "./Landing2Style";
import laptopImg from "../../../images/laptop.png";

function Landing4() {
  return (
    <Landing2Style>
    <Box className="backgroundStyle">
      <Box className="container1">
        <Box className="textStyle">
          <Typography variant="h4"  align= "center" className="text1Style" >Watch everywhere.</Typography>
          <Typography variant="h6"  align= "center" className="text2Style" >
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </Typography>
        </Box>

        <Box className="imgStyle">
          <img src={laptopImg} 
          className='tvImageStyle'
          alt=""
           />
        </Box>
      </Box>
    </Box>
    <Box
      sx={{ width: "100%", height: "10px", backgroundColor: "#212121" }}
    ></Box>
  </Landing2Style>
  )
}

export default Landing4