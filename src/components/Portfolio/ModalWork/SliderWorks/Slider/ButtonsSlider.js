import React from 'react';
import styled from 'styled-components';
// import leftBtn from '../icons/left.svg'; // Svg Icon
// import rightBtn from '../icons/right.svg';  // Svg Icon
const Button = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
`;

function ButtonsSlider({ handleClickPrev, handleClickNext })
{
     return (
          <>
               <Button data-slide="prev" onClick={handleClickPrev} />
               <Button data-slide="next" onClick={handleClickNext} />
          </>
     );
}
export default ButtonsSlider;