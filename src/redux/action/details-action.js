import MediaDetailService from "../../services/media-detail-service";

export const detailsActions = {
    FETCH_MOVIE_DETAILS: 'FETCH_MOVIE_DETAILS',
}

export const detailsState = {
    isFetch: false,
    details: {}
}

export function fetchMediaDetails(id) {

    return async function fetchMediaDetailsFromServer(dispatch, getState) {
        dispatch({
            type: detailsActions.FETCH_MOVIE_DETAILS,
            payload: {
                isFetch: false,
                data: {}
            }
        })
        const responce = await MediaDetailService.fetchMediaDetails(id).catch((error) => {
            console.log(error);
        });
        dispatch({
            type: detailsActions.FETCH_MOVIE_DETAILS,
            payload: {
                isFetch: true,
                data: responce.data
            }
        })
    }
}