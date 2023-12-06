import { useState } from "react";
import s from "./ResumeRowsSection.module.scss";

const ResumeRowsSection = (props) => {
    const { isPrinting, experience } = props;
    const [currentOpen, setCurrentOpen] = useState(undefined);


    let toggleHandler = (current) => {
        currentOpen === current ? setCurrentOpen(undefined) : setCurrentOpen(current)
    }

    return (
        <div>
            {props.data.map((el) => {
                const { data, description, id } = el;
                return (
                    <div className={s.wrapper} key={id}>
                        <div className={s.container}>
                            <div className={s.data}>
                                <div className={s.data__title}>
                                    {data.title}
                                </div>
                                {data.subtitle &&
                                    <div className={s.data__subtitle}>{data.subtitle}</div>
                                }

                                <div className={s.data__time}>
                                    <span className={s.data__startDate}>{data.time.start}</span>
                                    {data.time.end &&
                                        <span className={s.data__endDate}>{data.time.end}</span>
                                    }
                                    {data.time.full && (
                                        <span className={s.data__fulDate}>({data.time.full})</span>
                                    )}
                                </div>
                                {data.link &&
                                    <a className={s.data__link} href={data.link}>Link</a>
                                }
                            </div>

                            <div
                                openDescription={`${currentOpen === id}`}
                                className={s.description}
                                isPrintingExperience={`${isPrinting && experience}`}
                                isprinting={
                                    isPrinting
                                        ? "true"
                                        : undefined
                                }
                                onClick={() => toggleHandler(id)}
                            >

                                <div className={s.description__title}>
                                    {description.title}
                                    {description.descriptionList.length > 0 && (
                                        <span className={s.description__arrow}></span>
                                    )}
                                </div>

                                <ul className={s.description__list}>
                                    {description.descriptionList.map((el, id) => {
                                        if (typeof el === "object") {
                                            return <li>
                                                <div>{el.nameSection}</div>
                                                <ul>
                                                    {el.section.map((item) => {
                                                        return <li>{item} </li>
                                                    })}
                                                </ul>
                                            </li>
                                        } else {
                                            return <li key={id}>{el}</li>;
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ResumeRowsSection;
