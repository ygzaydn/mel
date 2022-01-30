import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import ServicespageBackground from "../../assets/images/pexel7.jpg";
import { ServicesCard } from "../../components";

const services = [
  {
    title: "Cilt Bakımı",
    description1: "Peeling - Serum - Nemlendirici Masaj",
    description2: "Cilt Temizliği",
    description3: "Cilt Bakımı",
  },
  {
    title: "Zayıflama",
    description1: "Vakum Terapi - Refleksoterapi",
    description2: "Pasif Jimnastik - Kavitasyon",
    description3: "Uygulamaların Sakıncaları - Lenf Drenaj",
  },
  {
    title: "Dermapen ve Dermaroller",
    description1: "Dermapen ve Dermaroller Nedir?",
    description2: "Kullanım Alanları ve Nasıl Bir Uygulamadır?",
    description3: "Seans ve Süre Bilgisi",
  },
  {
    title: "İğneli Epilasyon",
    description1: "İğneli Epilasyon Nedir ?",
    description2: "İğneli Epilasyon Tekniği",
    description3: "İğneli Epilasyon Sonrası",
  },
  {
    title: "Makyaj",
    description1: "Makyaj - Kalıcı Makyaj",
    description2: "Kaş Kontür - Göz Kontür - Dudak Kontür",
    description3: "Kıl Tekniği",
  },
  {
    title: "Ağda",
    description1: "Ağda",
    description2: "Sir Ağda",
    description3: "Ağda Sonrası Temizlik",
  },
  {
    title: "Cilt Bakımı",
    description1: "Peeling - Serum - Nemlendirici Masaj",
    description2: "Cilt Temizliği",
    description3: "Cilt Bakımı",
  },
  {
    title: "Masaj",
    description1: "Klasik Masaj",
    description2: "Refleksoloji - Refleksoji Masajı",
    description3: "Masajlar Nasıl Uygulanır - Yararları",
  },
  {
    title: "Mezoterapi",
    description1: "Mezoterapi - İğnesiz Mezoterapi",
    description2: "Kullanım Alanları - Kullanılan İlaçlar",
    description3: "Hastalıklar - Kimlerin Kullanabileceği",
  },
  {
    title: "El ve Ayak Bakımı",
    description1: "El Bakımı",
    description2: "Ayak Bakımı",
    description3: "Sağlıklı Bakım",
  },
  {
    title: "Ozon Sauna",
    description1: "Ozon Sauna Nedir Nasıl Yapılır?",
    description2: "Ozon Sauna Faydaları Nelerdir?",
    description3: "Anti Aging - Yara Bakımı ",
  },
  {
    title: "Lazer",
    description1: "Lazer Epilasyon",
    description2: "Nasıl Uygulanır?",
    description3: "Lazer Bilgisi",
  },
];

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${ServicespageBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: "'Dancing Script', cursive",
    "& span": {
      color: "lightgray",
      fontSize: (props) => (props.width < props.limit ? "1.5rem" : "2rem"),
      fontFamily: "'Dancing Script', cursive",
    },
    clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)",
  },
  typedMiniGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    padding: "0 5vw",
    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Safari */,
    "-khtml-user-select": "none" /* Konqueror HTML */,
    "-moz-user-select": "none" /* Old versions of Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    "user-select": "none",
    "& h1": {
      fontFamily: "Quintessential",
      color: "white",
      fontSize: "15rem",
    },
    "& h2": {
      fontFamily: "Quintessential",
      color: "white",
      paddingBottom: "2rem",
    },
    "& h4": {
      fontFamily: "Quintessential",
      color: "white",
      paddingBottom: "2rem",
    },
  },
  servicesGrid: {
    maxWidth: "1600px",
    padding: "5vh 5vw",
  },
  gallerypageTitle: {
    textAlign: "center",
    margin: "5vh 0 0 0",
    "& h2": {
      display: "inline",
      borderBottom: "2px solid lightgray",
      padding: "2rem 0",
    },
  },
};

const Servicespage = ({ classes, limit, width }) => {
  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    []
  );
  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typography variant={width < limit ? "h2" : "h1"}>Mell</Typography>
          <Typography variant={width < limit ? "h4" : "h2"}>
            Güzellik Merkezi
          </Typography>
          <Typed
            strings={["Hizmetlerimiz"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Grid>
      </Grid>
      <Grid item xs={6} md={6} className={classes.gallerypageTitle}>
        <Typography color="primary" variant={width < limit ? "h4" : "h2"}>
          Hizmetlerimiz
        </Typography>
      </Grid>
      <Grid container className={classes.servicesGrid} justify="center">
        {services.map((el, ind) => (
          <ServicesCard item={el} key={ind} />
        ))}
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Servicespage);
