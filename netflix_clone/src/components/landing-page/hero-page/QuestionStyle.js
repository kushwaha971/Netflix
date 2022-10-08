import { Box, styled } from "@mui/material";

const QuestionStyle = styled(Box)(({ theme }) => ({
  ".questionStyle": {
    width: "60%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    [theme.breakpoints.between("sm", "md")]:{
        width: "80%",
    },
    [theme.breakpoints.down("sm")]:{
        width: "99%",
    },
  },
  ".AccordianStyle":{
    backgroundColor: '#212121',
    margin: '8px',
    borderRadius: '1px',
  },
  ".QueStyle":{
     
    color: "white",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "500",
  },
  ".AnsStyle":{
    color: "white",
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "400",
  },
  ".InputStyle":{
    width: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down("md")]:{
        width: '95%',
    }
  }

}));

export default QuestionStyle;

