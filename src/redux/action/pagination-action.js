import PaginationService from "../../services/pagination-service";

export const paginationActions = {
    SET_INITIAL_LOADING: 'SET_INITIAL_LOADING',
    SET_FETCHED_CONTENTS: 'SET_FETCHED_CONTENTS',
    SET_LOADING: 'SET_LOADING',
    SORT_LIST: 'SORT_LIST'
}

export const paginationState = {
    isFetch: false,
    isLoading: false,
    page: 1,
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


export function fetchPaginatedList(type, filter, page) {
    return async function fetchPaginatedListFromServer(dispatch, getState) {

        dispatch({
            type: (page === 1) ? paginationActions.SET_INITIAL_LOADING : paginationActions.SET_LOADING,
        })

        const responce = await PaginationService.fetchPaginationList(type, filter, page).catch((error) => {
            console.log(error);
        });

        var sortedData = responce.data.results.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));

        setTimeout(() => {
            dispatch({
                type: paginationActions.SET_FETCHED_CONTENTS,
                payload: {
                    page: page,
                    data: sortedData
                }
            })
        }, 1000);


    }
}

export function sortList(data, sortType) {

    return async function sortListLocal(dispatch, getState) {

        dispatch({
            type: paginationActions.SORT_LIST,
            payload: {
                isFetch: true,
                data: data
            }
        })

    }
}