import React from "react";
import ButtonsSlider from "./ButtonsSlider";
import SlickDots from "./SlickDots";
import Slide from "./Slide";

const Slider = ({
  setWidth,
  xPosition,
  workPhotos,
  changeToSlide,
  currentIndex,
  changeSlide,
}) => {
  const { workPhoto, workName } = workPhotos[0];

  return (
    <>
      <Slide
        workPhoto={workPhoto}
        workName={workName}
        xPosition={xPosition}
        setWidth={setWidth}
      />
      <ButtonsSlider changeSlide={changeSlide} />
      <SlickDots
        workPhotos={workPhoto}
        changeToSlide={changeToSlide}
        currentIndex={currentIndex}
      />
    </>
  );
};

export default Slider;
