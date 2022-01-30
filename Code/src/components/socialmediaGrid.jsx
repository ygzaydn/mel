import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = ({ color }) => ({
  socialMediaGrid: {
    padding: "2vh",
    width: "15vw",
    minWidth: "250px",
    display: "flex",
    justifyContent: "space-around",
    height: "2rem",
    alignItems: "center",
    "& svg": {
      color: (props) => ` ${props.color}`,
      cursor: "pointer",
      transition: "all .4s",
      "&:hover": {
        color: "#D65DB1",
      },
    },
  },
});

const SocialmediaGrid = ({ classes }) => (
  <Grid item xs={4} className={classes.socialMediaGrid}>
    <Link
      to={{ pathname: "https://www.instagram.com/mellguzellikmerkezi/?hl=tr" }}
      target="_blank"
    >
      <InstagramIcon />
    </Link>
    <Link
      to={{ pathname: "https://www.facebook.com/mellguzellikmerkezi" }}
      target="_blank"
    >
      <FacebookIcon />
    </Link>
    <Link to={{ pathname: "https://twitter.com/MellEstetik" }} target="_blank">
      <TwitterIcon />
    </Link>
  </Grid>
);

export default compose(
  withWindowConsumer,
  withStyles(useStyles)
)(SocialmediaGrid);
