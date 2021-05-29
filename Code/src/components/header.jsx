import React, { useState } from "react";

import { Grid, Breadcrumbs, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";
import Logo from "../assets/images/logo.jpeg";

import { SocialmediaGrid } from "../components";

const useStyles = () => ({
  headerGrid: {
    height: "8vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    padding: "2vh 0",
    alignItems: "center",
  },
  headerMenuTexts: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: (props) =>
      props.width < props.limit ? "flex-end" : "space-around",
    color: "white",
    "& svg": {
      fontSize: "2.5rem",
      marginRight: "2vw",
    },
  },
  headerLogo: {
    padding: "1vh 0",
    display: "flex",
    justifyContent: "center",
    "& img": {
      height: "max(8vh,60px)",
    },
  },
  whiteText: {
    color: "white",
  },
  headerMenu: {
    display: "flex",
  },

  socialMediaBigGrid: {
    display: "flex",
    justifyContent: "center",
  },
  menuItem: {
    transition: "all 0.5s ",
    padding: "3px ",
    "&:hover": {
      color: "white",
      backgroundColor: "#845EC2",
    },
  },
  headerSemi: {
    maxWidth: "1600px",
    display: "flex",
    justifyContent: "space-around",
  },
});

const Header = ({ classes, loggedUser, width, limit }) => {
  return (
    <Grid containter className={classes.headerGrid}>
      <Grid item xs={12} className={classes.headerSemi}>
        <Grid item xs={6} md={2} className={classes.headerLogo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={Logo} alt="Logo" />
          </Link>
        </Grid>
        <Grid item xs={6} className={classes.headerMenu}>
          <Grid item xs={12}>
            <Grid item xs={12} className={classes.headerMenuTexts}>
              <Breadcrumbs separator="|" aria-label="breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    color="primary"
                    variant="h6"
                    className={classes.menuItem}
                  >
                    Anasayfa
                  </Typography>
                </Link>
                <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
                  <Typography
                    color="primary"
                    variant="h6"
                    className={classes.menuItem}
                  >
                    Hakkımızda
                  </Typography>
                </Link>
                <Link to="/hizmetlerimiz" style={{ textDecoration: "none" }}>
                  <Typography
                    color="primary"
                    variant="h6"
                    className={classes.menuItem}
                  >
                    Hizmetlerimiz
                  </Typography>
                </Link>

                <Link to="/iletisim" style={{ textDecoration: "none" }}>
                  <Typography
                    color="primary"
                    variant="h6"
                    className={classes.menuItem}
                  >
                    İletişim
                  </Typography>
                </Link>
              </Breadcrumbs>
            </Grid>
            <Grid item xs={12} className={classes.socialMediaBigGrid}>
              <SocialmediaGrid color="#845EC2" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Header);
