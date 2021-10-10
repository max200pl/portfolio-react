// @ts-nocheck
import React, { Component, Fragment } from "react";
import data from "../../../../data.json";
import Slide from "./Slide/Slide";
import { Pagination, Button, Flex } from "./Slide/SliderStyle";

export default class SliderWorks extends Component {
  constructor() {
    super();
    this.state = {
      photoWorks: data.photoWorks,
      currentIndex: 0,
    };
  }

  previousSlide = () => {
    const { photoWorks, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({ currentIndex: photoWorks.length - 1 });
    }
    this.setState({ currentIndex: currentIndex - 1 });
  };

  nextSlide = () => {
    const { photoWorks, currentIndex } = this.state;
    if (currentIndex === photoWorks.length - 1) {
      return this.setState({ currentIndex: 0 });
    }
    this.setState({ currentIndex: currentIndex + 1 });
  };

  indexSlide = (info) => {
    const id = info;
    this.setState({ currentIndex: id - 1 });
  };

  render() {
    const { photoWorks, currentIndex } = this.state;
    return (
      <Fragment>
        <Slide
          id={photoWorks.id}
          key={photoWorks.id}
          info={photoWorks[currentIndex].photoWork[1].image}
        />
        <Flex background>
          {photoWorks.map((v) => {
            let bgColor = "white";
            if (currentIndex + 1 === +v.id) {
              bgColor = "orange";
            }
            return (
              <Pagination
                key={v.id}
                bgColor={bgColor}
                onClick={() => this.indexSlide(v)}
              />
            );
          })}
        </Flex>
        <Flex>
          <Button onClick={this.previousState}>Previous</Button>
          <Button onClick={this.nextState}>Next</Button>
        </Flex>
      </Fragment>
    );
  }
}
