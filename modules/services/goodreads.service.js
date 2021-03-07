const HtmlParser = require('node-html-parser');
const Axios = require('axios');

const goodreadsUrl = "https://www.goodreads.com";
const goodreadsSearchPath = "/search";
const goodreadsBookPath = "/book/show/"

/**
 * Returns a link to the first book found for a search term, or null if none found.
 * 
 * @param {String} searchTerm The search term provided for the book 
 */
const findFirst = (searchTerm) => new Promise((resolve, reject) => {
  Axios({
    method: 'get',
    url: goodreadsUrl + goodreadsSearchPath,
    params: {
      q: searchTerm,
      searchType: "books"
    },
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0"
    }
  }).then(response => {

    const searchResults = HtmlParser.parse(response.data);
    const firstBookId = searchResults.querySelector('.tableList').querySelector('.u-anchorTarget').id;
    if (firstBookId != null) {
      resolve(goodreadsUrl + goodreadsBookPath + firstBookId);
    } else {
      resolve(null);
    }
  }).catch(error => reject("Failed to query Goodreads."));
});
  
exports.findFirst = findFirst;