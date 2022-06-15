import SearchService from "../../services/search-service";

export const searchActions = {
    FETCH_BY_QUERY: 'FETCH_BY_QUERY',
}

export const searchState = {
    isFetch: false,
    data: []
}


export function fetchMediaUsingQuery(query) {

    return async function fetchMediaUsingQueryFromServer(dispatch, getState) {
        dispatch({
            type: searchActions.FETCH_BY_QUERY,
            payload: {
                isFetch: false,
                data: []
            }
        })
        const responce = await SearchService.fetchMediaUsingQuery(query).catch((error) => {
            console.log(error);
        });
        dispatch({
            type: searchActions.FETCH_BY_QUERY,
            payload: {
                isFetch: true,
                data: responce.data.results,
            }
        })
    }
}
