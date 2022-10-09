import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import QuestionStyle from "./QuestionStyle";
import Varification from "./Varification";

function Qestions() {
  return (
    <QuestionStyle>
      <Box className="questionStyle">
        <Accordion className="AccordianStyle">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" className="QueStyle">
              What is Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" className="AnsStyle">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
              <br /> <br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="AccordianStyle">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" className="QueStyle">
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" className="AnsStyle">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="AccordianStyle">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" className="QueStyle">
              Where can I watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" className="AnsStyle">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br /> You can also download your favourite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're on
              the go and without an internet connection. Take Netflix with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="AccordianStyle">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" className="QueStyle">
              How do I cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" className="AnsStyle">
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="AccordianStyle">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" className="QueStyle">
              What can I watch on Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" className="AnsStyle">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="AccordianStyle">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" className="QueStyle">
              Is Netflix good for kids?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" className="AnsStyle">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
              <br />
              <br /> Kids profiles come with PIN-protected parental controls
              that let you restrict the maturity rating of content kids can
              watch and block specific titles you don’t want kids to see.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="InputStyle">
        <Varification />
      </Box>
    </QuestionStyle>
  );
}

export default Qestions;
