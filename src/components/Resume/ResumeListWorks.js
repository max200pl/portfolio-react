import s from "./ResumeListWorks.module.scss";

const layoutTechnology = {
    media: "- Адаптивная верстка (Media Queries)",
    mediaVariable:
        "- Реализована новая структура переменных медиа запросов (Variable Media Queries)",
    skeleton: {
        flexBoxCalc: "- Реализована адоптивная Flex-box сетка (calc())",
        bootstrap: "- Реализована адоптивная bootstrap сетка (4.4.1)",
    },
    technology: "- Flex-box верстка (HTML 5, CSS 3)",
    BEM: "- Реализовано разделение интерфейса на независимые блоки (БЭМ)",
    W3C: "- Валидная верстка по спецификациям W3C",
    modalWindow: {
        jquery: "Реализовано открытие модальных окна (Jquery)",
    },
    adaptiveImg: "- Адоптация изображений",
    CSSPreprocessors: {
        less: "- Верстка с препроцессором (less)",
        scss: "- Верстка с препроцессором (SCSS)",
        scssVariables: "- Реализована структура цветов (variable Sass)",
    },
};

const automation = {
    gulp: "- Применение таск-менеджера (Gulp 4)",
    gulpScssStarter:
        "- Применение сборщика gulp-scss-starter (babelrc, bemrc, eslintrc, stylelintrc, webpack)",
};

const nameSection = {
    layout: "Верстка:",
    pluginsLibraries: "Плагины и библиотеки:",
    applications: "Утилиты и приложения:",
    features: "Реализованный функциональность:",
};

const pluginsLibraries = {
    jquery: {
        scroll:
            "- Реализован плавный скролл по якорям на странице с фиксированной шапкой (Jquery)",
        accordion: '- Реализован "аккордеон" посредством data- атрибутов (Jquery)',
        slickSlider: "- Реализованы слайдеры  (Jquery-Slick-Slider)",
        validateForm:
            " - Реализована валидация формы обратной связи (jquery-validate)",
    },
    bundlers: {
        parcel: "- Использовался сборщик приложения (Parcel)",
    },
    axios: "Реализовано получение данных при помощи библиотеки (Axios.js)",
};

const feature = {
    feedback: "- Реализована обратная связь через почту (Ajax, PHP)",
    GoogleMapsAPI: "- Реализована установка маркера на карте (Google Maps API) ",
};

const applications = {
    git: "- Применение распределённой системы управления версиями (Git)",
    textEditor: {
        brackets: "- Применение текстового редактора (Brackets)",
        sublimeText: "- Применение текстового редактора (Sublime Text 3)",
        VSCode: "- Применение текстового редактора (Visual Studio Code)",
    },
    graphicsEditor: {
        adobePhotoshop: "- Работа с макетом через AdobePhotoshop (Desktop-First)",
        adobeXD: "- Применение графического редактора AdobeXD (Desktop-First)",
    },
};

const typePage = {
    landing: "Landing page",
    page: "Web page",
    site: "Site",
};

const resumeWorksData = [
    {
        nameProject: "MoGo",
        startDate: "October 2019",
        typePage: typePage.landing,
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

const WorkDescription = (props) => {
    return (
        <>
            {props.sectionsDescription?.map((section, id) => {
                return (
                    <div className={s.experience__summary} key={id}>
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

const ResumeListWorks = () => {
    return (
        <div>
            {resumeWorksData.map((work, id) => {
                const { nameProject, startDate, endDate, typePage } = work;

                return (
                    <div className={s.work} id="workMoGo" key={id}>
                        <div className={s.work__data}>
                            <div className={s.work__nameProject}>{nameProject}</div>
                            <div className={s.work__time}>
                                <span className={s.work__startDate}>{startDate}</span>
                                <span className={s.work__endDate}>{endDate}</span>
                            </div>
                            <div className={s.work__typePage}>{typePage}</div>
                        </div>

                        {work.description.map((workDescription, id) => {
                            return (
                                <div className={s.work__description} key={id}>
                                    <h2>{workDescription.titleSections}</h2>

                                    <WorkDescription
                                        sectionsDescription={workDescription.sectionsDescription}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default ResumeListWorks;
