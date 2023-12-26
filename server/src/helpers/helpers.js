
function toCamelCase(str) {
    try {
        return str.trim().replace(/\s+/g, ' ').toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
    } catch (error) {
        console.error('Error converting to camelCase:', error.message);
        return str; // Вернуть исходную строку в случае ошибки
    }
}


class Work {
    constructor({
        _id = null,
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
        this._id = _id;
        this.name = name;
        this.dateFinished = dateFinished !== undefined ? JSON.parse(dateFinished) : undefined;
        this.category = category;
        this.client = client;
        this.link = link;
        this.frontTech = JSON.parse(frontTech);
        this.backTech = JSON.parse(backTech);
        this.cardImage = cardImage;
        this.images = images;
    }

    static create(data) {
        const newWork = new Work(data);
        delete newWork._id
        return newWork;
    }

    static updated(data) {
        return new Work(data);
    }
}

module.exports = {
    toCamelCase,
    Work
}