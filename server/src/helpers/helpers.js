const lodash = require('lodash');

function toCamelCase(str) {
    return str.trim().replace(/\s+/g, ' ').toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function parseStringsToNumbers(obj) {
    return lodash.cloneDeepWith(obj, (value) => {
        if (lodash.isString(value)) {
            const parsedValue = parseFloat(value);
            return isNaN(parsedValue) ? value : parsedValue;
        }
    });
}

class Work {
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
    }) {
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

    static create({
        name,
        dateFinished,
        category,
        client,
        link,
        frontTech,
        backTech,
        cardImage,
        images,
    }) {
        return new Work({
            name: name ?? '',
            dateFinished: JSON.parse(dateFinished) ?? undefined,
            category: category ?? '',
            client: client ?? '',
            link: link ?? undefined,
            frontTech: JSON.parse(frontTech),
            backTech: JSON.parse(backTech),
            cardImage: cardImage ?? undefined,
            images: images,
        });
    }
}

module.exports = {
    toCamelCase,
    parseStringsToNumbers,
    Work
}