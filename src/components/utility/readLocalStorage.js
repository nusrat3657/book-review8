const getStoredReadBooks = () =>{
    const storedReadBooks = localStorage.getItem('read-books');
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}


const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.find(bookId => bookId === id)
    if (!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
}

export { getStoredReadBooks, saveReadBooks }