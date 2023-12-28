
function toCamelCase(str) {
    try {
        return str.trim().replace(/\s+/g, ' ').toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
    } catch (error) {
        console.error('Error converting to camelCase:', error.message);
        return str;
    }
}


function parseDeep(data) {
    if (typeof data !== 'object' || data === null) {
        return data;
    }

    if (Array.isArray(data)) {
        return data.map(parseDeep);
    }

    const parsedObject = {};
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            try {
                parsedObject[key] = key.toLowerCase().includes('date') ? new Date(value) : JSON.parse(value);
            } catch (e) {
                parsedObject[key] = value;
            }
        }
    }

    return parsedObject;
}


class Work {
    constructor({
        name = '',
        dateFinished = undefined,
        category = '',
        client = '',
        link = undefined,
        frontTech = [],
        backTech = [],
        cardImage = undefined,
        images = [],
    }) {
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

    static create(data) {
        const newWork = new Work(data);
        return newWork.parseDeep(data);
    }
}

module.exports = {
    parseDeep,
    toCamelCase,
    Work,
}