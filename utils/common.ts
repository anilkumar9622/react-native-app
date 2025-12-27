function getItemFromLS(key: string) {
    return localStorage.getItem(key);
}

function setItemIntoLS(key: string, value: string) {
    localStorage.setItem(key, value)
}

function removeItemFromLS(key: string) {
    localStorage.removeItem(key);
}

function navigateTo(path: string) {
    window.location.href = path;
}

export {
    getItemFromLS,
    setItemIntoLS,
    navigateTo,
    removeItemFromLS
}