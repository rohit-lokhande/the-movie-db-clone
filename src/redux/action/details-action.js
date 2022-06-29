import MediaDetailService from "../../services/media-detail-service";

export const detailsActions = {
    FETCH_MOVIE_DETAILS: 'FETCH_MOVIE_DETAILS',
    FETCH_TRAILER: 'FETCH_TRAILER',
    FETCH_CAST: 'FETCH_CAST'
}

export const detailsState = {
    isFetch: false,
    details: {},
    providers: [],
    trailer:[],
    cast: [],
    crew: [],
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

export function fetchTrailers(type, id) {
    console.log("sdfsdfsdfsd");
    return async function fetchTrailersFromServer(dispatch, getState) {
        console.log('Trigger DEtails call');
      
        const responce = await MediaDetailService.fetchTrailers(type, id).catch((error) => {
            console.log(error);
        });

        var filterData = responce.data.results.filter((video)=>{
            return video.site === 'YouTube' && video.type === 'Trailer';

        });
      
        dispatch({
            type: detailsActions.FETCH_TRAILER,
            payload: {
                trailer: filterData
            }
        })
    }
}

export function fetchCast(type, id) {
    console.log("sdfsdfsdfsd");
    return async function fetchCastFromServer(dispatch, getState) {
        console.log('Trigger DEtails call');
      
        const responce = await MediaDetailService.fetchCast(type, id).catch((error) => {
            console.log(error);
        });


        dispatch({
            type: detailsActions.FETCH_CAST,
            payload: {
                cast: responce.data.cast,
                crew: responce.data.crew

            }
        })
    }
}