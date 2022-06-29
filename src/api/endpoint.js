const BASE_URL = 'https://api.themoviedb.org/3/';


const getEndPoint = (path) => {
    return `https://api.themoviedb.org/3/${path}?api_key=dee17c7fa847c4e845721f113414b74c`;
}

export const popularListEndpoint = (filter) => {
    let endpoint = '';
    if (filter === 'streaming') {
        endpoint = 'movie/popular';
    } else if (filter === 'tv') {
        endpoint = 'tv/popular';
    }
    return getEndPoint(endpoint);
}

export const topRatedListEndpoint = (filter) => {
    let endpoint = '';
    if (filter === 'streaming') {
        endpoint = 'movie/top_rated';
    } else if (filter === 'tv') {
        endpoint = 'tv/top_rated';
    }
    return getEndPoint(endpoint);
}

export const trendingListEndpoint = (filter) => {
    let endpoint = '';
    if (filter === 'day') {
        endpoint = 'trending/all/day';
    } else if (filter === 'week') {
        endpoint = 'trending/all/week';
    }
    return getEndPoint(endpoint);
}

export const leatherboardEndpoint = () => {
    console.log(`${BASE_URL}leatherboard`);
    return `${BASE_URL}leatherboard`;
}

export const mediaDetailsEndpoint = (type, movieId) => {
    let endpoint = `${type}/${movieId}`;
    return getEndPoint(endpoint);
}

export const watchProvidersEndpoint = (type, movieId) => {
    let endpoint = `${type}/${movieId}/watch/providers`;
    return getEndPoint(endpoint);
}

export const trailersEndpoint = (type, movieId) => {
    let endpoint = `${type}/${movieId}/videos`;
    return getEndPoint(endpoint);
}

export const castEndpoint = (type,movieId) => {
    let endpoint = `${type}/${movieId}/credits`;
    return getEndPoint(endpoint);
}


export const paginationEndpoint = (type, filter,page) => {
    console.log(type, "=>", filter);
    let endpoint = `${type}/${filter}`;

   return `${getEndPoint(endpoint)}&language=en-US&page=${page}`;

}

export const searchQueryEndpoint = (query) => {
    return `${getEndPoint('search/multi')}&language=en-US&query=${query}&page=1`;
}