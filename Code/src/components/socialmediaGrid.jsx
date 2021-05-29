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
    border: (props) => `2px solid ${props.color}`,
    padding: "2vh",
    width: "15vw",
    display: "flex",
    justifyContent: "space-around",
    height: "2rem",
    alignItems: "center",
    "& svg": {
      color: (props) => ` ${props.color}`,
      cursor: "pointer",
    },
  },
});

const SocialmediaGrid = ({ classes }) => (
  <Grid item xs={4} className={classes.socialMediaGrid}>
    <InstagramIcon />
    <FacebookIcon />
    <TwitterIcon />
  </Grid>
);

export default compose(
  withWindowConsumer,
  withStyles(useStyles)
)(SocialmediaGrid);
