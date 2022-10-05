import { Box, styled } from "@mui/material";

const AppbarStyle = styled(Box)(({ theme }) => ({
  ".logoStyle": {
    margin: "30px",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
      marginTop: "20px",
    },
  },

  ".Logo": {
    height: "45px",
    width: "180px",
    [theme.breakpoints.down("md")]: {
      height: "25px",
      width: "100px",
      marginLeft: "-20px",
    },
  },

  ".signInButton": {
    "&:hover": {
      background: "red",
    },
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "400",
    textTransform: "capitalize",
    margin: "15px",
  },

  ".textField": {
    float: "left",
    width: "70%",
    height: "8vh",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      float: "none",
      margin: "5px",
      height: "9vh",
    },
  },

  ".startButton": { 
    "&:hover": {
      background: "red",
    },
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "400",
    textTransform: "capitalize",
    float: "right",
    width: "30%",
    height: "8vh",
    [theme.breakpoints.down("md")]: {
      float: "none",
      height: "7vh",
      fontSize: "17px",
      width: "40%",
      margin: "10px",
    },
  },
  ".subStyle": {
    margin: "10px",
    fontFamily: "Roboto",
    fontSize: "19px",
    fontWeight: "400",
    color: "white",
    marginTop: "25px",
    [theme.breakpoints.down("md")]: {
      margin: "1px",
      marginTop: "20px",
      fontSize: "18px",
    },
  },
}));

export default AppbarStyle;
