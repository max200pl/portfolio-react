import React, { useState } from "react";
import Work from "./Work/Work";

import { Fade } from "react-awesome-reveal";
import s from "./Works.module.scss";

import { useCategoriesWorks, useWorks } from "./WorksAPI";
import FilterWorks from "./FilterWorks/FilterWorks";

import { getUniqCategoriesWork } from "../../helpers/helpers";
import WorksModal from "./WorkModal/WorksModal";


const Works = () => {
    const [filter, setFilter] = useState({ category: "" });
    const { status, data: works, } = useWorks(filter);

    const { status: statusCategories, data: categories } = useCategoriesWorks();
    const uniqCategoriesWork = getUniqCategoriesWork(categories);

    const [isOpenModal, toggleOpenModal] = useState(false);

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
                                    return <Work {...work} key={work.name} onOpenModal={toggleOpenModal} />
                                })}
                            </Fade >
                        </div>

                        <div className="text-center">
                            <button className="btn btn_sm">Load More Work</button>
                        </div>
                    </>
                }

                <WorksModal
                    isOpen={isOpenModal}
                    onClose={toggleOpenModal}
                />
            </div>
        </div >

    )
}

export default Works