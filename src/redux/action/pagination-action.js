import PaginationService from "../../services/pagination-service";

export const paginationActions = {
    FETCH_LIST: 'FETCH_LIST',
}

export const paginationState = {
    isFetch: false,
    data: {}
}


export function fetchPaginatedList(type,filter) {

    return async function fetchPaginatedListFromServer(dispatch, getState) {
        dispatch({
            type: paginationActions.FETCH_LIST,
            payload: {
                isFetch: false,
                data: {}
            }
        })
        const responce = await PaginationService.fetchPaginationList(type,filter).catch((error) => {
            console.log(error);
        });
        dispatch({
            type: paginationActions.FETCH_LIST,
            payload: {
                isFetch: true,
                data: responce.data
            }
        })
    }
}