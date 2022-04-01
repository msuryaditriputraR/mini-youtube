import API_KEY from './key.js';

export default function getVideo(id) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=player&key=${API_KEY}&id=${id}`;

    return fetch(url);
}
