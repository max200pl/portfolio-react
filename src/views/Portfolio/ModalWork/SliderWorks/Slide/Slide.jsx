// @ts-nocheck
import React from "react";
import { SlideSection } from "./SliderStyle";

const Slide = ({ info: image }) => {
  return (
    <SlideSection url={image}>
      <div>1</div>
    </SlideSection>
  );
};

export default Slide;
