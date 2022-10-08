import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "../../../images/Netflix_logo.svg";
import AppbarStyle from "./AppbarStyle";

function Appbar() {
  return (
    <AppbarStyle>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="logoStyle"
            >
              <img src={logo} className="Logo" alt="" />
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ backgroundColor: "red" }}
              className="signInButton"
            >
              Sign In 
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </AppbarStyle>
  );
}

export default Appbar;
