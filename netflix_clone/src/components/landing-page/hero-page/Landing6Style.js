import { Box, styled } from "@mui/material";


const Landing6Style = styled(Box)(({theme}) => ({
    ".backgroundStyle": {
        backgroundColor: "black",
        height: "1200px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw",
        [theme.breakpoints.down("md")]: {
          height: "500px",
          backgroundSize: "216vw",
        },
    },


    ".FAQstyle":{
        paddingTop: "80px", 
        color: "white",
        fontFamily: "Roboto",
        fontSize: "55px",
        fontWeight: "600",
        [theme.breakpoints.down("md")]: {
            fontSize: "40px",
            fontWeight: "500",
            paddingTop: "50px", 
          },
       
      }

     

}));

export default Landing6Style;