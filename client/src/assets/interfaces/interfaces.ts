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

export type Image = { name: string, blurHash?: string }

export interface ITechnology {
    [key: string]: undefined | TechnologyName[]
}

export type TechnologyName = string
export interface Technology {
    apply: number, name: string
}
export interface InterfaceTechWithApply {
    [key: string]: Technology[];
}
export interface InterfaceTechnologies {
    frontend: ITechnology[];
    backend: ITechnology[];
}
export interface InterfaceTechWithApplyAll {
    backTech: InterfaceTechWithApply[];
    frontTech: InterfaceTechWithApply[];
}

export type Categories = string[]