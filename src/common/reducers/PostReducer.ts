import {FETCH_POST} from '../actions/Consts'

const defaultState =  [];

export default function postReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_POST:
            return defaultState.concat(action.res);
        default:
            return state;
    }
}