import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./testimonial.css";

import Photo1 from "../assets/person/1.png";
import Photo2 from "../assets/person/2.jpg";
import Photo3 from "../assets/person/3.jpg";

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src={Photo1} alt="personphoto1" />
        <div className="myCarousel">
          <h3>Canan Korkmaz</h3>
          <h4>İzmir</h4>
          <p>
            Özellikle lazer epilasyon konusunda bir çok arkadaşımın olumlu
            tavsiyeleri üzerine hizmet aldım. Çok çok memnunum ben de herkese
            tavsiye ediyorum.
          </p>
        </div>
      </div>

      <div>
        <img src={Photo2} alt="personphoto2" />
        <div className="myCarousel">
          <h3>Ayşe Ünal</h3>
          <h4>İzmir</h4>
          <p>
            Mell Güzellik Merkezi ile kızımın epilasyon deneyimini 6 seansta
            tamamladık ve inanılmaz memnun ayrıldık, hizmet için teşekkür
            ediyorum.
          </p>
        </div>
      </div>

      <div>
        <img src={Photo3} alt="personphoto3" />
        <div className="myCarousel">
          <h3>Elif Erdem</h3>
          <h4>İzmir</h4>
          <p>
            Mell Güzellik Merkezi ekibine detaylı açıklamalarından, seanslardaki
            kusursuz hizmeti ve en önemlisi güler yüzlü personelleri için
            teşekkür ediyorum.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonials;
