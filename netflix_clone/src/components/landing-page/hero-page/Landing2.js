import { Box, Typography } from "@mui/material";
import React from "react";
import Landing2Style from "./Landing2Style";
import tvimg from "../../../images/tv.png";
import Video1 from "../../../images/Netflix_Gif1.gif";

function Landing2() {
  return (
    <Landing2Style>
      <Box className="backgroundStyle">
        <Box className="container1">
          <Box className="textStyle">
            <Typography variant="h4" align="center" className="text1Style">
              Enjoy on your TV.
            </Typography>
            <Typography variant="h6" align="center" className="text2Style">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </Typography>
          </Box>
          

          <Box className="imgStyle"> 
            <img src={tvimg} 
            className='tvImageStyle'
            alt="" 
             />
            <img src={Video1} 
            className='tvVideo'
            alt="" 
          
             />
            
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", height: "10px", backgroundColor: "#212121" }}
      ></Box>
    </Landing2Style>
  );
}

export default Landing2;
