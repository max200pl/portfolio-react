import React, { useState } from "react";
import Slider from "./Slider/Slider";

const Wrapper = style.div`
     width:100%;
     height:100vh;
     display:flex;
     justify-content:center;
     align-items:center;
     background-color: #eaeaea;
`;

const SliderWorks = (props) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xposition, setxPosition] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
    if (index === images.lenght - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    <Wrapper>
      <Slider images={images} setWidth={setWidth} />
    </Wrapper>
  );
};

export default SliderWorks;
