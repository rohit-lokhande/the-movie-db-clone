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

export const mediaDetailsEndpoint = (type,movieId) => {
    return `${BASE_URL}media-details/${type}/${movieId}`;
}


export const paginationEndpoint = (type, filter) => {
    console.log(type ,"=>", filter);
    return `${BASE_URL}media/${type}/${filter}/4`;
}

export const searchQueryEndpoint = (query) => {
    return `${BASE_URL}search/${query}`;
}

export const loginEndpoint = () => {
    return `${BASE_URL}login`;
}