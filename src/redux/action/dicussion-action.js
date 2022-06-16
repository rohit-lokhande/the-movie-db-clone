import DicussionService from "../../services/dicussion-service"

export const dicussionActions = {
    FETCH_DICUSSIONS: 'FETCH_DICUSSIONS',
    ADD_DICUSSIONS: 'ADD_DICUSSIONS',

}

export const dicussionState = {
    isFetch: false,
    dicussion: []
}

export function fetchDicussions() {
    return async function fetchDicussionsFromServer(dispatch, getState) {
        dispatch({
            type: dicussionActions.FETCH_DICUSSIONS,
            payload: {
                isFetch: false,
                dicussion: []
            }
        })
        const responce = DicussionService.fetchDicussion();
        dispatch({
            type: dicussionActions.FETCH_DICUSSIONS,
            payload: {
                isFetch: true,
                dicussion: responce
            }
        })
    }
}

export function addDicussions(chat, reply) {
    return async function addDicussionsFromServer(dispatch, getState) {

        const responce = DicussionService.updateDicussion(chat, reply);
        dispatch({
            type: dicussionActions.FETCH_DICUSSIONS,
            payload: {
                isFetch: true,
                dicussion: responce
            }
        })
    }
}