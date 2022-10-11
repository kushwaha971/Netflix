import { Box, styled } from "@mui/material";

const Landing2Style = styled(Box)(({ theme }) => ({
  ".backgroundStyle": {
    backgroundColor: "black",
    height: "450px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw",
    [theme.breakpoints.down("md")]: {
      height: "500px",
      backgroundSize: "216vw",
    },
  },
  ".container1": {
    margin: " auto",
    width: "70%",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "93%",
    },
  },
  ".tvImageStyle": {
    position: 'relative',
    zIndex: 2,
    height: "370px",
    width: "500px",
    marginLeft: "50px",
    [theme.breakpoints.down("md")]: {
      height: "280px",
      width: "345px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      
    },
  },

  ".textStyle": {
    float: "left",
    width: "50%",
    marginTop: "150px",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      float: "none",
      marginTop: "30px",
    },
  },
  ".imgStyle": {
    float: "right",
    width: "50%",
    height: "15vh",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      float: "none",
    },
  },
  ".text1Style": {
    color: "white",
    fontFamily: "Roboto",
    fontSize: "50px",
    fontWeight: "600",
    marginRight: "100px",

    [theme.breakpoints.down("md")]: {
      fontFamily: "Roboto",
      fontSize: "30px",
      fontWeight: "500",
      margin: "10px",
      marginRight: "0px",
    },
  },
  ".text2Style": {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: "500",
    marginRight: "100px",
    marginTop: '15px',
    [theme.breakpoints.down("md")]: {
      fontFamily: "Montserrat",
      fontSize: "17px",
      fontWeight: "400",
      marginRight: "0px",
    },
  },
  ".tvVideo":{
    position: 'relative',
    zIndex: 1,
    height: '202px',
    marginLeft: '120px',
    marginTop: '-900px',
    marginBottom: '110px',
    [theme.breakpoints.between("sm", 'md')]: {
      height: '150px',
      marginLeft: '260px',
      marginTop: '-500px',
      marginBottom: '85px',
    },
    [theme.breakpoints.down("sm")]: {
      height: '160px',
      marginLeft: '40px',
      marginTop: '-500px',
      marginBottom: '85px',
    }, 
  },
  ".tvVideo1":{
    position: 'relative',
    zIndex: 1,
    height: '200px',
    width: '300px',
    marginLeft: '150px',
    marginTop: '-900px',
    marginBottom: '160px',
    [theme.breakpoints.between("sm", 'md')]: {
      width: '220px',
      height: '150px',
      marginLeft: '260px',
      marginTop: '-700px',
      marginBottom: '120px',
    },
    [theme.breakpoints.down("sm")]: {
      width: '210px',
      height: '160px',
      marginLeft: '70px',
      marginTop: '-700px',
      marginBottom: '120px',
    }, 
  },

}));

export default Landing2Style;
