import React from "react";
import RoundedIconButton from "./RoundedIconButton";
import { MdNavigateBefore } from "react-icons/md";
import { useSwiper } from "swiper/react";

const SliderPreviousButton = () => {
  const swiper = useSwiper();
  return (
    <RoundedIconButton
      onHoverColor="bg-white"
      className="w-8 h-8 rounded-full absolute z-10 top-0 right-10 hover:bg-turquoise"
    >
      <MdNavigateBefore
        size={30}
        onClick={() => swiper.slidePrev()}
        color="black"
      />
    </RoundedIconButton>
  );
};

export default SliderPreviousButton;
