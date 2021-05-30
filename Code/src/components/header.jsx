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
import Logo from "../assets/images/logo.jpeg";

import { SocialmediaGrid } from "../components";
import MenuIcon from "@material-ui/icons/Menu";

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
    alignItems: "center",
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
  menuIcon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& svg": {
      height: "3rem",
      width: "8rem",
      color: "#845EC2",
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
      <Grid item xs={12} className={classes.headerSemi}>
        <Grid item xs={6} md={2} className={classes.headerLogo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={Logo} alt="Logo" />
          </Link>
        </Grid>
        <Grid item xs={6} className={classes.headerMenu}>
          {width < limit ? (
            <Grid item xs={10} className={classes.menuIcon}>
              <MenuIcon
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      color="primary"
                      variant="h6"
                      className={classes.menuItem}
                    >
                      Anasayfa
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
                    <Typography
                      color="primary"
                      variant="h6"
                      className={classes.menuItem}
                    >
                      Hakkımızda
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Link to="/hizmetlerimiz" style={{ textDecoration: "none" }}>
                    <Typography
                      color="primary"
                      variant="h6"
                      className={classes.menuItem}
                    >
                      Hizmetlerimiz
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/galeri" style={{ textDecoration: "none" }}>
                    <Typography
                      color="primary"
                      variant="h6"
                      className={classes.menuItem}
                    >
                      Galeri
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/iletisim" style={{ textDecoration: "none" }}>
                    <Typography
                      color="primary"
                      variant="h6"
                      className={classes.menuItem}
                    >
                      İletişim
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>
          ) : (
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
                  <Link to="/galeri" style={{ textDecoration: "none" }}>
                    <Typography
                      color="primary"
                      variant="h6"
                      className={classes.menuItem}
                    >
                      Galeri
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
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Header);
