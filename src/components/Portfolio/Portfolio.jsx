import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Hammer from "../../img/hammer.PNG";
import Smart from "../../img/smart.PNG";
import Physicians from "../../img/Physicians.PNG";
import Stylist from "../../img/stylist.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://hammer-manufacturer.web.app/home" target="_blank"><img src={Hammer} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://warehouse-auth-server.web.app/home" target="_blank"><img src={Smart} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://physicians-2f709.web.app/" target="_blank"><img src={Physicians} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://stylist-photographer-services.web.app/" target="_blank"><img src={Stylist} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
