import { Image, InterfaceTechWithApply, InterfaceTechWithApplyAll } from './../../../assets/interfaces/interfaces';

export type IWork = {
    _id?: string;
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
    _id?: string;
    name: string;
    dateFinished?: Date;
    category: string;
    client?: string;
    link?: string;
    frontTech: InterfaceTechWithApply[];
    backTech: InterfaceTechWithApply[];
    cardImage: Image;
    images?: Image[];

    constructor({
        _id,
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
        this._id = _id;
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

    static create(data: IWork): Work {
        return new Work(data);
    }
}