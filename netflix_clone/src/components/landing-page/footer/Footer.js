import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FooterStyle from "./FooterStyle";

function Footer() {
  return (
    <FooterStyle>
      <Box className="backgroundStyle">
        <Box className="footerContainer">
          <Typography variant="subtitle1" className="contactStyle">
            Questions? Call <a href="https://help.netflix.com/en/node/412" style={{textDecoration: 'none',color: '#616161',}}>000-800-040-1843</a>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <ul>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    FAQ
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Investor Relations
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Privacy
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Speed Test
                  </a>
                </li>
              </ul>
            </Grid>

            <Grid item xs={6} sm={3}>
              <ul>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Help Centre
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Jobs
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Cookie Preferences
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Legal Notices
                  </a>
                </li>
              </ul>
            </Grid>

            <Grid item xs={6} sm={3}>
              <ul>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Account
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Ways to Watch
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Corporate Information
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Only on Netflix
                  </a>
                </li>
              </ul>
            </Grid>

            <Grid item xs={6} sm={3}>
              <ul>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Media Centre
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="listStyle">
                  <a
                    href="https://help.netflix.com/en/node/412"
                    style={{ textDecoration: "none", color: "#616161" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Typography varinat="subtitle1" className="netFlixIndiaStyle">
            Netflix India
          </Typography>
        </Box>
      </Box>
    </FooterStyle>
  );
}

export default Footer;
