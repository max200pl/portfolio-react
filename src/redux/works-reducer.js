const ADD_WORK = "ADD_WORK";

let initialState = {
    works: [
        {
            id: 1,
            categoryWork: "website",
            workName: "Portfolio",
            endWorkTime: 2020,
            clientName: "Maksym Poskanniy",
            useTechnology: [
                { nameTech: "JavaScript", applyTech: 70 },
                { nameTech: "Html 5", applyTech: 100 },
                { nameTech: "SASS", applyTech: 100 },
                { nameTech: "Flexbox", applyTech: 60 },
                { nameTech: "Media Queries", applyTech: 100 },
                { nameTech: "BEM methodology", applyTech: 100 },
                { nameTech: "Gulp 4", applyTech: 60 },
                { nameTech: "Git", applyTech: 60 }
            ],
            "img": "/images/modal/modal-works-slider/photo-Portfolio/intro.png"
        },
        {
            id: 2,
            categoryWork: "landing",
            workName: "MoGo",
            endWorkTime: 2020,
            clientName: "Creative Agency",
            useTechnology: [
                { nameTech: "JavaScript", applyTech: 10 },
                { nameTech: "Html 5", applyTech: 10 },
                { nameTech: "SASS", applyTech: 30 },
                { nameTech: "Flexbox", applyTech: 40 },
                { nameTech: "Media Queries", applyTech: 10 },
                { nameTech: "BEM methodology", applyTech: 50 },
                { nameTech: "Gulp 4", applyTech: 60 },
                { nameTech: "Git", applyTech: 30 }
            ],
            "img": "/images/modal/modal-works-slider/photo-MoGo/intro.png"
        },
        {
            id: 3,
            categoryWork: "landing",
            workName: "Power",
            endWorkTime: 2020,
            clientName: "Creative Agency",
            useTechnology: [
                { nameTech: "JavaScript", applyTech: 10 },
                { nameTech: "Html 5", applyTech: 10 },
                { nameTech: "SASS", applyTech: 30 },
                { nameTech: "Flexbox", applyTech: 40 },
                { nameTech: "Media Queries", applyTech: 10 },
                { nameTech: "BEM methodology", applyTech: 50 },
                { nameTech: "Gulp 4", applyTech: 60 },
                { nameTech: "Git", applyTech: 30 }
            ],
            "img": "/images/modal/modal-works-slider/photo-Power/intro.png"
        },
        {
            id: 4,
            categoryWork: "landing",
            workName: "Anveshan",
            endWorkTime: 2020,
            clientName: "Creative Agency",
            "img": "/images/modal/modal-works-slider/photo-anveshan/title.png",
            useTechnology: [
                { nameTech: "JavaScript", applyTech: 10 },
                { nameTech: "Html 5", applyTech: 10 },
                { nameTech: "SASS", applyTech: 30 },
                { nameTech: "Flexbox", applyTech: 40 },
                { nameTech: "Media Queries", applyTech: 10 },
                { nameTech: "BEM methodology", applyTech: 50 },
                { nameTech: "Gulp 4", applyTech: 60 },
                { nameTech: "Git", applyTech: 30 }
            ]
        },
        {
            id: 5,
            categoryWork: "landing",
            workName: "Pantoflex",
            endWorkTime: 2020,
            clientName: "Test work",
            useTechnology: [
                { nameTech: "JavaScript", applyTech: 10 },
                { nameTech: "Html 5", applyTech: 10 },
                { nameTech: "SASS", applyTech: 30 },
                { nameTech: "Flexbox", applyTech: 40 },
                { nameTech: "Media Queries", applyTech: 10 },
                { nameTech: "BEM methodology", applyTech: 50 },
                { nameTech: "Gulp 4", applyTech: 60 },
                { nameTech: "Git", applyTech: 30 }
            ],
            "img": "/images/modal/modal-works-slider/photo-pantoflex/title.png"
        },
        {
            id: 6,
            categoryWork: "website",
            workName: "engPlatform",
            endWorkTime: 2020,
            clientName: "FreeLance",
            useTechnology: [
                { nameTech: "JavaScript", applyTech: 10 },
                { nameTech: "Html 5", applyTech: 10 },
                { nameTech: "SASS", applyTech: 30 },
                { nameTech: "Flexbox", applyTech: 40 },
                { nameTech: "Media Queries", applyTech: 10 },
                { nameTech: "BEM methodology", applyTech: 50 },
                { nameTech: "Gulp 4", applyTech: 60 },
                { nameTech: "Git", applyTech: 30 }
            ],
            "img": "/images/modal/modal-works-slider/photo-engPlatform/title.png"
        }
    ],
}

export const worksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORK:
            //let body = action.newWork;
            return

        default:
            return state
    }
}

export const newWorkCreator = (newWorkBody) => ({ type: ADD_WORK, newWorkBody })

export default worksReducer;