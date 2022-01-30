import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = () => ({
  contactform: {
    background: "white",
    border: "2px solid lightgray",
    padding: "1.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "350px",
    margin: "2vh",
  },
  image: {
    height: "64px !important",
    width: "64px !important",
  },
});

const ServicesCard = ({ classes, item }) => (
  <Grid
    item
    md={3}
    className={classes.contactform}
    key={item.title}
    style={{ textAlign: "center" }}
  >
    <Grid item xs={12}>
      <img
        src={
          require(`../assets/svg/${parseInt(Math.random() * 13)}.png`).default
        }
        alt={item}
        className={classes.image}
      />
    </Grid>

    <Grid item xs={12} style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
      <Typography color="primary" variant="h5">
        {item.title}
      </Typography>
    </Grid>
    <Grid
      item
      xs={12}
      key={item.description1}
      style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}
    >
      <Typography color="primary" variant="subtitle2">
        {item.description1}
      </Typography>
    </Grid>

    <Grid
      item
      xs={12}
      key={item.description2}
      style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}
    >
      <Typography color="primary" variant="subtitle2">
        {item.description2}
      </Typography>
    </Grid>

    <Grid
      item
      xs={12}
      key={item.description3}
      style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}
    >
      <Typography color="primary" variant="subtitle2">
        {item.description3}
      </Typography>
    </Grid>

    <Grid item xs={12} md={7} style={{ marginTop: "2rem" }}>
      <Link to="/iletisim" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" size="small">
          Detaylı bilgi için bize ulaşın
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default compose(withWindowConsumer, withStyles(useStyles))(ServicesCard);
