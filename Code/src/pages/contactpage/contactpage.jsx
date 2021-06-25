import React from "react";

import { Grid } from "@material-ui/core";
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
    alignItems: "flex-end",
    height: "55vh",
    backgroundImage: `url(${ContactpageBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: "'Dancing Script', cursive",
    "-webkit-box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
    "box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
    "& span": {
      color: "#845EC2",
      fontSize: (props) => (props.width < props.limit ? "1.5rem" : "4rem"),
      fontFamily: "'Dancing Script', cursive",
    },
  },

  typedMiniGrid: {
    display: "flex",
    alignItems: "center",
    height: "15vh",
    padding: "0 5vw",
  },
  contactPageFirstSection: {
    maxWidth: "1800px",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh 0 10vh 0",
    display: (props) => (props.width < props.limit ? "flex" : "flex"),
    padding: "0 15vw",
    flexDirection: props => props.width < props.limit ? "column" : null
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
  return (
    <Grid container justify="center" className={classes.homepageContainer}>
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typed strings={["İletişim"]} typeSpeed={100} backSpeed={100} loop />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.contactPageFirstSection}>
        <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <Grid item xs={12} className={classes.logoSection}>
            <img src={Logo} alt="logo" />
          </Grid>
          <Grid item xs={12}>
            <InformationGrid />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Contactform />
        </Grid>
      </Grid>
      <Grid item xs={12}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.28875989773!2d27.355907316096104!3d38.15672809786364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b95bd306ebbc21%3A0xbb341c0fe31a155e!2sMell%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2str!4v1624649664253!5m2!1str!2str" width="100%" height="600" style={{ border: 0 }}  allowfullscreen="" loading="lazy"></iframe>
      </Grid>
    </Grid>
  );

};

export default compose(withWindowConsumer, withStyles(useStyles))(Contactpage);
