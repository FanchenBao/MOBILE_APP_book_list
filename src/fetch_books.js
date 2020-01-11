const API_KEY = 'IDvmVl0LLa392jrEsPYWp9Ueuxn52nYA'; // my personal API Key
const LIST_NAME = 'hardcover-fiction';
const API_STEM = 'https://api.nytimes.com/svc/books/v3/lists';

const makeURL = listName =>
  `${API_STEM}/current/${listName}?api-key=${API_KEY}`;

async function fetchBooks(listName = LIST_NAME) {
  try {
    let resp = await fetch(makeURL(listName));
    let respJson = await resp.json();
    return respJson.results.books;
  } catch (error) {
    console.error(error);
  }
}

export {fetchBooks};
