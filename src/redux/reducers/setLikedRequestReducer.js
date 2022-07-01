import { SET_LIKED_REQUEST } from '../actions/actionTypes';
import { SET_DELETION_LIKED_REQUEST } from '../actions/actionTypes';

export const setLikedRequest = (state = [], action) => {
    switch(action.type) {
        case SET_LIKED_REQUEST: {
            return [action.payload, ...state]
        }

        case SET_DELETION_LIKED_REQUEST: {
            return [state.splice(1)]
        }

        default: {
            return state;
        }
    }
}
