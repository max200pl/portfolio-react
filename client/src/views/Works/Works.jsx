import React, { useState } from "react";
import Work from "./Work/Work";
import data from "../../data.json";
import { Fade } from "react-awesome-reveal";
import s from "./Works.module.scss";
import FilterWorks from "./FilterWorks/FilterWorks";
import WorkModal from "./WorkModal/WorkModal";
import { useWorks } from "./WorksAPI";


const Works = () => {
    //1. получить данные
    const { status, data: works, error, isFetching } = useWorks();

    const [currentWork, setCurrentWork] = useState();

    //3. настроить фильтр
    //4. настроить открытие модального окна

    // const filterWork = (event) => {
    //     if (event.target.dataset.filter === "all") {
    //         this.setState({ works: data.works });
    //     } else {
    //         this.setState({
    //             works: data.works.filter(
    //                 (work) => work.categoryWork.indexOf(event.target.dataset.filter) >= 0
    //             ),
    //         });
    //     }
    // };

    // const filterPhoto = (workName) => {
    //     this.setState({
    //         workPhotos: data.photoWorks.filter(
    //             (workPhoto) => workPhoto.workName === workName
    //         ),
    //     });
    // };

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

                {isFetching ?
                    <h1>Please wait...</h1>

                    : <>
                        {/* <FilterWorks filterWork={filterWork} /> */}
                        <div className={s.portfolio__workCount}>
                            <span>Count works:</span> {works?.length}
                        </div>
                        <Fade bottom cascade={true}>
                            <div className={s.portfolio__works}>
                                {works?.map((work, id) => (
                                    <div key={id} className={s.portfolio__col}>
                                        <Work
                                            name={work.name}
                                            category={work.category}
                                            date={work.date}
                                            img={work.img}
                                            key={id}
                                        // openModal={openModal}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Fade>

                        <div className="text-center">
                            <button className="btn btn_sm">Load More Work</button>
                        </div>
                        {/* {work && (
                    <WorkModal
                        work={state.work}
                        closeModal={closeModal}
                        workPhotos={state.workPhotos}
                    />
                )} */}



                    </>
                }

            </div>
        </div>

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