import React, { useState } from 'react';
import styled from 'styled-components';

const DotsSliderButtons = styled.ul`
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
`;

const ButtonToggle = styled.div`
     background:#10aedf70;
     width: 15px;
     height: 15px;
     margin: 4px;
     border: 2px solid #10aedf;
     border-radius: 50%;
     color: transparent;
     cursor: pointer;
     transition: box-shadow 0.2s linear;
     box-shadow: 0 0 20px #10aedf;

     cursor: pointer;
     z-index: 10;

     &:hover  {
          box-shadow: 0 0 20px #fff;
     };
     opacity: 0.6;
     ${({ active }) =>
          active &&
          `
          box-shadow: 0 0 20px #fff;
     opacity: 1;
`}
`;

function SlickDots({ workPhotos, changeToSlide, currentIndex })
{
     return (
          <DotsSliderButtons>
               {workPhotos.map((work, i) => (
                    <li>
                         <ButtonToggle key={i} active={i === currentIndex} onClick={() => { changeToSlide(i) }}></ButtonToggle>
                    </li>
               ))
               }
          </DotsSliderButtons >
     );
}
export default SlickDots;