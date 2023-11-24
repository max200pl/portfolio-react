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
  background: #10aedf70;
  width: 50px;
  height: 50px;
  margin: 4px;
  padding: 4px;
  border: 2px solid #10aedf;
  border-radius: 50%;
  color: transparent;
  transition: box-shadow 0.2s linear;
  box-shadow: 0 0 15px #10AEDF;
  cursor: pointer;
  z-index: 10;

  &:hover{
     box-shadow: 0 0 15px #fff;
  }
`;

function ButtonsSlider({ changeSlide })
{
     return (
          <ButtonWrapper>
               <Button data-slide="prev" onClick={() => changeSlide("prev-slide")}>
                    <img src={leftButtonSlide} alt="Button Slide" />
               </Button>
               <Button data-slide="next" onClick={() => changeSlide("next-slide")}>
                    <img src={rightButtonSlide} alt="Button Slide" />
               </Button>
          </ButtonWrapper >
     );
}
export default ButtonsSlider;