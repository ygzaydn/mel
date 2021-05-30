import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { Link } from "react-router-dom";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import ServicespageBackground from "../../assets/images/pexel7.jpg";
import { ServicesCard } from "../../components";

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

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "55vh",
    backgroundImage: `url(${ServicespageBackground})`,
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
  servicesGrid: {
    maxWidth: "1600px",
    padding: "5vh 5vw",
  },
  gallerypageTitle: {
    textAlign: "center",
    borderBottom: "2px solid lightgray",
    margin: "5vh 0 0 0",
  },
};

const Servicespage = ({ classes, limit, width }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typed
            strings={["Hizmetlerimiz"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Grid>
      </Grid>
      <Grid item xs={6} md={6} className={classes.gallerypageTitle}>
        <Typography color="primary" variant={width < limit ? "h4" : "h6"}>
          Hizmetlerimiz
        </Typography>
      </Grid>
      <Grid container className={classes.servicesGrid}>
        {services.map((el) => (
          <ServicesCard item={el} />
        ))}
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Servicespage);
