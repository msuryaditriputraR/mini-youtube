import API_KEY from './key.js';

export default function getSearchResults(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${query}&type=video&maxResults=12`;

    return fetch(url);
}
