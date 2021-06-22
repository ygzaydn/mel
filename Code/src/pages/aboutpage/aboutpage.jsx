import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Typed from "react-typed";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";
import AboutpageBackground from "../../assets/images/pexel5.jpg";

const useStyles = {
    typedGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "55vh",
        backgroundImage: `url(${AboutpageBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "'Dancing Script', cursive",
        "-webkit-box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
        "box-shadow": "inset 0px -15vh 20px 0px rgba(0,0,0,0.78)",
        "& span": {
            color: "#845EC2",
            fontSize: (props) =>
                props.width < props.limit ? "1.5rem" : "4rem",
            fontFamily: "'Dancing Script', cursive",
        },
    },

    typedMiniGrid: {
        display: "flex",
        alignItems: "center",
        height: "15vh",
        padding: "0 5vw",
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
    return (
        <Grid container justify="center" className={classes.homepageContainer}>
            <Grid item xs={12} className={classes.typedGrid}>
                <Grid item xs={12} className={classes.typedMiniGrid}>
                    <Typed
                        strings={["Hakkımızda"]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.aboutpageFirstSection}>
                <Grid
                    item
                    xs={8}
                    className={classes.aboutpageFirstSectionTitle}
                >
                    <Typography
                        color="primary"
                        variant={width < limit ? "h4" : "h6"}
                    >
                        Hakkımızda
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography color="secondary" variant="h6">
                    &nbsp;&nbsp;&nbsp;&nbsp;Mell Güzellik Merkezi, kadın girişimci olarak; genç ve
                        dinamik kadrosu ile 2020 yılında İzmir Torbalı'da hizmet
                        vermeye başlamıştır. Güzellik Merkezi kapsamında;
                        Epilasyon, Cilt Bakımı, Bölgesel İncelme, Zayıflama,
                        Selülit Tedavisi, Medikal Masaj, Kalıcı Makyaj, Protez
                        Tırnak, Kalıcı Oje, Kirpik Lifting, Ipek Kirpik, Kaş
                        Tasarımı, Kaş Alımı, Manikür, Pedikür, Sir Ağda
                        alanlarında yeni trendleri takip ederek alanında uzman
                        ekibi ile danışanları için, en kaliteli, en güvenilir
                        hizmeti sunmayı ilke edinmiştir. Mell Güzellik
                        Merkezi'nin öne çıkan hizmet anlayışlarından bir tanesi
                        de profesyonel hizmet kavramıdır. Tecrübe, eğtim ve
                        yaşam felsefesinin ışığı altında hayatınıza güzellikler
                        sunmayı hedefler.
                        <br/>
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography color="secondary" variant="h6">
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; Uzmanlarının mesleki gelişimi konusunda seminerler ve
                        eğitimleri yakından takip eder ve sürekli gelişimi
                        hedefler. Mell Güzellik Merkezi'nde kullanılan cihaz ve
                        malzemeler Türkiye genelinde nadir bulunan son teknoloji
                        ürünü cihazlar olmasının yanında uluslararası
                        standartlara uygun olup CE belgesi ve FDA onayına
                        sahiptir. Uygulamalarda kullanılan dermokozmetik ürünler
                        ise Sağlık Bakanlığı ve FDA onaylıdır. Doğru
                        yönlendirmenin önemini bilerek ve müşteri memnuniyetini
                        esas alarak hizmet vermektedir. Marka değerini her geçen
                        gün daha yükseğe taşırken, bir çok sosyal sorumluluk
                        projelerine siz değerli danışanları ile imzasını atıyor.
                        Yaşam kalitenizi arttırmanız ve güzellik
                        uygulamalarından yararlanabilmeniz için Mell Güzellik
                        Merkezi her zaman yanınızda. Bizi sosyal medya
                        hesaplarımızdan takip etmeyi unutmayın.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Aboutpage);
