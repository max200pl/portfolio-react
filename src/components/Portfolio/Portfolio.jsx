import React from "react";
import Work from "./Work/Work";
import data from "../../data.json";
import Fade from "react-reveal/Fade";
import s from "./Portfolio.module.scss";
import FilterWorks from "./FilterWorks/FilterWorks";
import ModalWork from "./ModalWork/ModalWork";
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      works: data.works,
      workItem: null,
    };
  }

  filterWork = (event) => {
    if (event.target.dataset.filter === "all") {
      this.setState({ works: data.works });
    } else {
      this.setState({
        works: data.works.filter(
          (work) => work.categoryWork.indexOf(event.target.dataset.filter) >= 0
        ),
      });
    }
  };

  openModal = (workItem) => {
    console.log(workItem);
    this.setState({ workItem });
  };

  closeModal = () => {
    this.setState({ workItem: null });
  };

  render() {
    const { workItem } = this.state;
    return (
      <div className={s.portfolio} id="portfolio">
        <div className="container">
          <FilterWorks filterWork={this.filterWork} />

          <div className={s.portfolio__workCount}>
            <span>Count works:</span> {this.state.works.length}
          </div>
          <Fade bottom cascade={true}>
            <div className={s.portfolio__works}>
              {this.state.works.map((workItem) => (
                <div key={workItem.id} className={s.portfolio__col}>
                  <Work
                    workItem={workItem}
                    countWork={this.state.works.length}
                    id={workItem.id}
                    categoryWork={workItem.categoryWork}
                    workName={workItem.workName}
                    endWorkTime={workItem.endWorkTime}
                    imgWork={workItem.img}
                    openModal={this.openModal}
                  />
                </div>
              ))}
            </div>
          </Fade>

          <div className="text-center">
            <button className="btn btn_sm">Load More Work</button>
          </div>
          {workItem && (
            <ModalWork
              workItem={this.state.workItem}
              closeModal={this.closeModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
