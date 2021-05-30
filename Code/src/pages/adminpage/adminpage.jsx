import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import { withFirebaseConsumer } from "../../firebase/consumer";

const useStyles = {
  homepageContainer: {
    minHeight: "60vh",
    alignItems: "flex-start",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  messageGrid: {
    display: "flex",
    border: "2px solid lightgray",
    margin: "2vh",
  },
};

const Adminpage = ({ classes, limit, width, firebase }) => {
  const [login, setLogin] = useState(false);
  const [messages, setMessages] = useState(null);

  const initialState = {
    id: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  const addInfo = (infoType) => (event) =>
    setUser({ ...user, [infoType]: event.target.value });

  const loginAttempt = (id, password) => {
    if (id === "admin" && password === "admin") setLogin(true);
  };

  useEffect(() => {
    if (!messages) firebase.doGetInfoFromDb(setMessages);
  }, []);

  console.log(messages);
  return (
    <Grid container justify="center" className={classes.homepageContainer}>
      {!login ? (
        <Grid item xs={12} className={classes.loginForm}>
          <TextField
            id="outlined-basic"
            label="İsim"
            multiline
            required
            value={user.name}
            InputLabelProps={{
              style: { color: "#845EC2" },
            }}
            onChange={addInfo("id")}
          />
          <TextField
            id="outlined-basic"
            label="Şifre"
            multiline
            required
            type="password"
            value={user.password}
            InputLabelProps={{
              style: { color: "#845EC2" },
            }}
            onChange={addInfo("password")}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginAttempt(user.id, user.password)}
          >
            Giriş
          </Button>
        </Grid>
      ) : (
        <Grid container>
          {messages.map((el) => (
            <Grid item xs={12} key={el} style={{ maxHeight: "10vh" }}>
              <Grid item xs={12} className={classes.messageGrid}>
                <Typography color="primary" variant="h6">
                  İsim: &nbsp; &nbsp; {el.name} ||
                </Typography>
                <Typography color="primary" variant="h6">
                  Email: &nbsp; &nbsp; {el.email} ||
                </Typography>
                <Typography color="primary" variant="h6">
                  Konu: &nbsp; &nbsp; {el.topic} ||
                </Typography>
                <Typography color="primary" variant="h6">
                  Mesaj: &nbsp; &nbsp; {el.message} ||
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default compose(
  withFirebaseConsumer,
  withWindowConsumer,
  withStyles(useStyles)
)(Adminpage);
