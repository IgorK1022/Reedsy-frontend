module.exports = {
    getTitle(books) {
        for (let i = 0; i < books.length; i ++) {
            const words = books[i].slug.split('-')
            for (let j = 0; j < words.length; j ++)
                words[j] = words[j].charAt(0).toUpperCase() + words[j].substring(1)
            books[i].title = words[0]
            for (let j = 1; j < words.length; j ++)
                books[i].title = books[i].title.concat(' ' + words[j])
            books[i].synopsis = books[i].synopsis.substr(0, 200) + '...'
        }
    }    
}
