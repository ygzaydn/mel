import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { withStyles } from "@material-ui/core/styles";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = () => ({
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "-5rem",
    color: "white",
    fontSize: "5rem",
  },
  title: {
    color: "white",
    textAlign: "center",
    width: "100%",
    padding: "5rem 0",
  },

  itembox: {
    padding: "2rem 0",
  },

  box: {
    padding: "3rem 0",
    textAlign: "center",
    fontSize: (props) => (props.width < props.limit ? "3rem" : "5rem"),
  },
  name: {
    paddingTop: "2rem",
    color: "white",
    fontSize: (props) => (props.width < props.limit ? "1rem" : "1.5rem"),
  },

  stats: {
    color: "white",
    fontSize: "5rem",
  },
});

const StatsItem = ({ info, classes }) => {
  return (
    <Grid item xs={12} className={classes.stats}>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Grid item xs={12} style={{ minHeight: "6rem" }}>
            {isVisible ? (
              <CountUp
                className={classes.box}
                end={info.value}
                duration={2}
                suffix={info.unit === "+" ? "+" : ""}
              />
            ) : null}
          </Grid>
        )}
      </VisibilitySensor>

      <Grid item xs={12}>
        <Typography variant="subtitle1" className={classes.name}>
          {info.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withWindowConsumer(withStyles(useStyles)(StatsItem));
