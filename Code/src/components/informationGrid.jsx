import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = (props) => ({
  InformationGrid: {
    border: (props) => `2px solid ${props.color}`,
    padding: "2vh",
    margin: "2vh",
    alignItems: "center",
    "& svg": {
      color: (props) => ` ${props.color}`,
      cursor: "pointer",
    },
  },
  informationSections: {
    display: "flex",
    alignItems: "center",
  },
});

const InformationGrid = ({ classes, color }) => (
  <Grid item xs={12} className={classes.InformationGrid}>
    <Grid item xs={12} className={classes.informationSections}>
      <LocationOnIcon />
      <Typography color="secondary">Konum Bilgisi</Typography>
    </Grid>
    <Grid item xs={12} className={classes.informationSections}>
      <MailIcon />
      <Typography color="secondary">Adres Bilgisi</Typography>
    </Grid>
    <Grid item xs={12} className={classes.informationSections}>
      <PhoneIcon />
      <Typography color="secondary">Telefon No</Typography>
    </Grid>
  </Grid>
);

export default compose(
  withWindowConsumer,
  withStyles(useStyles)
)(InformationGrid);
