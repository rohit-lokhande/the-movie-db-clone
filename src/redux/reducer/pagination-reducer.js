import { paginationActions, paginationState } from "../action/pagination-action"

const paginationReducer = (state = paginationState, action) => {
    switch (action.type) {

        case paginationActions.SET_INITIAL_LOADING:
            return {
                isFetch: false,
                isLoading: false,
                page: 1,
                data: [],
                sortMethod: '1'
            }

        case paginationActions.SET_FETCHED_CONTENTS:

            var data = [
                ...state.data,
                ...action.payload.data
            ]
            return {
                isFetch: true,
                isLoading: false,
                page: action.payload.page,
                data: data,
                sortMethod: '1'
            }

        case paginationActions.SET_LOADING:
            return {
                isFetch: true,
                isLoading: true,
                page: 1,
                data: [...state.data],
                sortMethod: '1'
            }

        default:
            return state;
    }
}

export default paginationReducer;