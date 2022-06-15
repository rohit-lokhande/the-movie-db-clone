import { homeActions, homeState } from "../action/home-action"

const homeReducer = (state = homeState, action) => {
    switch (action.type) {
        case homeActions.FETCH_TRENDING_LIST:
            return {
                ...state,
                tranding: action.payload
            }
        case homeActions.FETCH_POPULAR_LIST:
            return {
                ...state,
                popular: action.payload
            }
        case homeActions.FETCH_TOP_RATED_LIST:
            return {
                ...state,
                topRated: action.payload
            }
        case homeActions.FETCH_LEATHERBOARD:
            return {
                ...state,
                leatherboard: action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;