import s from "./ResumeRowsSection.module.scss"

const ResumeRowsSection = (props) => {
    return (
        <div>
            {props.data.map((el) => {
                const { data, description, id } = el;
                return (
                    <div className={s.wrapper} key={id}>
                        <div className={s.container}>
                            <div className={s.data}>
                                <div className={s.data__title}>{data.title}</div>
                                <div className={s.data__subtitle}>{data.subtitle}</div>
                                <div className={s.data__time}>
                                    <span className={s.data__startDate}>{data.time.start}</span>
                                    <span className={s.data__endDate}>{data.time.end}</span>
                                    {data.time.full &&
                                        <span className={s.data__fulDate}>({data.time.full})</span>
                                    }
                                </div>
                            </div>

                            <div className={s.description}>
                                {description.responsibilities.length > 0 &&
                                    <span className={s.description__arrow}></span>
                                }
                                <div className={s.description__title}>{description.title}</div>
                                <ul className={s.description__list}>
                                    {description.responsibilities.map((el, id) => {
                                        return <li key={id}>{el}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}

export default ResumeRowsSection