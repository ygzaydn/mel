import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import CardImage from "../../assets/images/card.jpeg";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    backgroundImage: "linear-gradient(#D65DB1, white)",
    fontFamily: "'Dancing Script', cursive",
    "& span": {
      color: "black",
      fontSize: "4rem",
      fontFamily: "'Dancing Script', cursive",
    },
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "45vh",
    "& img": {
      maxWidth: "25rem",
    },
  },
  socialMediaGrid: {
    position: "absolute",
    bottom: "85%",
    left: "75%",
    border: "2px solid black",
    display: "flex",
    width: "15vw",
    justifyContent: "space-around",
    height: "5vh",
    alignItems: "center",
    "& svg": {
      color: "black",
      cursor: "pointer",
    },
  },
  secondSection: {
    height: "20vh",
  },
};

const services = [
  "Lazer Epilasyon",
  "Medikal Cilt Bakımı",
  "Kalıcı Makyaj",
  "Bölgesel İncelme",
  "Dermapen",
  "BB Glow",
  "Protez Tırnak",
  "Kalıcı Oje",
  "Manikür",
  "Pedikür",
  "İğneli Epilasyon",
  "Masaj",
  "G5",
  "İpek Kirpik",
  "Kirpik / Kaş Fitting",
  "Sir Ağda",
  "Kaş / Bıyık Alımı",
];

const Homepage = ({ classes, limit, width }) => {
  return (
    <Grid container justify="center" className={classes.homepageContainer}>
      <Grid item xs={12} className={classes.typedGrid}>
        <Typed
          strings={["Güzelliğinize güzellik katın..."]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
        <Grid item xs={4} className={classes.socialMediaGrid}>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </Grid>
      </Grid>

      <Grid container className={classes.firstSection}>
        <Grid item xs={6} className={classes.cardGrid}>
          <img src={CardImage} alt="card" />
        </Grid>
        <Grid item xs={6} className={classes.servicesGrid}>
          <Typography
            color="primary"
            variant="h4"
            gutterBottom
            style={{
              marginBottom: "2vh",
              borderBottom: "2px solid lightgray",
              width: "45%",
              textAlign: "center",
            }}
          >
            Hizmetlerimiz
          </Typography>
          {services.map((el) => (
            <Typography color="primary" variant="subtitle1">
              &bull; {el}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.secondSection}
      >
        <Typography color="primary" variant="h2">
          En iyi hizmet ve ücret garantisiyle...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Homepage);
