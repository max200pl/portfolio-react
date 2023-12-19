export type Work = {
    id: "";
    category: "";
    client: "";
    date: Date;
    name: "";
    frontTech: [{ apply: number; name: "" }];
    backTech: [{ apply: number; name: "" }];
    cardImage: { name: ""; blurHash?: "" };
    images: [
        {
            name: "";
            blurHash: "";
        }
    ];
};

export interface InterfaceTech {
    backTech: { [key: string]: undefined | string[] }[];
    frontTech: { [key: string]: undefined | string[] }[];
}

export interface InterfaceTechWithApply {
    [key: string]: { apply: number; name: string }[];
}

export interface InterfaceTechWithApplyAll {
    backTech: InterfaceTechWithApply[];
    frontTech: InterfaceTechWithApply[];
}