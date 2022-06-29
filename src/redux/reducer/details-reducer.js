import { detailsActions, detailsState } from "../action/details-action"

const detailsReducer = (state = detailsState, action) => {
    switch (action.type) {
        case detailsActions.FETCH_MOVIE_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        case detailsActions.FETCH_TRAILER:
            return {
                ...state,
                trailer: action.payload.trailer
            }
        case detailsActions.FETCH_CAST:
            return {
                ...state,
                cast: action.payload.cast,
                crew: action.payload.crew

            }
        default:
            return state;
    }
}

export default detailsReducer;