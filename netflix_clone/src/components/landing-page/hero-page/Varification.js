import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import AppbarStyle from "../NavBar/AppbarStyle";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Varification() {
  return (
    <AppbarStyle>
     <Typography variant="h6" align="center" className="subStyle">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
      <Box
        sx={{
          backgroundColor: "white",
        }}
        className="textField"
      >
        <TextField
          fullWidth
          color="warning"
          id="filled-basic" 
          label="Email address"
          variant="filled"
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: "red" }}
        className="startButton"
      >
        Get Started  {<ArrowForwardIosOutlinedIcon/>}
      </Button>
    </AppbarStyle>
  );
}

export default Varification;
