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
            responsibilities: [
                "Implemented / customized new features for desktop apps.",
                "Made markup pages for a website.",
                "Developed highly-responsive pixel-perfect user interface components.",
                "Mentoring new employers.",
                "Refactoring existing code.",
                "Participate in the architecture of new projects.",
                "Coordinated with the development team to discuss user interface ideas and applications.",
                "Fixed bugs and supported projects."
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
            responsibilities: [
                "Cross - browser layout with templates (Figma)",
                "Implementation of responsive sliders (native js/@media)",
                "Application of BEM methodology",
                "Turning a PSD template into code (HTML/CSS/SASS)",
                "Integration of layout pages into project (ExpressJS/NodeJS)",
                " Sliders in pure js",
                "Form submission (fetch, axios)"
            ],
        },
    },
    {
        id: 3333,
        data: {
            title: "Spanch web-studio",
            subtitle: "Junior HTML developer",
            time: {
                start: "Feb 2020",
                end: "July 2020",
                full: "5 months",
            },
        },

        description: {
            title: "My responsibilities:",
            responsibilities: [
                "Adaptation for different screen sizes (@media)",
                "Turning a PSD template into code HTMLCSS",
                "Integration of layout pages into project (Laravel/PHP)",
                "Making edits to existing code (HTML/CSS)",
            ],
        },
    },
];


const WorkHistory = () => <ResumeRowsSection data={dataWorkHistory} />

export default WorkHistory;
