export const getStorage = (value) => {
    return localStorage.getItem(value);
}

export const setStorage = (key, value) => {
    return localStorage.setItem(key, value);
}

export const removeStorage = (value) => {
    return localStorage.removeItem(value);
}

export const clearStorage = (value) => {
    return localStorage.clear(value);
}