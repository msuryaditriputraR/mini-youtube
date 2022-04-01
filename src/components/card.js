export default function Card({
    thumbnail,
    title,
    desc,
    avatar,
    name,
    subs,
    video
}) {
    const cardName = document.createElement('h3');
    cardName.className = 'card__name';
    cardName.innerText = name;

    const cardSubs = document.createElement('p');
    cardSubs.className = 'card__subs';
    cardSubs.innerText = `subs : ${subs}`;

    const cardDetail = document.createElement('div');
    cardDetail.append(cardName, cardSubs);

    const cardAvatar = document.createElement('img');
    cardAvatar.src = avatar;
    cardAvatar.className = 'card__avatar';

    const cardChannel = document.createElement('div');
    cardChannel.className = 'card__channel';
    cardChannel.append(cardAvatar, cardDetail);

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card__title';
    cardTitle.innerText = title;

    const cardDesc = document.createElement('p');
    cardDesc.className = 'card__desc';
    cardDesc.innerText = desc;

    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    cardBody.append(cardTitle, cardDesc, cardChannel);

    const card = document.createElement('div');
    card.className = 'card';

    if (thumbnail) {
        const cardThumbnail = document.createElement('img');
        cardThumbnail.src = thumbnail;
        cardThumbnail.className = 'card__thumbnail';

        card.append(cardThumbnail);
    }

    if (video) {
        const div = document.createElement('div');
        div.innerHTML = video;

        card.append(div);
    }

    card.append(cardBody);

    return card;
}
