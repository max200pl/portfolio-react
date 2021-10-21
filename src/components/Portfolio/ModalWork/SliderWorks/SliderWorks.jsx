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
  console.log(props.workPhotos[0].workPhoto);

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition - width);
  };

  const handleClickNext = () => {
    if (index === props.workPhotos[0].workPhoto.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    <Wrapper>
      <Slider
        workPhotos={props.workPhotos}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </Wrapper>
  );
};

export default SliderWorks;
