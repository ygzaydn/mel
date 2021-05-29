import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import CardImage from "../../assets/images/card.jpeg";
import Hexagonal from "../../assets/images/hexagonal.jpeg";
import { Link } from "react-router-dom";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import HomepageBackground from "../../assets/images/homepagebackground.jpg";

import images from "../../components/galleryImageGetter";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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

const myImages = images.map((el) => ({ original: el }));

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "55vh",
    backgroundImage: `url(${HomepageBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Dancing Script', cursive",
    "-webkit-box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
    "box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
    "& span": {
      color: "#845EC2",
      fontSize: "4rem",
      fontFamily: "'Dancing Script', cursive",
    },
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2vh 0",
    "& img": {
      maxWidth: "25rem",
    },
  },
  galleryGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& img": {
      height: "30rem",
      maxWidth: "30rem",
    },
  },

  hexagonalGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2vh",
    "& img": {
      maxWidth: "30rem",
    },
  },
  typedMiniGrid: {
    display: "flex",
    alignItems: "center",
    height: "15vh",
    padding: "0 5vw",
  },

  secondSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "10vh 0",
    margin: "5vh 0 ",
    height: "40vh",
    backgroundColor: "#845EC2",
    textAlign: "center",
  },

  thirdSection: {
    display: "flex",
    margin: "5vh 0 ",
    padding: "5vh 0",
    minHeight: "40vh",
    maxWidth: "1600px",
  },

  servicesGrid: {
    marginTop: "2vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  firstSection: {
    maxWidth: "1600px",
  },
};

const Homepage = ({ classes, limit, width }) => {
  return (
    <Grid container justify="center" className={classes.homepageContainer}>
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typed
            strings={["Güzelliğinize güzellik katın..."]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Grid>
      </Grid>

      <Grid container className={classes.firstSection}>
        <Grid item xs={12} md={6} className={classes.cardGrid}>
          <img src={CardImage} alt="card" />
        </Grid>
        <Grid item xs={12} md={6} className={classes.servicesGrid}>
          <Typography
            color="primary"
            variant="h3"
            gutterBottom
            style={{
              marginBottom: "2vh",
              borderBottom: "2px solid lightgray",
              width: "45%",
              textAlign: "center",
              padding: "2vh 0",
            }}
          >
            Hizmetlerimiz
          </Typography>
          {services.map((el) => (
            <Typography color="primary" variant="subtitle1">
              &bull; {el}
            </Typography>
          ))}
          <Link to="/hizmetlerimiz" style={{ textDecoration: "none" }}>
            <Typography
              color="secondary"
              variant="h6"
              style={{ marginTop: "1vh" }}
            >
              Tüm hizmetlerimiz
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.secondSection}
      >
        <Typography color="error" variant="h2">
          İzmir Mell Güzellik Merkezi
        </Typography>
        <Typography color="error" variant="h6">
          En iyi hizmet ve ücret garantisiyle...
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.thirdSection}
      >
        <Grid item xs={12} md={6} className={classes.hexagonalGrid}>
          <img src={Hexagonal} alt="hexagonal" />
        </Grid>
        <Grid item xs={12} md={6} className={classes.galleryGrid}>
          <ImageGallery
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay
            showBullets
            items={myImages}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              color="secondary"
              variant="h6"
              style={{ marginTop: "5vh" }}
            >
              Tüm galeriye ulaşmak için tıklayın
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Homepage);
