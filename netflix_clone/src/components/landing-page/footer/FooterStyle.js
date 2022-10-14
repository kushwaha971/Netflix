import { styled, Box } from "@mui/material";


const FooterStyle = styled(Box)(({ theme }) =>({
    ".backgroundStyle": {
        backgroundColor: "black",
        height: "400px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw",
        [theme.breakpoints.down("md")]: {
          height: "500px",
          backgroundSize: "216vw",
        },
      },
      ".footerContainer":{
            width: '60%',
            display: 'block',
            marginLeft:'auto',
            marginRight: 'auto',
            [theme.breakpoints.down("md")]:{
              width: '95%'    
            },
            
      },
      ".contactStyle":{
            color: '#616161',
            paddingTop: '80px',
            fontSize: '16px',
            fontStyle: 'Poppins',
            marginLeft: '80px',
            [theme.breakpoints.down("md")]:{
                  fontSize: '17px', 
                  marginLeft: '35px',   
                },
      },
      ".listStyle":{
            color: '#616161',
            listStyleType: 'none',
            margin: '15px',
            paddingTop: '3px',
            fontSize: '15px',
            fontStyle: 'Poppins',
            [theme.breakpoints.down("md")]:{
                  fontSize: '13px',
                  paddingTop: '3px',
                  margin: '10px -5px',   
                },
      },
      ".netFlixIndiaStyle":{
            color: '#616161',
            paddingTop: '3px',
            fontSize: '15px',
            fontStyle: 'Poppins',
            margin: '50px 55px', 
            [theme.breakpoints.down("md")]:{
                  fontSize: '15px',
                  paddingTop: '10px',
                  margin: '10px 35px',   
                },
      },

}));

export default FooterStyle;