import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = (props) => ({
  InformationGrid: {
    border: (props) => `2px solid ${props.color}`,
    padding: "1.5rem 0.5rem",
    alignItems: "center",
    "& svg": {
      color: (props) => ` ${props.color}`,
      cursor: "pointer",
      marginRight:'0.5rem'
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
      <Typography color="secondary" variant="subtitle1">Ertuğrul Mahallesi Uğur Mumcu Bulvarı No:20/B - 1 Torbalı / İzmir</Typography>
    </Grid>
    <Grid item xs={12} className={classes.informationSections}>
      <MailIcon />
      <Typography color="secondary" variant="subtitle1">mellguzellikmerkezi@gmail.com</Typography>
    </Grid>
    <Grid item xs={12} className={classes.informationSections}>
      <PhoneIcon />
      <Typography color="secondary" variant="subtitle1">+90 507 035 2992</Typography>
    </Grid>
  </Grid>
);

export default compose(
  withWindowConsumer,
  withStyles(useStyles)
)(InformationGrid);
