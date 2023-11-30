import React, { useEffect, useLayoutEffect, useState } from "react";
import Work from "./Work/Work";

import { Fade } from "react-awesome-reveal";
import s from "./Works.module.scss";

import { useCategoriesWorks, useWorks } from "./WorksAPI";
import FilterWorks from "./FilterWorks/FilterWorks";

import { getUniqCategoriesWork } from "../../helpers/helpers";


const Works = () => {
    //1. получить данные
    const [filter, setFilter] = useState({ category: "" });
    const { status, data: works, } = useWorks(filter);

    const { status: statusCategories, data: categories } = useCategoriesWorks();
    const uniqCategoriesWork = getUniqCategoriesWork(categories);



    // const openModal = (workItem) => {
    //     setCurrentWork()
    //     this.setState({ workItem });
    //     const workName = workItem.workName;
    //     filterPhoto(workName);
    // };

    // const closeModal = () => {
    //     this.setState({ workItem: null });
    // };

    return (
        <div className={s.portfolio} id="portfolio">
            <div className="container">
                {statusCategories === "success" &&
                    <FilterWorks onFilterChange={setFilter} categories={uniqCategoriesWork} />
                }
                {status === "success" &&
                    <>
                        < div className={s.portfolio__workCount}>
                            <span>Count works:</span> {works?.length}
                        </div>
                        <div className={s.portfolio__works}>
                            <Fade direction="right" delay={40} cascade className={s.portfolio__col} >
                                {works?.map((work, id) => {
                                    return <Work {...work} key={work.name} />
                                })}
                            </Fade >
                        </div>

                        <div className="text-center">
                            <button className="btn btn_sm">Load More Work</button>
                        </div>
                    </>
                }

                {/* {work && (
                    <WorkModal
                        work={state.work}
                        closeModal={closeModal}
                        workPhotos={state.workPhotos}
                    />
                )} */}



            </div>
        </div >

    )
}

export default Works

// class Works extends React.Component {

//     state = {
//         works: data.works,
//         photoWorks: data.photoWorks,
//         workItem: null,
//         workPhotos: null,
//     };

//     filterWork = (event) => {
//         if (event.target.dataset.filter === "all") {
//             this.setState({ works: data.works });
//         } else {
//             this.setState({
//                 works: data.works.filter(
//                     (work) => work.categoryWork.indexOf(event.target.dataset.filter) >= 0
//                 ),
//             });
//         }
//     };

//     openModal = (workItem) => {
//         this.setState({ workItem });
//         const workName = workItem.workName;
//         this.filterPhoto(workName);
//     };

//     filterPhoto = (workName) => {
//         this.setState({
//             workPhotos: data.photoWorks.filter(
//                 (workPhoto) => workPhoto.workName === workName
//             ),
//         });
//     };

//     closeModal = () => {
//         this.setState({ workItem: null });
//     };

//     render() {
//         const { workItem } = this.state;
//         return (
//             <div className={s.portfolio} id="portfolio">
//                 <div className="container">
//                     <FilterWorks filterWork={this.filterWork} />
//                     <div className={s.portfolio__workCount}>
//                         <span>Count works:</span> {this.state.works.length}
//                     </div>
//                     <Fade bottom cascade={true}>
//                         <div className={s.portfolio__works}>
//                             {this.state.works.map((workItem) => (
//                                 <div key={workItem.id} className={s.portfolio__col}>
//                                     <Work
//                                         workItem={workItem}
//                                         countWork={this.state.works.length}
//                                         id={workItem.id}
//                                         categoryWork={workItem.categoryWork}
//                                         workName={workItem.workName}
//                                         endWorkTime={workItem.endWorkTime}
//                                         imgWork={workItem.img}
//                                         openModal={this.openModal}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </Fade>

//                     <div className="text-center">
//                         <button className="btn btn_sm">Load More Work</button>
//                     </div>
//                     {workItem && (
//                         <WorkModal
//                             workItem={this.state.workItem}
//                             closeModal={this.closeModal}
//                             workPhotos={this.state.workPhotos}
//                         />
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Works;