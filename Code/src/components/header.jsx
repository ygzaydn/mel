import React, { useState } from "react";

import {
  Grid,
  Breadcrumbs,
  Typography,
  Popper,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";
import Logo from "../assets/images/logo.png";

const useStyles = () => ({
  headerGrid: {
    height: "8vh",
    backgroundColor: "#D65DB1",
    display: "flex",
    justifyContent: "space-around",
    padding: "2vh 0",
    alignItems: "center",
  },
  headerMenuTexts: {
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
    "& img": {
      height: "max(8vh,60px)",
    },
  },
  whiteText: {
    color: "white",
  },
});

const Header = ({ classes, loggedUser, width, limit }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Grid containter className={classes.headerGrid}>
      <Grid item xs={3} md={2} className={classes.headerLogo}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="Logo" />
        </Link>
      </Grid>
      <Grid item xs={9} md={6} className={classes.headerMenuTexts}>
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography className={classes.whiteText} variant="h6">
              Anasayfa
            </Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography className={classes.whiteText} variant="h6">
              Hakkımızda
            </Typography>
          </Link>
          <>
            <Typography
              className={classes.whiteText}
              variant="h6"
              aria-describedby={id}
              aria-haspopup="true"
              onClick={handleClick}
            >
              Hizmetlerimiz
            </Typography>

            <Popper
              aria-describedby={id}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ backgroundColor: "white" }}
            >
              <MenuItem onClick={handleClose}>
                <Typography color="secondary" variant="h6">
                  Hizmetlerimiz1
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography color="secondary" variant="h6">
                  Hizmetlerimiz2
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography color="secondary" variant="h6">
                  Hizmetlerimiz3
                </Typography>
              </MenuItem>
            </Popper>
          </>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Typography className={classes.whiteText} variant="h6">
              İletişim
            </Typography>
          </Link>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Header);
