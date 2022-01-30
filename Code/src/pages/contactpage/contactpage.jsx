import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import ContactpageBackground from "../../assets/images/pexel6.jpg";
import Logo from "../../assets/images/1.jpeg";
import { InformationGrid, Contactform } from "../../components";

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${ContactpageBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: "'Dancing Script', cursive",
    "& span": {
      color: "lightgray",
      fontSize: (props) => (props.width < props.limit ? "1.5rem" : "2rem"),
      fontFamily: "'Dancing Script', cursive",
    },
    clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)",
  },
  typedMiniGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    padding: "0 5vw",
    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Safari */,
    "-khtml-user-select": "none" /* Konqueror HTML */,
    "-moz-user-select": "none" /* Old versions of Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    "user-select": "none",
    "& h1": {
      fontFamily: "Quintessential",
      color: "white",
      fontSize: "15rem",
    },
    "& h2": {
      fontFamily: "Quintessential",
      color: "white",
      paddingBottom: "2rem",
    },
    "& h4": {
      fontFamily: "Quintessential",
      color: "white",
      paddingBottom: "2rem",
    },
  },
  contactPageFirstSection: {
    maxWidth: "1800px",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh 0 10vh 0",
    display: (props) => (props.width < props.limit ? "flex" : "flex"),
    padding: "0 15vw",
    flexDirection: (props) => (props.width < props.limit ? "column" : null),
  },
  aboutpageFirstSectionTitle: {
    textAlign: "center",
    borderBottom: "2px solid lightgray",
    margin: "2vh 0 5vh 0",
  },
  logoSection: {
    "& img": {
      height: "20rem",
      width: "20rem",
    },
  },
};

const Contactpage = ({ classes, limit, width }) => {
  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    []
  );
  return (
    <Grid container justify="center" className={classes.homepageContainer}>
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typography variant={width < limit ? "h2" : "h1"}>Mell</Typography>
          <Typography variant={width < limit ? "h4" : "h2"}>
            Güzellik Merkezi
          </Typography>
          <Typed strings={["İletişim"]} typeSpeed={100} backSpeed={100} loop />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.contactPageFirstSection}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12} className={classes.logoSection}>
            <img src={Logo} alt="logo" />
          </Grid>
          <Grid item xs={12}>
            <InformationGrid color="black" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Contactform />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.28875989773!2d27.355907316096104!3d38.15672809786364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b95bd306ebbc21%3A0xbb341c0fe31a155e!2sMell%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2str!4v1624649664253!5m2!1str!2str"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Contactpage);
