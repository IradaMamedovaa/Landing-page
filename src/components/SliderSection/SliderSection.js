import React from "react";
import "./style.scss";
import { speeches } from "../../services";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Mousewheel,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper";

const SliderSection = () => {
  const mousewheel = {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  };

  return (
    <div className="sliderSection">
      <div className="about">
        <h1>
          Your next chapter,
          <br /> made possible by
          <br /> Hosting
        </h1>
        <div>
          <h5>Share what you love</h5>
          <p>
            Indulge your love for design when you host Airbnb guests, who are
            drawn to authentic travel in creatively curated spaces.
          </p>
        </div>
        <div>
          <h5>Host how you want to</h5>
          <p>
            Airbnb gives you the tools and support to earn extra income, be your
            own boss, and invest in your passions.
          </p>
        </div>
      </div>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect={"fade"}
        loop={true}
        mousewheel={mousewheel}
        slidesPerView={"auto"}
        modules={[Navigation, Autoplay, Mousewheel, Pagination, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        className="ads-swiper"
        navigation={true}
      >
        {speeches.map((speech) => (
          <SwiperSlide key={Math.random()}>
            <div className="slideContent">
              <img src={speech.img} alt="img" />
              <div>
                <p className="speech">
                  "{speech.text}""
                </p>
                <p className="author">
                  {speech.author}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
