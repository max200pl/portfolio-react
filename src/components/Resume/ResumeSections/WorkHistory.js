import ResumeRowsSection from "../ResumeRowsSection/ResumeRowsSection";

const dataWorkHistory = [
    {
        id: 111,
        data: {
            title: "Avanquest company",
            subtitle: "Frontend developer (React, SciterJS)",
            time: {
                start: "Jan 2022",
                end: "...",
            },
        },

        description: {
            title: "My responsibilities:",
            descriptionList: [
                "Implemented features for desktop apps.",
                "Developed highly-responsive pixel-perfect user interface.",
                "Mentoring new employers.",
                "Participate in the architecture of new projects.",
            ],
        },
    },
    {
        id: 222,
        data: {
            title: "Turaiev",
            subtitle: "Frontend developer (JS, NodeJS)",
            time: {
                start: "Feb 2021",
                end: "Oct 2021",
                full: "9 months",
            },
        },

        description: {
            title: "My responsibilities:",
            descriptionList: [
                "Turning a PSD template into code (HTML/CSS/SASS)",
                "Integration of layout pages into project (ExpressJS/NodeJS)",
            ],
        },
    },
    {
        id: 3333,
        data: {
            title: "Spanch web-studio",
            subtitle: "Markup developer",
            time: {
                start: "Feb 2020",
                end: "July 2020",
                full: "5 months",
            },
        },

        description: {
            title: "My responsibilities:",
            descriptionList: [
                "Turning a PSD template into markup layout",
                "Integration of layout pages into project (Laravel/PHP)",
                "Making edits to existing code",
            ],
        },
    },
];

const WorkHistory = (props) => (
    <ResumeRowsSection data={dataWorkHistory} isPrinting={props.isPrinting} />
);

export default WorkHistory;
