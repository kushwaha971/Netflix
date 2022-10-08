import { Box, styled } from "@mui/material";


const Landing6Style = styled(Box)(({theme}) => ({
    ".backgroundStyle": {
        backgroundColor: "black",
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw",
        [theme.breakpoints.down("md")]: {
          backgroundSize: "216vw",
          height: "800px",
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