import PaginationService from "../../services/pagination-service";

export const paginationActions = {
    FETCH_LIST: 'FETCH_LIST',
    LIST_UPDATE: 'LIST_UPDATE'
}

export const paginationState = {
    isFetch: false,
    data: [],
    sortMethod: '1'
}


const sortMethods = {
    1: { method: (a, b) => (a.popularity > b.popularity ? 1 : -1) },
    2: { method: (a, b) => (a.popularity < b.popularity ? 1 : -1) },
    3: { method: (a, b) => (a.vote_count > b.vote_count ? 1 : -1) },
    4: { method: (a, b) => (a.vote_count < b.vote_count ? 1 : -1) },
    5: { method: (a, b) => (a.release_date > b.release_date ? 1 : -1) },
    6: { method: (a, b) => (a.release_date < b.release_date ? 1 : -1) },
    7: { method: (a, b) => (a.title > b.title ? 1 : -1) },
    8: { method: (a, b) => (a.title < b.title ? 1 : -1) },

};


export function fetchPaginatedList(type,filter) {

    return async function fetchPaginatedListFromServer(dispatch, getState) {
        dispatch({
            type: paginationActions.FETCH_LIST,
            payload: {
                isFetch: false,
                data: []
            }
        })
        const responce = await PaginationService.fetchPaginationList(type,filter).catch((error) => {
            console.log(error);
        });

     var sortedData = responce.data.results.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));

        dispatch({
            type: paginationActions.FETCH_LIST,
            payload: {
                isFetch: true,
                data: sortedData
            }
        })
    }
}

export function sortList(data,sortType) {

    return async function sortListLocal(dispatch, getState) {

        dispatch({
            type: paginationActions.LIST_UPDATE,
            payload: {
                isFetch: true,
                data: data
            }
        })
  
    }
}