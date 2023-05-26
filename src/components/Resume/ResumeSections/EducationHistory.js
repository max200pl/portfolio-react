import ResumeRowsSection from "../ResumeRowsSection/ResumeRowsSection";

const dataWorkHistory = [
    {
        id: 11111,
        data: {
            title: "NURE",
            subtitle: "Kharkiv National University of Radio Electronics",
            time: {
                start: "Sep 2014",
                end: "Feb 2019",
                full: "4.5 years",
            },
        },

        description: {
            title: "Automation and computer-integrated technologies",
            descriptionList:
                [],
        },
    },
    {
        id: 22222,
        data: {
            title: "DDMA",
            subtitle: "College of Donbas State Engineering Academy",
            time: {
                start: "Sep 2010",
                end: "July 2014",
                full: "4 years",
            },
        },

        description: {
            title: "Technical maintenance of machines with PU and RTC",
            descriptionList: [],
        },
    },
];


const EducationHistory = () => {
    return (
        <ResumeRowsSection data={dataWorkHistory} />
    );
};

export default EducationHistory;
