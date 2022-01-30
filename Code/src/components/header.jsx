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
import Logo from "../assets/images/backgroundGone.png";

import { SocialmediaGrid } from "../components";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect } from "react";

const useStyles = () => ({
  headerGrid: {
    backgroundColor: "transparent",
    position: "fixed",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    transition: "all .4s",
    zIndex: 50,
    padding: "1rem 0",
  },
  headerMenuTexts: {
    marginTop: "1rem",
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
    color: "white",
    "&:hover": {
      borderRadius: 20,
      color: "white",
      backgroundColor: "#845EC2",
      padding: "3px 1rem",
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
  const [color, setColor] = useState("white");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //borderBottom: "2px solid #845EC2",

  const changeStyle = () => {
    const headerContainer = document.getElementById("headerContainer");
    const style = headerContainer.style;
    let yOffset = window.pageYOffset;
    if (headerContainer && style) {
      if (yOffset > 0) {
        style.backgroundColor = "white";
        style.borderBottom = "2px solid #845EC2";
        setColor("#845EC2");
      } else {
        style.backgroundColor = "transparent";
        style.borderBottom = "none";
        setColor("white");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeStyle());
    return () => {
      window.removeEventListener("scroll", () => changeStyle());
    };
  }, []);

  return (
    <Grid container className={classes.headerGrid} id="headerContainer">
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
                      style={{ color: "#845EC2" }}
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
                      style={{ color: "#845EC2" }}
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
                      style={{ color: "#845EC2" }}
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
                      style={{ color: "#845EC2" }}
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
                      style={{ color: "#845EC2" }}
                    >
                      İletişim
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} className={classes.headerMenuTexts}>
                <Breadcrumbs separator="|" aria-label="breadcrumb">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      className={classes.menuItem}
                      style={{ color }}
                    >
                      Anasayfa
                    </Typography>
                  </Link>
                  <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      className={classes.menuItem}
                      style={{ color }}
                    >
                      Hakkımızda
                    </Typography>
                  </Link>
                  <Link to="/hizmetlerimiz" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      className={classes.menuItem}
                      style={{ color }}
                    >
                      Hizmetlerimiz
                    </Typography>
                  </Link>
                  <Link to="/galeri" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      className={classes.menuItem}
                      style={{ color }}
                    >
                      Galeri
                    </Typography>
                  </Link>

                  <Link to="/iletisim" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      className={classes.menuItem}
                      style={{ color }}
                    >
                      İletişim
                    </Typography>
                  </Link>
                </Breadcrumbs>
              </Grid>
              <Grid item xs={12} className={classes.socialMediaBigGrid}>
                <SocialmediaGrid color={color} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Header);
