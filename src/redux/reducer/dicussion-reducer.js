import { dicussionActions, dicussionState } from "../action/dicussion-action"

const dicussionReducer = (state = dicussionState, action) => {
    switch (action.type) {
        case dicussionActions.FETCH_DICUSSIONS:
            return {
                ...state,
                ...action.payload
            }
        case dicussionActions.ADD_DICUSSIONS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default dicussionReducer;