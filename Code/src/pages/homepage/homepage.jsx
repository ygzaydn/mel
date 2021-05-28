import React from "react";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    backgroundImage: "linear-gradient(#D65DB1, white)",
    "& span": {
      color: "black",
      fontSize: "4rem",
    },
  },
};

const Homepage = ({ classes, limit, width }) => {
  return (
    <Grid container justify="center" className={classes.homepageContainer}>
      <Grid item xs={12} className={classes.typedGrid}>
        <Typed
          strings={["Güzelliğinize güzellik katın..."]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Homepage);
