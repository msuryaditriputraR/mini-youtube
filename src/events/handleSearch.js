import getChannelDetail from '../api/getChannelDetail.js';
import getSearchResults from '../api/getSearchResults.js';
// import getVideo from '../api/getVideo.js';
import Card from '../components/card.js';
import subsFormater from '../helper/subsFormater.js';

async function handleSearch() {
    const value = this.value;

    if (value) {
        const results = document.getElementById('results');
        results.innerHTML = '<p class="center">Loading ... </p>';

        try {
            const response = await getSearchResults(value);
            const data = await response.json();
            const items = await data.items;

            const cards = items.map(async item => {
                const channelId = item.snippet.channelId;
                // const videoId = item.id.videoId;
                const title = item.snippet.title;
                const desc = item.snippet.description;
                const thumbnail = item.snippet.thumbnails.high.url;

                // Channel
                const response = await getChannelDetail(channelId);
                const data = await response.json();
                const channel = data.items[0];
                const name = channel.snippet.title;
                const avatar = channel.snippet.thumbnails.medium.url;
                const subs = subsFormater(channel.statistics.subscriberCount);

                // video
                // const responseV = await getVideo(videoId);
                // const dataVideo = await responseV.json();
                // const video = dataVideo.items[0].player.embedHtml;

                return Card({
                    // video,
                    thumbnail,
                    title,
                    desc,
                    name,
                    avatar,
                    subs
                });
            });

            results.innerHTML = '';
            cards.forEach(async card => results.appendChild(await card));
        } catch (e) {
            console.error(e);
        }
    }
}

export default handleSearch;
