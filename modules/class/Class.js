'use strict'

function Class(id, description, year) {
    let classInstance = {};

    classInstance.id = id;
    classInstance.description = description;
    classInstance.year = year;

    return classInstance;
}

module.exports = Class;