const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return [];
}


const saveWishList = id => {
    const storedWishList = getStoredWishList();
    const exists = storedWishList.find(bookId => bookId === id)
    if (!exists) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList))
    }
}

export { getStoredWishList, saveWishList }