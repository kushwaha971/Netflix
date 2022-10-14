import { Box, styled } from "@mui/material";
import BackgroundImg from "../../../images/loginPageImage.jpg";

const SignInStyle = styled(Box)(({ theme }) => ({
  ".backgroundImg": {
    backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${BackgroundImg}")`,
    height: "1110px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "134vw",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `linear-gradient(to top right, black, black)`,
      backgroundSize: "100vw",
      height: "700px",
    },
  },
  ".container": {
    backgroundColor: "black",
    width: "26%",
    height: "39vw",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: "0.7",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "30vw",
      backgroundColor: "none",
    },
  },
  ".signStyle": {
    color: "white",
    fontFamily: "Poppins",
    margin: "20px",
    paddingLeft: "35px",
    paddingTop: "45px",
    fontSize: "35px",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      margin: "3px",
      fontSize: "30px",
      paddingTop: "15px",
      paddingLeft: "15px",
    },
  },

  ".textFieldStyle": {
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  ".inputStyled": {
    backgroundColor: "#424242",
    input: { color: "white" },
    margin: "8px",
    borderRadius: "4px",
  },
  ".signButtonStyle": {
    margin: "40px",
    marginLeft: "10px",
    marginRight: "auto",
    fontFamily: "Roboto",
    fontSize: "20px",
    textTransform: "capitalize",
    backgroundColor: "red",
  },
  ".remberStyle": {
    color: "white",
    fonstStyle: "Poppins",
    float: "left",
    marginTop: "-10px",
  },
  ".helpStyle": {
    color: "white",
    fonstStyle: "Poppins",
    float: "right",
  },
  ".container1": {
    marginTop: "-20px",
  },
  ".newStyle": {
    marginTop: "60px",
    color: "white",
    fonstStyle: "Poppins",
    fontSize: "20px",
    fontWeight: "300",
  },
  ".learnMoreStyle": {
    marginTop: "20px",
    color: "white",
    fonstStyle: "Poppins",
    fontSize: "13px",
    fontWeight: "400",
  },
  ".signFooterStyle": {
    backgroundColor: "black",
    marginTop: "150px",
    opacity: "0.7",
    height: "32vh",
    [theme.breakpoints.down("md")]: {
      marginTop: "500px",
      opacity: "1",
      height: '50vh',
      backgroundColor: 'none',
    },
  },
  ".footerContainer": {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ".contactStyle": {
    color: "#616161",
    paddingTop: "30px",
    fontSize: "20px",
    fontStyle: "Roboto",
    marginLeft: "350px",
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
      marginLeft: "35px",
      paddingTop: "60px",
    },
  },
  ".listStyle": {
    color: "#616161",
    listStyleType: "none",
    margin: "15px",
    paddingTop: "3px",
    fontSize: "15px",
    fontStyle: "Roboto ",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      paddingTop: "3px",
      marginLeft: "-75px",
    },
  },
  ".borderStyle": {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "3px",
      backgroundColor: "#212121",
    },
  },
}));

export default SignInStyle;
