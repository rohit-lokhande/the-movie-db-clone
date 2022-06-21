import MediaDetailService from "../../services/media-detail-service";

export const detailsActions = {
    FETCH_MOVIE_DETAILS: 'FETCH_MOVIE_DETAILS',
}

export const detailsState = {
    isFetch: false,
    details: {}
}

export function fetchMediaDetails(type, id) {
    console.log("sdfsdfsdfsd");
    return async function fetchMediaDetailsFromServer(dispatch, getState) {
        console.log('Trigger DEtails call');
        dispatch({
            type: detailsActions.FETCH_MOVIE_DETAILS,
            payload: {
                isFetch: false,
                data: {}
            }
        })
        const responce = await MediaDetailService.fetchMediaDetails(type, id).catch((error) => {
            console.log(error);
        });

        const providerresponce = await MediaDetailService.fetchWatchProviders(type, id).catch((error) => {
            console.log(error);
        });

        var data = responce.data;
        if (providerresponce.data.results.IN == null) {
            data.providers = providerresponce.data.results.US;

        } else {
            data.providers = providerresponce.data.results.IN;
        }

        dispatch({
            type: detailsActions.FETCH_MOVIE_DETAILS,
            payload: {
                isFetch: true,
                data: data
            }
        })
    }
}