const axios = require('axios');

const apiKey = "AIzaSyDL1ThwnwHUCXEUDXctL6lCRIW_TrTBR4g"

getBooks = async () => {
   
    const categories = [
        "Art",
        "Fiction",
        "Biography",
        "Business",
        "Cooking",
        "Drama",
        "Fantasy",
        "Education",
        "History",
        "Horror",
        "Humor",
        "Comedy",
        "Juvenile",
        "Philosophy",
        "Romance",
        "Science",
        "Suspense",
        "Sports",
        "Travel"
    ];

    let allBooks = [];
    let genres = []
    for (let i = 0; i < categories.length; i++) {

        const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=subject:${categories[i]}&maxResults=10&orderBy=relevance&key=${apiKey}`);
        const data = response.data.items;
        const books = data.map(book => {
            book.volumeInfo.categories?.forEach(element => {
                genres.push(element)
            });
            return {
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                categories: book.volumeInfo.categories,
                image: book.volumeInfo.imageLinks?.smallThumbnail,
            }
        })
        allBooks = [...allBooks, ...books]

    }
    let allGenres = [];
    genres.forEach(genre => {
        if (!allGenres.includes(genre)) {
            allGenres.push(genre)
        }
    })
    return allBooks

}


module.exports = {
    getBooks
}