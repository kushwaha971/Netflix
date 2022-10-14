import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AppbarStyle from './AppbarStyle'
import logo from "../../../images/Netflix_logo.svg";

const LoginAppBar = () => {
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
        </Toolbar>
      </AppBar>
    </Box>
  </AppbarStyle>
  )
}

export default LoginAppBar;