import { detailsActions, detailsState } from "../action/details-action"

const detailsReducer = (state = detailsState, action) => {
    switch (action.type) {
        case detailsActions.FETCH_MOVIE_DETAILS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default detailsReducer;