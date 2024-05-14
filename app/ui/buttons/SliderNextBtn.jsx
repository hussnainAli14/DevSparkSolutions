import React from "react";
import RoundedIconButton from "./RoundedIconButton";
import { MdNavigateNext } from "react-icons/md";
import { useSwiper } from "swiper/react";

const SliderNextBtn = () => {
  const swiper = useSwiper();
  return (
    <RoundedIconButton
      onHoverColor="bg-white"
      className="w-8 h-8 rounded-full absolute z-10 top-0 right-0 hover:bg-turquoise "
    >
      <MdNavigateNext
        size={30}
        onClick={() => swiper.slideNext()}
        color="black"
      />
    </RoundedIconButton>
  );
};

export default SliderNextBtn;
