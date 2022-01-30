import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = () => ({
  footerContainer: {
    height: "5vh",
    position: "fixed",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    left: "5vw",
    bottom: 0,
    width: "max(15vw,225px)",
    background: "green",
    cursor: "pointer",
    zIndex: 50,
    "& svg": {
      color: "white",
      height: "60%",
      width: "2rem",
    },
  },
});

const WhatsappFooter = ({ classes, width, limit }) => {
  return (
    <Grid
      item
      className={classes.footerContainer}
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send/?phone=905070352992",
          "_blank"
        )
      }
    >
      <WhatsAppIcon />
      <Typography style={{ color: "white" }} variant="subtitle1">
        Whattsap'tan bize ulaşın
      </Typography>
    </Grid>
  );
};

export default compose(
  withWindowConsumer,
  withStyles(useStyles)
)(WhatsappFooter);
