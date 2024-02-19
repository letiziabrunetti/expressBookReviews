const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://letiziabrune-5000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/'
});

async function getAllBooks() {

    const res = await axiosInstance.get('/');
    return await res;

}

getAllBooks().then((res) => {

    console.log(res);

});

async function getBooksByIsbn(isbn) {

    const res = await axiosInstance.get('/isbn/' + isbn);
    return await res.json();

}

async function getBooksByAuthor(author) {

    const res = await axiosInstance.get('/author/' + author);
    return await res.json();

}

async function getBooksByTitle(title) {

    const res = await axiosInstance.get('/title/' + title);
    return await res.json();

}