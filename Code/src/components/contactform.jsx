import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";

const useStyles = ({ color }) => ({
  contactform: {
    background: "white",
    border: "2px solid lightgray",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: (props) => (props.width < props.limit ? "60vh" : "35vh"),
  },
});

const ContactForm = ({ classes }) => (
  <Grid item xs={12} className={classes.contactform}>
    <Grid item xs={12}>
      <Typography color="primary" variant="h5">
        İletişim Formu
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <TextField
        id="outlined-basic"
        label="İsim"
        multiline
        InputLabelProps={{
          style: { color: "#845EC2" },
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        id="outlined-basic"
        label="Mail"
        multiline
        InputLabelProps={{
          style: { color: "#845EC2" },
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        id="outlined-basic"
        label="Mesaj"
        multiline
        InputLabelProps={{
          style: { color: "#845EC2" },
        }}
      />
    </Grid>
    <Grid item xs={12} md={7}>
      <Button variant="contained" color="primary">
        Gönder
      </Button>
    </Grid>
  </Grid>
);

export default compose(withWindowConsumer, withStyles(useStyles))(ContactForm);
