import API_KEY from './key.js';

export default function getChannelDetail(id) {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${id}&key=${API_KEY}`;

    return fetch(url);
}
