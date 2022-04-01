import handleSearch from './events/handleSearch.js';

const search = document.getElementById('input-search');

search.addEventListener('input', handleSearch);
