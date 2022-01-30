import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import GallerypageBackground from "../../assets/images/pexel3.jpg";

import images from "../../components/galleryImageGetter";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const myImages = images.map((el) => ({ original: el }));

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${GallerypageBackground})`,
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

  galleryGrid: {
    margin: "5vh 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1600px",

    "& img": {
      height: "50rem",
      maxWidth: "50rem",
    },
  },
  gallerypageTitle: {
    textAlign: "center",
    borderBottom: "2px solid lightgray",
    margin: "5vh 0 0 0",
  },
};

const Gallerypage = ({ classes, limit, width }) => {
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
          <Typed strings={["Galeri"]} typeSpeed={100} backSpeed={100} loop />
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} className={classes.galleryGrid}>
        <ImageGallery
          showThumbnails={false}
          autoPlay
          showBullets
          items={myImages}
          useBrowserFullscreen={false}
        />
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Gallerypage);
