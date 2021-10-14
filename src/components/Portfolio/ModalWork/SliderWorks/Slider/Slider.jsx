import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ButtonsSlider from "./ButtonsSlider";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.6 ease-ind-out;
  transform: ${(props) => `translateX(${props.xPosition}px)`};
`;

const SlickDots = styled.ul`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 1.4rem;
  left: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Slider = (props) => {
  const slideRef = useRef();
  console.log(props.photoWork.photoWork);
  useEffect(() => {
    if (slideRef.current) {
      // @ts-ignore
      const width = slideRef.current.clientWidth;
      props.setWidth(width);
    }
  }, [props, props.setWidth]);
  return (
    <Wrapper>
      <Slide xPosition={props.xPosition} ref={slideRef}>
        {props.photoWork.photoWork.map((work, i) => (
          <Image src={work.image} alt={"ok"} />
        ))}
      </Slide>
      <ButtonsSlider
        handleClickPrev={props.handleClickPrev}
        handleClickNext={props.handleClickNext}
      />
      <SlickDots>
        {props.photoWork.photoWork.map((work, i) => (
          <Image src={work.image} alt={"ok"} />
        ))}
      </SlickDots>
    </Wrapper>
  );
};

export default Slider;
