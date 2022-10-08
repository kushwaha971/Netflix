import { Box, Typography } from "@mui/material";
import React from "react";
import Landing6Style from "./Landing6Style";
import Qestions from "./Qestions";
import Varification from "./Varification";

function Landing6() {
  return (
    <Landing6Style>
      <Box className="backgroundStyle">
     
      <Typography variant="h3" align="center"  className="FAQstyle">
          Frequently Asked Questions
        </Typography>
   
      <Qestions/>
      </Box>
      <Box
        sx={{ width: "100%", height: "10px", backgroundColor: "#212121" }}
      ></Box>
     
    </Landing6Style>
  );
}
 
export default Landing6;
