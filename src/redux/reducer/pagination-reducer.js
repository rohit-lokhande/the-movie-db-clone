import { paginationActions, paginationState } from "../action/pagination-action"

const paginationReducer = (state = paginationState, action) => {
    switch (action.type) {
        case paginationActions.FETCH_LIST:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default paginationReducer;