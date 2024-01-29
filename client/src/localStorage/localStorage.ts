// Typed function for setting a value in localStorage
function setLocalStorageItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function for reading a value from localStorage
function getLocalStorageItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item) as T;
    }
    return null;
}

export { setLocalStorageItem, getLocalStorageItem };
