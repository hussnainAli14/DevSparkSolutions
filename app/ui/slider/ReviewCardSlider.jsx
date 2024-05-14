import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewCard from "../cards/ReviewCard";
import SliderNextBtn from "../buttons/SliderNextBtn";
import SliderPreviousButton from "../buttons/SliderPreviousButton";

const ReviewCardSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        100: {
          slidesPerView: 1,
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        984: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <div className="flex flex-row gap-10">
        <SliderPreviousButton />
        <SliderNextBtn />
      </div>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewCardSlider;
