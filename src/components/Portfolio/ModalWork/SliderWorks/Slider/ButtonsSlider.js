import React from 'react';
import styled from 'styled-components';
import leftButtonSlide from "../../../../../images/modal-works-slider/left-arrow.svg";
import rightButtonSlide from "../../../../../images/modal-works-slider/right-arrow.svg";
const ButtonWrapper = styled.div`
> * {
     &:last-child {
        right: 0;
     }
   }
`
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #10aedf24;
  width: 50px;
  height: 50px;
  margin: 4px;
  padding: 4px;
  border: 2px solid #10aedf;
  border-radius: 50%;
  color: transparent;
  cursor: pointer;
  z-index: 10;
`;

function ButtonsSlider({ handleClickPrev, handleClickNext })
{
     return (
          <ButtonWrapper>
               <Button data-slide="prev" onClick={handleClickPrev} >
                    <img src={leftButtonSlide} alt="Button Slide" />
               </Button>
               <Button data-slide="next" onClick={handleClickNext} >
                    <img src={rightButtonSlide} alt="Button Slide" />
               </Button>
          </ButtonWrapper >
     );
}
export default ButtonsSlider;