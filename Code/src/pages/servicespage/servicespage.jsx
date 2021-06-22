import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import ServicespageBackground from "../../assets/images/pexel7.jpg";
import { ServicesCard } from "../../components";

const services = [
  {title:'Cilt Bakımı',
    description1:'Peeling - Serum - Nemlendirici Masaj',
    description2: 'Cilt Temizliği',
    description3: 'Cilt Bakımı'
  },
  {title:'Zayıflama',
    description1:'Vakum Terapi - Refleksoterapi',
    description2: 'Pasif Jimnastik - Kavitasyon',
    description3: 'Uygulamaların Sakıncaları - Lenf Drenaj'
  },
  {title:'Dermapen ve Dermaroller',
    description1:'Dermapen ve Dermaroller Nedir?',
    description2: 'Kullanım Alanları ve Nasıl Bir Uygulamadır?',
    description3: 'Seans ve Süre Bilgisi'
  },
  {title:'İğneli Epilasyon',
    description1:'İğneli Epilasyon Nedir ?',
    description2: 'İğneli Epilasyon Tekniği',
    description3: 'İğneli Epilasyon Sonrası'
  },
  {title:'Makyaj',
    description1:'Makyaj - Kalıcı Makyaj',
    description2: 'Kaş Kontür - Göz Kontür - Dudak Kontür',
    description3: 'Kıl Tekniği'
  },
  {title:'Ağda',
    description1:'Ağda',
    description2: 'Sir Ağda',
    description3: 'Ağda Sonrası Temizlik'
  },
  {title:'Cilt Bakımı',
    description1:'Peeling - Serum - Nemlendirici Masaj',
    description2: 'Cilt Temizliği',
    description3: 'Cilt Bakımı'
  },
  {title:'Masaj',
    description1:'Klasik Masaj',
    description2: 'Refleksoloji - Refleksoji Masajı',
    description3: 'Masajlar Nasıl Uygulanır - Yararları'
  },
  {title:'Mezoterapi',
    description1:'Mezoterapi - İğnesiz Mezoterapi',
    description2: 'Kullanım Alanları - Kullanılan İlaçlar',
    description3: 'Hastalıklar - Kimlerin Kullanabileceği'
  },
  {title:'El ve Ayak Bakımı',
    description1:'El Bakımı',
    description2: 'Ayak Bakımı',
    description3: 'Sağlıklı Bakım'
  },
  {title:'Ozon Sauna',
    description1:'Ozon Sauna Nedir Nasıl Yapılır?',
    description2: 'Ozon Sauna Faydaları Nelerdir?',
    description3: 'Anti Aging - Yara Bakımı - Viral ve Eklem Hastalıkları'
  },
  {title:'Lazer',
    description1:'Lazer Epilasyon',
    description2: 'Nasıl Uygulanır?',
    description3: 'Lazer Bilgisi'
  },
];

const useStyles = {
  typedGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "55vh",
    backgroundImage: `url(${ServicespageBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: "'Dancing Script', cursive",
    "-webkit-box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
    "box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
    "& span": {
      color: "#845EC2",
      fontSize: (props) => (props.width < props.limit ? "1.5rem" : "4rem"),
      fontFamily: "'Dancing Script', cursive",
    },
  },
  typedMiniGrid: {
    display: "flex",
    alignItems: "center",
    height: "15vh",
    padding: "0 5vw",
  },
  servicesGrid: {
    maxWidth: "1600px",
    padding: "5vh 5vw",
  },
  gallerypageTitle: {
    textAlign: "center",
    borderBottom: "2px solid lightgray",
    margin: "5vh 0 0 0",
  },
};

const Servicespage = ({ classes, limit, width }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.typedGrid}>
        <Grid item xs={12} className={classes.typedMiniGrid}>
          <Typed
            strings={["Hizmetlerimiz"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Grid>
      </Grid>
      <Grid item xs={6} md={6} className={classes.gallerypageTitle}>
        <Typography color="primary" variant={width < limit ? "h4" : "h6"}>
          Hizmetlerimiz
        </Typography>
      </Grid>
      <Grid container className={classes.servicesGrid} justify="center">
        {services.map((el,ind) => (
          <ServicesCard item={el} key={ind}/>
        ))}
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Servicespage);
