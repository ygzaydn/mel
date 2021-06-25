import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import GallerypageBackground from "../../assets/images/background.jpg";

import images from "../../components/galleryImageGetter";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const myImages = images.map((el) => ({ original: el }));

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "55vh",
    backgroundImage: `url(${GallerypageBackground})`,
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
    return (
        <Grid container justify="center" className={classes.homepageContainer}>
            <Grid item xs={12} className={classes.typedGrid}>
                <Grid item xs={12} className={classes.typedMiniGrid}>
                    <Typed
                        strings={["Galeri"]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                </Grid>
            </Grid>

            <Grid item xs={6} md={6} className={classes.gallerypageTitle}>
                <Typography
                    color="primary"
                    variant={width < limit ? "h4" : "h6"}
                >
                    Galeri
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={classes.galleryGrid}>
                <ImageGallery
                    showThumbnails={false}
                    autoPlay
                    showBullets
                    items={myImages}
                />
            </Grid>
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Gallerypage);
