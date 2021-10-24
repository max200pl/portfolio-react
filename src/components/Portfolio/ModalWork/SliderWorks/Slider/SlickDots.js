import React from 'react';
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

  li > button {
    background: #10aedf24;
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

    &:hover {
      box-shadow: 0 0 20px #fff;
    }
  }
`;

function SlickDots({ workPhotos })
{
     return (
          <DotsSliderButtons>
               {workPhotos.map((work, i) => (
                    <li>
                         <button>1</button>
                    </li>
               ))}
          </DotsSliderButtons>
     );
}
export default SlickDots;