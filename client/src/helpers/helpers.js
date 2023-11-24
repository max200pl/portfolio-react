import { useEffect } from 'react';

export function addBodyClass(className) {
    return () => useEffect(() => {
        document.body.classList.add(className);
        return () => { document.body.classList.remove(className); }
    });
}

/**
 * Add an item to a localStorage() object
 * @param {String} name  The localStorage() key
 * @param {String} key   The localStorage() value object key
 * @param {String} value The localStorage() value object value
 */
export const addToLocalStorageObj = function (name, key, value) {
    // Get the existing data
    var existing = localStorage.getItem(name);

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : {};

    // Add new data to localStorage Array
    existing[key] = value;

    // Save back to localStorage
    localStorage.setItem(name, JSON.stringify(existing));
};

/**
 * Get object from localStorage() 
 * @param {String} name  The localStorage() key
 * @param {String} key   The localStorage() value object key
 * @param {String} value The localStorage() value object value
 * @return {Object} 
 */
export const getFromLocalStorageObj = function (name, key, value = undefined) {
    // Get the existing data
    var existing = localStorage.getItem(name);

    if (name && !key) {
        return existing ? JSON.parse(existing) : "";
    } else if (name && key) {
        return existing ? JSON.parse(existing)[key] : "";
    } else if (!name) {
        return "";
    }
};
