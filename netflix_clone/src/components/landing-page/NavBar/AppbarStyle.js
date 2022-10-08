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
    margin: "8px",
    borderRadius: "1px",
  },

  ".textField": {
    float: "left",
    width: "70%",
    marginTop: '10px',
    [theme.breakpoints.down("md")]: {
      width: "99%",
      float: "none",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  ".startButton": {
    "&:hover": {
      background: "red",
    },
    paddingTop: '13px',
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "400",
    textTransform: "capitalize",
    float: "right",
    width: "30%",
    borderRadius: "1px",
    [theme.breakpoints.down("md")]: {
      paddingTop: '5px',
      float: "none",
      fontSize: "15px",
      width: "40%",
      marginTop: '15px',
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
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
      marginTop: "50px",
      fontSize: "18px",
    },
  },
}));

export default AppbarStyle;
