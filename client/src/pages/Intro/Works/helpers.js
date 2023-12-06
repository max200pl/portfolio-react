export class Work {
    static id = ""
    static category = ""
    static client = ""
    static date = undefined // UTF8 string
    static name = ""
    // order = "" // generate form server
    static technology = [
        { apply: 0, name: "" }
    ]
    static cardImage = {
        name: "", // intro.svg
        // blurHash: ""
    }
    static images = [
        {
            name: "",
            // blurHash: ""  generate form server
        },
    ]

    constructor(
        id,
        category,
        client,
        date,
        name,
        technology,
        cardImage,
        images,
    ) {
        this.id = id
        this.category = category
        this.client = client
        this.date = date
        this.name = name
        this.technology = technology
        this.cardImage = cardImage
        this.images = images
    }

    static create() {
        return {
            category: this.category,
            client: this.client,
            date: this.date,
            name: this.name,
            technology: this.technology,
            cardImage: this.cardImage,
            images: this.images,
        }
    }
}