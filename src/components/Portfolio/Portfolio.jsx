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
      photoWorks: data.photoWorks,
      workItem: null,
      workPhotos: null,
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
    this.setState({ workItem });
    const workName = workItem.workName;
    this.filterPhoto(workName);
  };

  filterPhoto = (workName) => {
    this.setState({
      workPhotos: data.photoWorks.filter(
        (workPhoto) => workPhoto.workName === workName
      ),
    });
    //console.log(this.state);
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
              workPhotos={this.state.workPhotos}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
