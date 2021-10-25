import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ButtonsSlider from "./ButtonsSlider";
import SlickDots from "./SlickDots";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  max-height: 600px;
  display: flex;
  justify-content: flex-between;
  position: relative;
  transition: all 1s 0s ease;
  transform: ${(props) => `translateX(${props.xPosition}px)`};
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
`;

const Slider = (props) => {
  const workPhotos = props.workPhotos[0].workPhoto;
  const slideRef = useRef();
  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      props.setWidth(width);
    }
  }, [props, props.setWidth]);
  return (
    <Wrapper>
      <Slide
        // @ts-ignore
        xPosition={props.xPosition}
        ref={slideRef}
      >
        {workPhotos.map((work, i) => (
          <Image src={work.image} alt={""} />
        ))}
      </Slide>
      <ButtonsSlider changeSlide={props.changeSlide} />
      <SlickDots
        workPhotos={workPhotos}
        changeToSlide={props.changeToSlide}
        currentIndex={props.currentIndex}
      />
    </Wrapper>
  );
};

export default Slider;
