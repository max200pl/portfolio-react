import { Image, InterfaceTechWithApply, InterfaceTechWithApplyAll } from './../../../assets/interfaces/interfaces';

export type IWork = {
    id?: string;
    name: string;
    dateFinished?: Date;
    category: string;
    client?: string;
    link?: string;
    frontTech: InterfaceTechWithApply[];
    backTech: InterfaceTechWithApply[];
    cardImage: Image;
    images?: Image[];
};

export class Work implements InterfaceTechWithApplyAll {
    id;
    name;
    dateFinished;
    category;
    client;
    link;
    frontTech;
    backTech;
    cardImage;
    images;

    constructor({
        id,
        name,
        dateFinished,
        category,
        client,
        link,
        frontTech,
        backTech,
        cardImage,
        images,
    }: IWork) {
        this.id = id;
        this.name = name;
        this.dateFinished = dateFinished;
        this.category = category;
        this.client = client;
        this.link = link;
        this.frontTech = frontTech;
        this.backTech = backTech;
        this.cardImage = cardImage;
        this.images = images;
    }

    static create(): Work {
        return new Work({
            id: undefined,
            name: '',
            dateFinished: undefined,
            category: '',
            client: '',
            link: undefined,
            frontTech: [],
            backTech: [],
            cardImage: { name: '' },
            images: [],
        });
    }
}