
const getStoredBooks = (key) =>{
    const listedBooks = localStorage.getItem(key);
    if (listedBooks)    return JSON.parse(listedBooks);
    return [];
}

const saveBooksToStorage = (key, id) =>{
    const listedBooks = getStoredBooks(key);
    if (!listedBooks.includes(id)){
        listedBooks.push(id);
        localStorage.setItem(key, JSON.stringify(listedBooks));
    }
}

export {getStoredBooks, saveBooksToStorage};