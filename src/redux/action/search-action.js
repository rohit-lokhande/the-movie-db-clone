import SearchService from "../../services/search-service";

export const searchActions = {
    FETCH_BY_QUERY: 'FETCH_BY_QUERY',
}

export const searchState = {
    isFetch: false,
    movies: [],
    tv:[]
}


export function fetchMediaUsingQuery(query) {

    return async function fetchMediaUsingQueryFromServer(dispatch, getState) {
        dispatch({
            type: searchActions.FETCH_BY_QUERY,
            payload: {
                isFetch: false,
                movies: [],
                tv:[]
            }
        })
        const responce = await SearchService.fetchMediaUsingQuery(query).catch((error) => {
            console.log(error);
        });


var movies = responce.data.results.filter(function(item){
    return item.media_type === 'movie';
 });

 var tv = responce.data.results.filter(function(item){
    return item.media_type === 'tv';
 });

        dispatch({
            type: searchActions.FETCH_BY_QUERY,
            payload: {
                isFetch: true,
                movies: movies,
                tv:tv           }
        })
    }
}
