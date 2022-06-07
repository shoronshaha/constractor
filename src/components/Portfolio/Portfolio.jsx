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
          <img src={Hammer} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Smart} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Physicians} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Stylist} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
