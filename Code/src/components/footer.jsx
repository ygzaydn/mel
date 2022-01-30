import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

import { SocialmediaGrid, InformationGrid } from "./";

const useStyles = () => ({
  footerGrid: {
    background: "linear-gradient(#845EC2, black)",
    display: "flex",
    minHeight: "50vh",
    padding: "10vh 0",
    justifyContent: "center",
    alignItems: "center",
  },
  footerInfo: {
    padding: "4rem 2rem 1rem 2rem",
    margin: "auto",
    minHeight: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaFooterGrid: {
    padding: "1rem 2rem",
    margin: "auto",
    minHeight: (props) => (props.width < props.limit ? null : "50%"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerSemi: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1600px",
    flexDirection: (props) => (props.width < props.limit ? "column" : null),
  },
  menuItem: {
    transition: "all .4s",
    "&:hover": {
      color: "white",
    },
  },
  readMoreText: {
    textAlign: "center",
    marginBottom: "1vh",
    color: "#D65DB1",
    transition: "all .4s",
    "&:hover": {
      color: "white",
    },
  },
});

const Footer = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.footerGrid}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} className={classes.footerSemi}>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} className={classes.footerInfo}>
            <Typography
              color="error"
              variant="h5"
              style={{
                textAlign: "center",
                marginBottom: "4vh",
                color: "#D65DB1",
              }}
            >
              Salonumuz hakkında
            </Typography>
            <Typography
              color="error"
              variant="subtitle1"
              style={{
                marginBottom: "1vh",
              }}
            >
              İzmir Mell Güzellik Salonu, müşteri memnuniyetini ilke edinmiş,
              sizin her konuda konforunuzu amaçlayan salonuyla, her türlü
              memnuniyetinizi amaçlayan kadrosu ile birlikte ziyaretinizi
              beklemektedir.
            </Typography>
            <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
              <Typography
                color="error"
                variant="subtitle2"
                className={classes.readMoreText}
              >
                Daha fazlası...
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} className={classes.footerInfo}>
            <InformationGrid color="white" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}>
          <Grid item xs={12} className={classes.footerInfo}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                color="secondary"
                variant="h6"
                className={classes.menuItem}
              >
                Anasayfa
              </Typography>
            </Link>
            <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
              <Typography
                color="secondary"
                variant="h6"
                className={classes.menuItem}
              >
                Hakkımızda
              </Typography>
            </Link>
            <Link to="/hizmetlerimiz" style={{ textDecoration: "none" }}>
              <Typography
                color="secondary"
                variant="h6"
                className={classes.menuItem}
              >
                Hizmetlerimiz
              </Typography>
            </Link>

            <Link to="/iletisim" style={{ textDecoration: "none" }}>
              <Typography
                color="secondary"
                variant="h6"
                className={classes.menuItem}
              >
                İletişim
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.socialMediaFooterGrid}>
            <SocialmediaGrid color="white" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Footer);
