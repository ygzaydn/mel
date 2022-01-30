import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import AboutpageBackground from "../../assets/images/pexel8.jpg";
import Typed from "react-typed";

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${AboutpageBackground})`,
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
  aboutpageFirstSection: {
    maxWidth: "1600px",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "5vh 0 10vh 0",
    display: "flex",
  },
  aboutpageFirstSectionTitle: {
    textAlign: "center",
    borderBottom: "2px solid lightgray",
    margin: "2vh 0 5vh 0",
  },
};

const Aboutpage = ({ classes, limit, width }) => {
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
    <Grid container justify="center" className={classes.homepageContainer}>
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typography variant={width < limit ? "h2" : "h1"}>Mell</Typography>
          <Typography variant={width < limit ? "h4" : "h2"}>
            Güzellik Merkezi
          </Typography>
          <Typed
            strings={["Hakkımızda"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.aboutpageFirstSection}>
        <Grid item xs={8} className={classes.aboutpageFirstSectionTitle}>
          <Typography color="primary" variant={width < limit ? "h4" : "h3"}>
            Hakkımızda
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography color="secondary" variant="h6">
            &nbsp;&nbsp;&nbsp;&nbsp;Mell Güzellik Merkezi, kadın girişimci
            olarak; genç ve dinamik kadrosu ile 2020 yılında İzmir Torbalı'da
            hizmet vermeye başlamıştır. Güzellik Merkezi kapsamında; Epilasyon,
            Cilt Bakımı, Bölgesel İncelme, Zayıflama, Selülit Tedavisi, Medikal
            Masaj, Kalıcı Makyaj, Protez Tırnak, Kalıcı Oje, Kirpik Lifting,
            Ipek Kirpik, Kaş Tasarımı, Kaş Alımı, Manikür, Pedikür, Sir Ağda
            alanlarında yeni trendleri takip ederek alanında uzman ekibi ile
            danışanları için, en kaliteli, en güvenilir hizmeti sunmayı ilke
            edinmiştir. Mell Güzellik Merkezi'nin öne çıkan hizmet
            anlayışlarından bir tanesi de profesyonel hizmet kavramıdır.
            Tecrübe, eğtim ve yaşam felsefesinin ışığı altında hayatınıza
            güzellikler sunmayı hedefler.
            <br />
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography color="secondary" variant="h6">
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Uzmanlarının mesleki gelişimi konusunda
            seminerler ve eğitimleri yakından takip eder ve sürekli gelişimi
            hedefler. Mell Güzellik Merkezi'nde kullanılan cihaz ve malzemeler
            Türkiye genelinde nadir bulunan son teknoloji ürünü cihazlar
            olmasının yanında uluslararası standartlara uygun olup CE belgesi ve
            FDA onayına sahiptir. Uygulamalarda kullanılan dermokozmetik ürünler
            ise Sağlık Bakanlığı ve FDA onaylıdır. Doğru yönlendirmenin önemini
            bilerek ve müşteri memnuniyetini esas alarak hizmet vermektedir.
            Marka değerini her geçen gün daha yükseğe taşırken, bir çok sosyal
            sorumluluk projelerine siz değerli danışanları ile imzasını atıyor.
            Yaşam kalitenizi arttırmanız ve güzellik uygulamalarından
            yararlanabilmeniz için Mell Güzellik Merkezi her zaman yanınızda.
            Bizi sosyal medya hesaplarımızdan takip etmeyi unutmayın.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Aboutpage);
