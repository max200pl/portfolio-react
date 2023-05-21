import React from 'react'

import s from "./WorkHistory.module.scss"

const WorkHistory = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.data}>
                    <div className={s.data__title}>Spanch web-studio</div>
                    <div className={s.data__subtitle}>Junior HTML developer </div>
                    <div className={s.data__time}>
                        <span className={s.data__startDate}>february 2020</span>
                        <span className={s.data__endDate}>July 2020</span>
                        <span className={s.data__fulDate}>(5 months)</span>
                    </div>
                </div>
                <div className={s.description}>
                    <div className={s.description__title}>My responsibilities:</div>
                    <ul className={s.description__list}>
                        <li>Adaptation for different screen sizes (@media)</li>
                        <li>Turning a PSD template into code HTML\CSS</li>
                        <li>Integration of layout pages into project (Laravel/PHP)</li>
                        <li>Making edits to existing code (HTML/CSS)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory