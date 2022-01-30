import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = () => ({
  contactform: {
    background: "white",
    padding: "1.5rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: "64px !important",
    width: "64px !important",
  },
});

const ServicesCard = ({ classes, text }) => (
  <Grid
    item
    xs={4}
    md={2}
    className={classes.contactform}
    key={text}
    style={{ textAlign: "center" }}
  >
    <Grid item xs={12}>
      <img
        src={
          require(`../assets/svg/${parseInt(Math.random() * 13)}.png`).default
        }
        alt={text}
        className={classes.image}
      />
    </Grid>

    <Grid item xs={12}>
      <Typography color="primary" variant="subtitle1">
        {text}
      </Typography>
    </Grid>
  </Grid>
);

export default compose(withWindowConsumer, withStyles(useStyles))(ServicesCard);
