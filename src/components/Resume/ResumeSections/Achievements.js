import ResumeRowsSection from "../ResumeRowsSection/ResumeRowsSection";

const dataWorkHistory = [
    {
        id: 11111,
        data: {
            title: "Youth Technical Creativity",
            link: "https://nure.ua/ru/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam/laboratorii-kafedry/studencheskoe-konstruktorskoe-tehnologicheskoe-bjuro-po-robototehnike-i-mehatronike",
            time: {
                start: "Place: First place",
                end: "Nomination: devices and mechanism",
            },
        },

        description: {
            title: "Automation and computer-integrated technologies",
            responsibilities: [],
        },
    },
];


const Achievements = () => {
    return (
        <ResumeRowsSection data={dataWorkHistory} />
    );
};

export default Achievements;
