import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ButtonsSlider from "./ButtonsSlider";
import SlickDots from "./SlickDots";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
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
    console.log(slideRef.current);
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
      <SlickDots workPhotos={workPhotos} />
    </Wrapper>
  );
};

export default Slider;
