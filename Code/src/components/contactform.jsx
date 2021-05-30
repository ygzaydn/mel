import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";
import { withFirebaseConsumer } from "../firebase/index";
import { v4 as uuidv4 } from "uuid";

const useStyles = () => ({
  contactform: {
    background: "white",
    border: "2px solid lightgray",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: (props) => (props.width < props.limit ? "60vh" : "45vh"),
  },
});

const ContactForm = ({ classes, firebase }) => {
  const initialState = {
    name: "",
    email: "",
    topic: "",
    message: "",
  };
  const [user, setUser] = useState(initialState);

  const addInfo = (infoType) => (event) =>
    setUser({ ...user, [infoType]: event.target.value });

  const uuid = uuidv4();

  const sendInfoToDb = (uuid, info) => firebase.doPushNewMessage(uuid, info);

  return (
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
          required
          value={user.name}
          InputLabelProps={{
            style: { color: "#845EC2" },
          }}
          onChange={addInfo("name")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Konu"
          multiline
          required
          value={user.topic}
          InputLabelProps={{
            style: { color: "#845EC2" },
          }}
          onChange={addInfo("topic")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Mail"
          multiline
          required
          value={user.email}
          InputLabelProps={{
            style: { color: "#845EC2" },
          }}
          onChange={addInfo("email")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Mesaj"
          multiline
          value={user.message}
          required
          InputLabelProps={{
            style: { color: "#845EC2" },
          }}
          onChange={addInfo("message")}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendInfoToDb(uuid, user)}
        >
          Gönder
        </Button>
      </Grid>
    </Grid>
  );
};

export default compose(
  withFirebaseConsumer,
  withWindowConsumer,
  withStyles(useStyles)
)(ContactForm);
