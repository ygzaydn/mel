import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import Hexagonal from "../../assets/images/hexagonal.jpeg";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/serviceCard";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import HomepageBackground from "../../assets/images/homepagebackground.jpg";
import Background from "../../assets/images/background.jpg";

import images from "../../components/galleryImageGetter";

import ImageGallery from "react-image-gallery";
import StatsItem from "../../components/statsItem";
import Testimonials from "../../components/testimonial";
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
    alignItems: "center",
    height: "90vh",
    backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${HomepageBackground})`,
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
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2vh 0",
    "& img": {
      maxWidth: "min(90%,25rem)",
    },
  },
  galleryGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: (props) => (props.width < props.limit ? "5rem" : null),
    "& img": {
      height: "30rem",
      maxWidth: "30rem",
    },
  },

  hexagonalGrid: {
    height: (props) => (props.width < props.limit ? "null" : "100%"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2vh",
    "& img": {
      maxWidth: "min(100%,30rem)",
    },
  },

  secondSection: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "12vh 0",
    margin: "5vh 0 ",
    minHeight: "40vh",
    backgroundImage: `linear-gradient(to right, #845EC2d1,  #845EC2d1), url(${Background})`,
    textAlign: "center",
    backgroundSize: "cover",
    clipPath: "polygon(0 12%, 100% 0, 100% 88%, 0% 100%)",
  },

  thirdSection: {
    display: "flex",
    margin: "5vh 0 ",
    padding: "5vh 0",
    minHeight: "40vh",
    maxWidth: "1600px",
  },

  servicesGrid: {
    display: (props) => (props.width < props.limit ? "grid" : "flex"),
    marginTop: "2vh",

    flexDirection: "column",
    alignItems: "center",
  },
  firstSection: {
    maxWidth: "1600px",
  },
  detailedInfoText: {
    transition: "all .4s",
    textAlign: "center",
    "&:hover": {
      padding: "0 2rem",
      color: "white",
      backgroundColor: "#D65DB1",
    },
  },
};

const Homepage = ({ classes, limit, width }) => {
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
          <Typed
            strings={["Güzelliginize güzellik katın..."]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Grid>
      </Grid>

      <Grid container className={classes.firstSection}>
        {/*<Grid item xs={12} md={6} className={classes.cardGrid}>
          <img src={CardImage} alt="card" />
  </Grid>*/}
        <Grid item xs={12} md={12} className={classes.servicesGrid}>
          <Typography
            color="primary"
            variant="h3"
            gutterBottom
            style={{
              marginBottom: "2vh",
              borderBottom: "2px solid lightgray",
              textAlign: "center",
              padding: "1vh 0",
            }}
          >
            Hizmetlerimiz
          </Typography>
          <Grid container style={{ margin: "1vh 0" }}>
            {services.map((el) => (
              <ServiceCard text={el} />
            ))}
          </Grid>
          <Link to="/hizmetlerimiz" style={{ textDecoration: "none" }}>
            <Typography
              color="secondary"
              variant="h6"
              style={{ marginTop: "1vh" }}
              className={classes.detailedInfoText}
            >
              Detaylı bilgi için tıklayın
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
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1600 }}
          className={classes.statsGrid}
        >
          <Grid item xs={6} sm={3}>
            <StatsItem info={{ value: 20, name: "Farklı Hizmet" }} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatsItem info={{ value: 4, name: "Uzman Asistan" }} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatsItem
              info={{ value: 1000, name: "Aylık Mutlu Müşteri", unit: "+" }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatsItem
              info={{ value: 5000, name: "Profesyonel Uygulama", unit: "+" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.thirdSection}
      >
        <Grid item xs={12} md={6} className={classes.hexagonalGrid}>
          <Typography
            color="primary"
            variant="h3"
            gutterBottom
            style={{
              marginBottom: "2vh",
              borderBottom: "2px solid lightgray",
              textAlign: "center",
              padding: "1vh 0",
            }}
          >
            Müşterilerimiz
          </Typography>
          <Testimonials />
        </Grid>
        <Grid item xs={12} md={6} className={classes.galleryGrid}>
          <Typography
            color="primary"
            variant="h3"
            gutterBottom
            style={{
              marginBottom: "2vh",
              borderBottom: "2px solid lightgray",
              textAlign: "center",
              padding: "1vh 0",
            }}
          >
            Galeri
          </Typography>
          <ImageGallery
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay
            showBullets
            items={myImages}
          />
          <Link to="/galeri" style={{ textDecoration: "none" }}>
            <Typography
              color="secondary"
              variant="h6"
              style={{ marginTop: "5vh" }}
              className={classes.detailedInfoText}
            >
              Tüm galeriye ulaşmak için tıklayın
            </Typography>
          </Link>
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

export default compose(withWindowConsumer, withStyles(useStyles))(Homepage);
