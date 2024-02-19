const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://letiziabrune-5000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/'
});

async function getAllBooks() {

    return await axiosInstance.get('/');

}

getAllBooks().then((res) => {

    console.log(res.data);

});

async function getBooksByIsbn(isbn) {

    return await axiosInstance.get('/isbn/' + isbn);

}

getBooksByIsbn(1).then((res) => {

    console.log(res.data);

});

async function getBooksByAuthor(author) {

    return await axiosInstance.get('/author/' + author);

}

getBooksByAuthor("Unknown").then((res) => {

    console.log(res.data);

});

async function getBooksByTitle(title) {

    return await axiosInstance.get('/title/' + title);

}

getBooksByTitle("One Thousand and One Nights").then((res) => {

    console.log(res.data);

});