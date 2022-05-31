// @ts-nocheck
import React, { Component, Fragment } from "react";
import data from "../../../../data.json";
import Slide from "./Slide/Slide";
import { Pagination, Button, Flex } from "./Slide/SliderStyle";

export default class SliderWorks extends Component
{
	constructor()
	{
		super();
		this.state = {
			photoWorks: data.photoWorks,
			currentIndex: 0,
		};
	}

<<<<<<< HEAD
	previousSlide = () =>
	{
		const { photoWorks, currentIndex } = this.state;
		if (currentIndex === 0) {
			return this.setState({ currentIndex: photoWorks.length - 1 });
		}
		this.setState({ currentIndex: currentIndex - 1 });
	};
=======
const SliderWorks = (props) => {
  const images = props.applyTech;

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
>>>>>>> 01917aa (add  functional component  SliderWorks)

	nextSlide = () =>
	{
		const { photoWorks, currentIndex } = this.state;
		if (currentIndex === photoWorks.length - 1) {
			return this.setState({ currentIndex: 0 });
		}
		this.setState({ currentIndex: currentIndex + 1 });
	};

<<<<<<< HEAD
	indexSlide = (info) =>
	{
		const id = info;
		this.setState({ currentIndex: id - 1 });
	};

	render()
	{
		const { photoWorks, currentIndex } = this.state;
		return (
			<Fragment>
				<Slide
					id={photoWorks.id}
					key={photoWorks.id}
					info={photoWorks[currentIndex].workPhoto[1].image}
				/>
				<Flex background>
					{photoWorks.map((v) =>
					{
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
=======
  const handleClickNext = () => {
    if (index === images.length - 1) {
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
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </Wrapper>
  );
};

export default SliderWorks;
>>>>>>> 01917aa (add  functional component  SliderWorks)
