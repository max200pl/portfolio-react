import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider/Slider.jsx";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;

const SliderWorks = (props) => {
  /*   useEffect(() => {
    const handleAutoplay = setInterval(handleClickNext, 3000);
    return () => {
      clearInterval(handleAutoplay);
    };
  }, [handleClickNext]);
 */
  // console.log(props.workPhotos[0].workPhoto);

  let [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const amountWorkPhotos = props.workPhotos[0].workPhoto.length - 1;

  const changeSlide = (direction) => {
    console.log(direction);
    if (direction === "next-slide") {
      changeToNextSlide();
    }
    if (direction === "prev-slide") {
      changeToPrevSlide();
    }
  };

  const changeToPrevSlide = () => {
    if (index <= 0) {
      setXPosition(-(width * amountWorkPhotos));
      setIndex(amountWorkPhotos);
    } else {
      setIndex(index - 1);
      setXPosition(xPosition + width);
    }
  };

  const changeToNextSlide = () => {
    if (index >= amountWorkPhotos) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  const handleKeyDownPress = (event) => {
    console.log(event.key);
    if (event.key === "ArrowLeft") {
      changeToPrevSlide();
    }
    if (event.key === "ArrowRight") {
      changeToNextSlide();
    }
  };

  return (
    <Wrapper onKeyDown={handleKeyDownPress}>
      <Slider
        workPhotos={props.workPhotos}
        setWidth={setWidth}
        xPosition={xPosition}
        changeSlide={changeSlide}
      />
    </Wrapper>
  );
};

export default SliderWorks;
