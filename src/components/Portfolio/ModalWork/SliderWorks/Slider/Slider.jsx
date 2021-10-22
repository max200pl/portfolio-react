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
  transition: all 1s 0s ease;
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
  z-index: 10;

  li > button {
    background: #10aedf24;
    width: 30px;
    height: 30px;
    margin: 4px;
    border: 2px solid #10aedf;
    border-radius: 50%;
    color: transparent;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Slider = (props) => {
  const slideRef = useRef();
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
        {props.workPhotos[0].workPhoto.map((work, i) => (
          <Image src={work.image} alt={"ok"} />
        ))}
      </Slide>
      <ButtonsSlider
        handleClickPrev={props.handleClickPrev}
        handleClickNext={props.handleClickNext}
      />
      <SlickDots>
        {/*   {props.photoWork.photoWork.map((work, i) => (
          <li>
            <button></button>
            <button></button>
          </li>
        ))} */}
      </SlickDots>
    </Wrapper>
  );
};

export default Slider;
