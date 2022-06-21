import HomeService from "../../services/home-service"

export const homeActions = {
    FETCH_MOVIE_LIST: 'FETCH_MOVIE_LIST',
    FETCH_POPULAR_LIST: 'FETCH_POPULAR_LIST',
    FETCH_TOP_RATED_LIST: 'FETCH_TOP_RATED_LIST',
    FETCH_TRENDING_LIST: 'FETCH_TRENDING_LIST',
    FETCH_LEATHERBOARD: 'FETCH_LEATHERBOARD',
}


export const homeState = {
    popular: {
        isFetch: false,
        error: '',
        data: [],
        filter: 'Streaming'
    },
    topRated: {
        isFetch: false,
        error: '',
        data: [],
        filter: 'Movies'
    },
    freeToWatch: {
        isFetch: false,
        error: '',
        data: [],
        filter: 'Movies'
    },
    tranding: {
        isFetch: false,
        error: '',
        data: [],
        filter: 'Today'
    },
    leatherboard: {
        isFetch: false,
        error: '',
        data: [],
    }
}

export const fetchLeatherBoard = () => {

    return async function fetchLeatherboardFromServer(dispatch, getState) {
        dispatch({
            type: homeActions.FETCH_LEATHERBOARD,
            payload: {
                isFetch: false,
                data: [],
            }
        })
        const responce =  HomeService.fetchLeatherBoard();
        dispatch({
            type: homeActions.FETCH_LEATHERBOARD,
            payload: {
                isFetch: true,
                data: responce,
            }
        })
    }

}

export function fetchTopRatedList(filter) {

    return async function fetchTopRatedListFromServer(dispatch, getState) {
        dispatch({
            type: homeActions.FETCH_TOP_RATED_LIST,
            payload: {
                isFetch: false,
                data: [],
                filter: filter
            }
        })
        const responce = await HomeService.fetchTopRatedMedia(filter).catch((error) => {
            console.log(error);
        });
        dispatch({
            type: homeActions.FETCH_TOP_RATED_LIST,
            payload: {
                isFetch: true,
                data: responce.data.results,
                filter: filter
            }
        })
    }
}


export function fetchPopularList(filter) {

    return async function fetchPopularListFromServer(dispatch, getState) {
        dispatch({
            type: homeActions.FETCH_POPULAR_LIST,
            payload: {
                isFetch: false,
                data: [],
                filter: filter
            }
        })
        const responce = await HomeService.fetchPopularMedia(filter).catch((error) => {
            console.log(error);
        });
        dispatch({
            type: homeActions.FETCH_POPULAR_LIST,
            payload: {
                isFetch: true,
                data: responce.data.results,
                filter: filter
            }
        })
    }
}

export function fetchTrendingList(filter) {

    return async function fetchTrendingFromServer(dispatch, getState) {
        dispatch({
            type: homeActions.FETCH_TRENDING_LIST,
            payload: {
                isFetch: false,
                data: [],
                filter: filter
            }
        })
        const responce = await HomeService.fetchTrendingMedia(filter).catch((error) => {
            console.log(error);
        });
        dispatch({
            type: homeActions.FETCH_TRENDING_LIST,
            payload: {
                isFetch: true,
                data: responce.data.results,
                filter: filter
            }
        })
    }
}