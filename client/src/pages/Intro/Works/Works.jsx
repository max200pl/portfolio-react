import React, { useState } from "react";
import { Work as WorkComponent } from "./Work/Work";
import { Fade } from "react-awesome-reveal";
import s from "./Works.module.scss";
import FilterWorks from "./FilterWorks/FilterWorks";
import { getUniqCategoriesWork } from "../../../assets/helpers/helpers";
import ModalWork from "../../../modals/ModalWork/ModalWork";
import Modal from "../../../assets/components/Modal/Modal";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ModalWorkManager from "../../../modals/ModalWorkManager/ModalWorkManager";
import WorkAdd from "./Work/WorkAdd/WorkAdd";
import { useGetCategoriesQuery, useGetWorksQuery } from "../../../assets/api/works.api";

const Works = () => {
    const [filter, setFilter] = useState({ category: "" });
    const { status, data: works } = useGetWorksQuery(filter);

    const { status: statusCategories, data: categories } = useGetCategoriesQuery();
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
                                    <WorkAdd
                                        onCardClick={() => {
                                            setCurrentWork(undefined);
                                            toggleEditWorkOpenModal(true);
                                        }}
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
                                    <div key={work.name} className={s.portfolio__col}>
                                        <LazyLoadComponent>
                                            <WorkComponent
                                                {...work}
                                                key={work.name}
                                                onClickEditWork={() => {
                                                    setCurrentWork(work)
                                                    toggleEditWorkOpenModal(true);
                                                }}
                                                onCardClick={() => {
                                                    setCurrentWork(work);
                                                    toggleOpenModal(true);
                                                }}
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
                <ModalWork onClose={toggleOpenModal} work={currentWork} />
            </Modal>

            <Modal
                handleClose={() => toggleEditWorkOpenModal(false)}
                isOpen={isOpenEditWorkModal}
            >
                <ModalWorkManager
                    onClose={toggleEditWorkOpenModal}
                    work={currentWork}
                />
            </Modal>
        </div>
    );
};

export default Works;
