import { Box, styled } from "@mui/material";
import BackgroundImg from "../../../images/Background.png";

const Landing1Style = styled(Box)(({ theme }) => ({
  ".backgroundImg": {
    backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${BackgroundImg}")`,
    height: "700px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "105vw",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${BackgroundImg}")`,
      height: "505px",
      backgroundSize: "255vw",
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
    fontFamily: "Roboto",
    fontSize: "65px",
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
