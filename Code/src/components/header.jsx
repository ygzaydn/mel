import React, { useState } from "react";

import {
  Grid,
  Breadcrumbs,
  Typography,
  Menu,
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
});

const Header = ({ classes, loggedUser, width, limit }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Link to="/services" style={{ textDecoration: "none" }}>
            <Typography
              className={classes.whiteText}
              variant="h6"
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              Hizmetlerimiz
            </Typography>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
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
            </Menu>
          </Link>
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
