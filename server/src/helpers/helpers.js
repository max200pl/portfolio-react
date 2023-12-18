function toCamelCase(str) {
    return str.trim().replace(/\s+/g, ' ').toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

class Work {
    constructor(
        id = "",
        name = "",
        link = "",
        category = "",
        client = "",
        date = undefined,
        technology = [{ apply: 0, name: "" }],
        cardImage = { name: "", blurHash: "" },
        images = [{ name: "", blurHash: "" }]
    ) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.category = category;
        this.client = client;
        this.date = date;
        this.technology = technology;
        this.cardImage = cardImage;
        this.images = images;
    }

    static create() {
        return new Work();
    }
}


module.exports = {
    toCamelCase,
    Work
}