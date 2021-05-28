import React from "react";
import { Header } from "../../components";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = {};

const Homepage = ({ classes, limit, width }) => {
  return (
    <>
      <Header mode="homepage" />
      <Grid
        container
        justify="center"
        className={classes.homepageContainer}
      ></Grid>
    </>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Homepage);
