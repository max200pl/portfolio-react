import { applications, automation, feature, layoutTechnology, nameSection, pluginsLibraries, typePage } from "../../../data/data";
import s from "./Experience.module.scss";


const resumeWorksData = [
    {
        nameProject: "MoGo",
        startDate: "October 2019",
        typePage: typePage.landing,
        link: "http:...",
        description: [
            { titleSections: "Крупная верстка 16 блоков" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.BEM,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [
                            pluginsLibraries.jquery.scroll,
                            pluginsLibraries.jquery.accordion,
                        ],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [applications.git, applications.textEditor.brackets],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "Anveshan",
        startDate: "November 2019",
        typePage: typePage.landing,
        link: "http:...",
        description: [
            { titleSections: "Адаптивная верстка 7 блоков" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.BEM,
                            layoutTechnology.adaptiveImg,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [pluginsLibraries.jquery.scroll],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            applications.graphicsEditor.adobePhotoshop,
                            applications.textEditor.sublimeText,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "Power",
        startDate: "January 2020",
        endDate: "February 2020",
        typePage: typePage.landing,
        link: "http:...",
        description: [
            { titleSections: "Верстка с модальными окнами и формой обратной связи" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.CSSPreprocessors.less,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [
                            pluginsLibraries.jquery.scroll,
                            pluginsLibraries.jquery.slickSlider,
                        ],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            applications.graphicsEditor.adobeXD,
                            applications.textEditor.brackets,
                            applications.git,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "Portfolio",
        startDate: "December 2019",
        endDate: "January 2020",
        typePage: typePage.landing,
        link: "http:...",
        description: [
            { titleSections: "Верстка 8 блоков с слайдерами" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.CSSPreprocessors.less,
                            layoutTechnology.modalWindow.jquery,
                            layoutTechnology.W3C,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [
                            pluginsLibraries.jquery.scroll,
                            pluginsLibraries.jquery.slickSlider,
                            pluginsLibraries.jquery.validateForm,
                        ],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            automation.gulp,
                            applications.graphicsEditor.adobeXD,
                            applications.textEditor.VSCode,
                            applications.git,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "ShopOfGoods",
        startDate: "February 2020",
        typePage: typePage.site,
        link: "http:...",
        description: [
            { titleSections: "Магазин товаров native JS" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.BEM,
                            layoutTechnology.skeleton.flexBoxCalc,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [pluginsLibraries.bundlers.parcel, pluginsLibraries.axios],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            automation.gulp,
                            applications.graphicsEditor.adobeXD,
                            applications.textEditor.VSCode,
                            applications.git,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "WebDev",
        startDate: "March 2020",
        typePage: typePage.landing,
        link: "http:...",
        description: [
            { titleSections: "Верстка c фреймворком Bootstrap 4" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.skeleton.bootstrap,
                        ],
                    },

                    {
                        nameSection: nameSection.applications,
                        section: [
                            applications.graphicsEditor.adobePhotoshop,
                            applications.textEditor.VSCode,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "PantoFlex",
        startDate: "April 2020",
        typePage: typePage.landing,
        link: "http:...",
        description: [
            { titleSections: "Верстка под заказчика" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.mediaVariable,
                            layoutTechnology.CSSPreprocessors.scssVariables,
                            layoutTechnology.BEM,
                            layoutTechnology.adaptiveImg,
                            layoutTechnology.skeleton.flexBoxCalc,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [automation.gulpScssStarter],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            applications.graphicsEditor.adobeXD,
                            applications.textEditor.VSCode,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "PrimeTime",
        startDate: "May 2020",
        typePage: typePage.page,
        link: "http:...",
        description: [
            { titleSections: "Страница с картой и маркером на GoogleMaps" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.skeleton.bootstrap,
                            layoutTechnology.BEM,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [automation.gulpScssStarter, feature.GoogleMapsAPI],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            applications.graphicsEditor.adobePhotoshop,
                            applications.textEditor.VSCode,
                        ],
                    },
                ],
            },
        ],
    },
    {
        nameProject: "Platform English learn",
        startDate: "Jun 2020",
        typePage: typePage.page,
        link: "http:...",
        description: [
            { titleSections: "Фриланс работа на заказчика" },
            {
                sectionsDescription: [
                    {
                        nameSection: nameSection.layout,
                        section: [
                            layoutTechnology.technology,
                            layoutTechnology.media,
                            layoutTechnology.modalWindow.jquery,
                            layoutTechnology.W3C,
                            layoutTechnology.BEM,
                            layoutTechnology.CSSPreprocessors.scss,
                        ],
                    },
                    {
                        nameSection: nameSection.pluginsLibraries,
                        section: [automation.gulpScssStarter],
                    },
                    {
                        nameSection: nameSection.applications,
                        section: [
                            applications.graphicsEditor.adobePhotoshop,
                            applications.textEditor.VSCode,
                        ],
                    },
                ],
            },
        ],
    },
];

const ExperienceDescription = (props) => {
    return (
        <>
            {props.sectionsDescription?.map((section, id) => {
                return (
                    <div className={s.experience__summary} key={id}>
                        <h2 className={s.experience__section_title}>
                            {section.titleSections}
                        </h2>
                        <h3>{section.nameSection}</h3>
                        <div>
                            {section.section.map((el, id) => {
                                return <p key={id}>{el}</p>;
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const Experience = (props) => {
    return (
        <div className={s.experience}>
            {resumeWorksData.map((work, id) => {
                const { nameProject, startDate, endDate, typePage, link } = work;

                return (
                    <div className={s.experience__container} key={id}>
                        <div className={s.experience__data}>
                            <div className={s.experience__name_project}>{nameProject}</div>
                            <div className={s.experience__time}>
                                <span className={s.experience__startDate}>{startDate}</span>
                                {endDate &&
                                    <span className={s.experience__end_date}>{endDate}</span>
                                }
                            </div>
                        </div>

                        <div className={s.experience__description} >
                            <div className={s.experience__type_page} isprinting={props.isPrinting ? "true" : undefined}>
                                {typePage}
                            </div>
                            <a href={link} className={s.experience__link}>Link to work</a>
                            {work.description.map((workDescription, id) => {
                                return (
                                    <div key={id} className={s.experience__section}>



                                        <ExperienceDescription
                                            sectionsDescription={workDescription.sectionsDescription}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Experience;
