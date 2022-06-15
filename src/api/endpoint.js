const BASE_URL = 'http://localhost:8000/';

export const popularListEndpoint = (filter) => {
    let endpoint = '';
    if (filter === 'streaming') {
        endpoint = 'movies/popular';
    } else if (filter === 'tv') {
        endpoint = 'tv/popular';
    }
    return `${BASE_URL}${endpoint}`;
}

export const topRatedListEndpoint = (filter) => {
    let endpoint = '';
    if (filter === 'streaming') {
        endpoint = 'movies/top-rated';
    } else if (filter === 'tv') {
        endpoint = 'tv/top-rated';
    }
    return `${BASE_URL}${endpoint}`;
}

export const trendingListEndpoint = (filter) => {
    let endpoint = '';
    if (filter === 'day') {
        endpoint = 'trending/day';
    } else if (filter === 'week') {
        endpoint = 'trending/week';
    }
    return `${BASE_URL}${endpoint}`;
}

export const leatherboardEndpoint = () => {
    console.log(`${BASE_URL}leatherboard`);
    return `${BASE_URL}leatherboard`;
}

export const mediaDetailsEndpoint = (movieId) => {
    return `${BASE_URL}/movie/details/${movieId}`;
}


export const paginationEndpoint = (type, filter) => {
    return `${BASE_URL}${type}/${filter}/4`;
}

export const searchQueryEndpoint = (query) => {
    return `${BASE_URL}search/${query}`;
}