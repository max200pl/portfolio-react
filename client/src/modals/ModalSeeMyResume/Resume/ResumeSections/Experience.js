import { applications, automation, layoutTechnology, nameSection, pluginsLibraries, typePage } from "../data/data";
import ResumeRowsSection from "../ResumeRowsSection/ResumeRowsSection";

const title = "Description project:"


const resumeWorksData = [

    {
        id: 333333333,
        data: {
            title: "Power",
            time: {
                start: "Jan 2020",
                end: "Feb 2020",
            },
            typePage: typePage.landing,
            link: "http:...",
        },
        description: {
            title,

            descriptionList: [
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
    },
    {
        id: 44444444,
        data: {
            title: "Portfolio",
            time: {
                start: "Dec 2019",
                end: "Jan 2020",
            },
            typePage: typePage.landing,
            link: "http:...",
        },
        description: {
            title,

            descriptionList: [
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
    },
    {
        id: 5555555555,
        data: {
            title: "ShopOfGoods",
            time: {
                start: "Feb 2020",
                end: "...",
            },
            startDate: "February 2020",
            typePage: typePage.site,
            link: "http:...",
        },
        description: {
            title,

            descriptionList: [
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
    },



    {
        id: 999999999,
        data: {
            title: "Platform English",
            time: {
                start: "Jun 2020",
                end: "...",
            },
            typePage: typePage.page,
            link: "http:...",
        },
        description: {
            title,
            descriptionList: [
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
    },
];


const Experience = (props) => (
    <ResumeRowsSection data={resumeWorksData} isPrinting={props.isPrinting} experience={true} />
);

export default Experience;

// {
//     id: 88888888,
//     data: {
//         title: "PrimeTime",
//         time: {
//             start: "May 2020",
//             end: "...",
//         },
//         typePage: typePage.page,
//         link: "http:...",
//     },
//     description: {
//         title: "Страница с картой и маркером на GoogleMaps",

//         descriptionList: [
//             {
//                 nameSection: nameSection.layout,
//                 section: [
//                     layoutTechnology.technology,
//                     layoutTechnology.skeleton.bootstrap,
//                     layoutTechnology.BEM,
//                 ],
//             },
//             {
//                 nameSection: nameSection.pluginsLibraries,
//                 section: [automation.gulpScssStarter, feature.GoogleMapsAPI],
//             },
//             {
//                 nameSection: nameSection.applications,
//                 section: [
//                     applications.graphicsEditor.adobePhotoshop,
//                     applications.textEditor.VSCode,
//                 ],
//             },
//         ],
//     },
// },
// {
//     id: 11111,
//     data: {
//         title: "MoGo",
//         time: {
//             start: "Oct 2019",
//             end: "...",
//         },

//         typePage: typePage.landing,
//         link: "http:...",
//     },
//     description: {
//         title: "Summary", // "Крупная верстка 16 блоков",
//         descriptionList: [
//             {
//                 nameSection: nameSection.layout,
//                 section: [
//                     layoutTechnology.technology,
//                     layoutTechnology.media,
//                     layoutTechnology.BEM,
//                 ],
//             },
//             {
//                 nameSection: nameSection.pluginsLibraries,
//                 section: [
//                     pluginsLibraries.jquery.scroll,
//                     pluginsLibraries.jquery.accordion,
//                 ],
//             },
//             {
//                 nameSection: nameSection.applications,
//                 section: [applications.git, applications.textEditor.brackets],
//             },
//         ],
//     },
// },
// {
//     id: 222222,
//     data: {
//         title: "Anveshan",
//         time: {
//             start: "Nov 2022",
//             end: "...",
//         },
//         typePage: typePage.landing,
//         link: "http:...",
//     },
//     description: {
//         title: "Адаптивная верстка 7 блоков",

//         descriptionList: [
//             {
//                 nameSection: nameSection.layout,
//                 section: [
//                     layoutTechnology.technology,
//                     layoutTechnology.media,
//                     layoutTechnology.BEM,
//                     layoutTechnology.adaptiveImg,
//                 ],
//             },
//             {
//                 nameSection: nameSection.pluginsLibraries,
//                 section: [pluginsLibraries.jquery.scroll],
//             },
//             {
//                 nameSection: nameSection.applications,
//                 section: [
//                     applications.graphicsEditor.adobePhotoshop,
//                     applications.textEditor.sublimeText,
//                 ],
//             },
//         ],
//     },
// },

// {
//     id: 6666666666,
//     data: {
//         title: "WebDev",
//         time: {
//             start: "Mar 2020",
//             end: "...",
//         },
//         typePage: typePage.landing,
//         link: "http:...",
//     },
//     description: {
//         title: "Верстка c фреймворком Bootstrap 4",

//         descriptionList: [
//             {
//                 nameSection: nameSection.layout,
//                 section: [
//                     layoutTechnology.technology,
//                     layoutTechnology.skeleton.bootstrap,
//                 ],
//             },

//             {
//                 nameSection: nameSection.applications,
//                 section: [
//                     applications.graphicsEditor.adobePhotoshop,
//                     applications.textEditor.VSCode,
//                 ],
//             },
//         ],
//     },
// },

// {
//     id: 7777777,
//     data: {
//         title: "PantoFlex",
//         time: {
//             start: "Apr 2020",
//             end: "...",
//         },
//         typePage: typePage.landing,
//         link: "http:...",
//     },
//     description: {
//         title: "Верстка под заказчика",

//         descriptionList: [
//             {
//                 nameSection: nameSection.layout,
//                 section: [
//                     layoutTechnology.technology,
//                     layoutTechnology.media,
//                     layoutTechnology.mediaVariable,
//                     layoutTechnology.CSSPreprocessors.scssVariables,
//                     layoutTechnology.BEM,
//                     layoutTechnology.adaptiveImg,
//                     layoutTechnology.skeleton.flexBoxCalc,
//                 ],
//             },
//             {
//                 nameSection: nameSection.pluginsLibraries,
//                 section: [automation.gulpScssStarter],
//             },
//             {
//                 nameSection: nameSection.applications,
//                 section: [
//                     applications.graphicsEditor.adobeXD,
//                     applications.textEditor.VSCode,
//                 ],
//             },
//         ],
//     },
// },