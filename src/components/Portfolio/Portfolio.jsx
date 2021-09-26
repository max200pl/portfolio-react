import React from "react";
import Work from "./Work/Work";
import data from "../../data.json";

import s from "./Portfolio.module.scss";
import FilterWorks from "./FilterWorks/FilterWorks";
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      works: data.works,
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

  render() {
    return (
      <div className={s.portfolio} id="portfolio">
        <div className="container">
          <FilterWorks filterWork={this.filterWork} />
          <div className={s.portfolio__workCount}>
            <span>Count works:</span> {this.state.works.length}
          </div>
          <div className={s.portfolio__works}>
            {this.state.works.map((workItem) => (
              <div key={workItem.id} className={s.portfolio__col}>
                <Work
                  countWork={this.state.works.length}
                  id={workItem.id}
                  categoryWork={workItem.categoryWork}
                  workName={workItem.workName}
                  endWorkTime={workItem.endWorkTime}
                  imgWork={workItem.img}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn_sm">Load More Work</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
