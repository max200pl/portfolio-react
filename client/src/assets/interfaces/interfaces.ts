
export type Image = { name: string, blurHash?: string }

export interface InterfaceTech {
    backTech: { [key: string]: undefined | string[] }[];
    frontTech: { [key: string]: undefined | string[] }[];
}

export interface InterfaceTechWithApply {
    [key: string]: { apply: number, name: string }[];
}

export interface InterfaceTechWithApplyAll {
    backTech: InterfaceTechWithApply[];
    frontTech: InterfaceTechWithApply[];
}