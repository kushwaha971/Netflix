import { Box, styled } from "@mui/material";
import BackgroundImg from "../../../images/Background.png";

const Landing1Style = styled(Box)(({ theme }) => ({
  ".backgroundImg": {
    backgroundImage: `url(${BackgroundImg})`,
    height: "702px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw",
    [theme.breakpoints.down("md")]: {
      height: "500px",
      backgroundSize: "225vw",
    },
  },

  ".container": {
    margin: " auto",
    width: "50%",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "93%",
    },
  },

  ".headningStyle": {
    fontFamily: "Poppins",
    fontSize: "55px",
    fontWeight: "700",
    color: "white",
    margin: "5px",
    marginTop: "100px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      marginTop: "60px",
    },
  },

  ".subHeadingStyle": {
    margin: "7px",
    fontFamily: "Roboto",
    fontSize: "30px",
    fontWeight: "400",
    color: "white",

    [theme.breakpoints.down("md")]: {
      margin: "10px",
      marginTop: "20px",
      fontSize: "21px",
    },
  },

 
}));

export default Landing1Style;
