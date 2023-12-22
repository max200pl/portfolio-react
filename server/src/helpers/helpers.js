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
        this.dateFinished = JSON.parse(dateFinished);
        this.category = category;
        this.client = client;
        this.link = link;
        this.frontTech = JSON.parse(frontTech);
        this.backTech = JSON.parse(backTech);
        this.cardImage = cardImage;
    }

    static create(data) {
        return new Work(data);
    }

    static updated(data) {
        return new Work(data);
    }
}

module.exports = {
    toCamelCase,
    parseStringsToNumbers,
    Work
}