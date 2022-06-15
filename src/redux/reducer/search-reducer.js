import { searchActions, searchState } from "../action/search-action"

const searchReducer = (state = searchState, action) => {
    switch (action.type) {
        case searchActions.FETCH_BY_QUERY:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default searchReducer; 