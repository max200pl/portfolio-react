import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PhotoWrapper = styled.div`
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

function Slide({ workPhoto, workName, setWidth, xPosition })
{

     const slideRef = useRef();

     useEffect(() =>
     {
          if (slideRef.current) {
               const width = slideRef.current.clientWidth;
               setWidth(width);
          }
     }, [setWidth]);

     return (
          <PhotoWrapper xPosition={xPosition} ref={slideRef}>
               {workPhoto.map((work, i) => (
                    <Image
                         key={i}
                         src={work.image}
                         alt={"Work name " + workName + " " + i}
                    />
               ))}
          </PhotoWrapper>
     );
}
export default Slide;