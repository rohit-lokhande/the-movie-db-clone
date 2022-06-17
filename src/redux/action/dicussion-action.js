import DicussionService from "../../services/dicussion-service"

export const dicussionActions = {
    FETCH_DICUSSIONS: 'FETCH_DICUSSIONS',
    ADD_DICUSSIONS: 'ADD_DICUSSIONS',

}

export const dicussionState = {
    isFetch: false,
    movie: [],
    tv:[]
}

export function fetchDicussions() {
    return async function fetchDicussionsFromServer(dispatch, getState) {
        dispatch({
            type: dicussionActions.FETCH_DICUSSIONS,
            payload: {
                isFetch: false,
                movie: [],
    tv:[]
            }
        })
        const responce = DicussionService.fetchDicussion();

        var movies = responce.filter(function(item){
            return item.category === 'movie';
         });
        
         var tv = responce.filter(function(item){
            return item.category === 'tv';
         });

        dispatch({
            type: dicussionActions.FETCH_DICUSSIONS,
            payload: {
                isFetch: true,
                movie: movies,
                tv:tv
            }
        })
    }
}

export function addDicussions(chat, reply) {
    return async function addDicussionsFromServer(dispatch, getState) {

        const responce = DicussionService.updateDicussion(chat, reply);
        var movies = responce.filter(function(item){
            return item.category === 'movie';
         });
        
         var tv = responce.filter(function(item){
            return item.category === 'tv';
         });

        dispatch({
            type: dicussionActions.ADD_DICUSSIONS,
            payload: {
                isFetch: true,
                movie: movies,
                tv:tv
            }
        })
    }
}