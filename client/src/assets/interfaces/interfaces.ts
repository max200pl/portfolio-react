
export type Image = { name: string, blurHash?: string }

export interface InterfaceTech {
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
    backTech: InterfaceTech[];
    frontTech: InterfaceTech[];
}
export interface InterfaceTechWithApplyAll {
    backTech: InterfaceTechWithApply[];
    frontTech: InterfaceTechWithApply[];
}