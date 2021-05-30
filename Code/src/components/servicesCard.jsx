import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";
import myImage from "../assets/images/pexel7.jpg";

const useStyles = () => ({
  contactform: {
    background: "white",
    border: "2px solid lightgray",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "35vh",
    margin: "2vh",
  },
  image: {
    height: "10vh",
    backgroundColor: "pink",
  },
});

const ServicesCard = ({ classes, item }) => (
  <Grid item sm={5} md={3} className={classes.contactform} key={item}>
    <Grid item xs={12}>
      <img src={myImage} alt={item} className={classes.image} />
    </Grid>

    <Grid item xs={12}>
      <Typography color="primary" variant="h5">
        {item}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography color="primary" variant="subtitle1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </Grid>

    <Grid item xs={12} md={7}>
      <Link to="/iletisim" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Detaylı bilgi için bize ulaşın
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default compose(withWindowConsumer, withStyles(useStyles))(ServicesCard);
