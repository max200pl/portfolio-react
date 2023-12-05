import React, { useState } from "react";
import { Work as WorkComponent } from "./Work/Work";

import { Fade } from "react-awesome-reveal";
import s from "./Works.module.scss";

import { useCategoriesWorks, useWorks } from "./WorksAPI";
import FilterWorks from "./FilterWorks/FilterWorks";

import { getUniqCategoriesWork } from "../../helpers/helpers";
import WorkModal from "./WorkModal/WorksModal";
import Modal from "../../components/Modal/Modal";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import WorkCreator from "./WorkCreator/WorkCreator";
import ChangeWorkModal from "./ChangeWorkModal/ChangeWorkModal";
import { Work } from "./helpers"


const Works = () => {
    const [filter, setFilter] = useState({ category: "" });
    const { status, data: works } = useWorks(filter);

    const { status: statusCategories, data: categories } = useCategoriesWorks();
    const uniqCategoriesWork = getUniqCategoriesWork(categories);

    const [isOpenModal, toggleOpenModal] = useState(false);
    const [isOpenEditWorkModal, toggleEditWorkOpenModal] = useState(false);
    const [currentWork, setCurrentWork] = useState({});

    return (
        <div className={s.portfolio} id="portfolio">

            {statusCategories === "success" && (
                <FilterWorks
                    onFilterChange={setFilter}
                    categories={uniqCategoriesWork}
                />
            )}


            {status === "success" && (
                <div className={s.portfolio__container}>
                    <div className={s.portfolio__works}>
                        <Fade
                            triggerOnce="true"
                            direction="right"
                            cascade
                            className={s.portfolio__col}
                        >
                            <div className={s.portfolio__col}>
                                <LazyLoadComponent>
                                    <WorkCreator
                                        onCardClick={
                                            () => {
                                                setCurrentWork(
                                                    Work.create()
                                                )
                                                toggleEditWorkOpenModal(true)
                                            }
                                        }
                                    />
                                </LazyLoadComponent>
                            </div>
                        </Fade>
                        <Fade
                            triggerOnce="true"
                            direction="right"
                            cascade
                            className={s.portfolio__col}
                        >
                            {works?.map((work, id) => {
                                return (
                                    <div className={s.portfolio__col}>
                                        <LazyLoadComponent>
                                            <WorkComponent
                                                {...work}
                                                key={work.name}
                                                onCardClick={
                                                    () => {
                                                        setCurrentWork(work)
                                                        toggleOpenModal(true)
                                                    }
                                                }
                                            />
                                        </LazyLoadComponent>
                                    </div>
                                );
                            })}
                        </Fade>
                    </div>
                </div>
            )}

            <Modal handleClose={() => toggleOpenModal(false)} isOpen={isOpenModal}>
                <WorkModal
                    onClose={toggleOpenModal}
                    work={currentWork}
                />
            </Modal>

            <Modal handleClose={() => toggleEditWorkOpenModal(false)} isOpen={isOpenEditWorkModal}>
                <ChangeWorkModal
                    onClose={toggleEditWorkOpenModal}
                    work={currentWork}
                />
            </Modal>
        </div>
    );
};

export default Works;
