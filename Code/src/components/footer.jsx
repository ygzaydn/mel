import React from "react";

import { Grid, Breadcrumbs, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

import { SocialmediaGrid, InformationGrid } from "./";

const useStyles = () => ({
  footerGrid: {
    background: "linear-gradient(#845EC2, black)",
    borderTop: "2px solid lightgray",
    display: "flex",
    height: "50vh",
    padding: "5vh 0",
    justifyContent: "center",
  },
  footerInfo: {
    margin: "1vh 0",
    padding: "1vh 3vw",
    width: "75%",
    margin: "auto",
    minHeight: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaFooterGrid: {
    margin: "1vh 0",
    padding: "1vh 3vw",
    width: "75%",
    margin: "auto",
    minHeight: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerSemi: {
    display: "flex",
    maxWidth: "1600px",
  },
});

const Footer = ({ classes }) => {
  return (
    <Grid containter className={classes.footerGrid}>
      <Grid item xs={12} className={classes.footerSemi}>
        <Grid item xs={6}>
          <Grid item xs={12} className={classes.footerInfo}>
            <Typography
              color="error"
              variant="h5"
              style={{ textAlign: "center", marginBottom: "1vh" }}
            >
              Salonumuz hakkında
            </Typography>
            <Typography color="error" variant="subtitle1">
              İzmir Mell Güzellik Salonu, müşteri memnuniyetini ilke edinmiş,
              sizin her konuda konforunuzu amaçlayan salonuyla, her türlü
              memnuniyetinizi amaçlayan kadrosu ile birlikte ziyaretinizi
              beklemektedir.
            </Typography>
            <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
              <Typography
                color="error"
                variant="subtitle2"
                style={{ textAlign: "center", marginBottom: "1vh" }}
              >
                Daha fazlası...
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.footerInfo}>
            <InformationGrid color="white" />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} className={classes.footerInfo}>
            <Typography
              color="error"
              variant="h6"
              style={{ textAlign: "center" }}
            >
              Hızlı Erişim
            </Typography>
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
