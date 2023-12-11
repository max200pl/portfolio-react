export type Work = {
    id: ""
    category: ""
    client: ""
    date: Date
    name: ""
    technology: [
        { apply: number, name: "" }
    ]
    cardImage: { name: "", blurHash?: "" }
    images: [{
        name: "",
        blurHash: ""
    }]
}


export interface InterfaceTech {
    backend: { [key: string]: undefined | string[] }[];
    frontend: { [key: string]: undefined | string[] }[];
}