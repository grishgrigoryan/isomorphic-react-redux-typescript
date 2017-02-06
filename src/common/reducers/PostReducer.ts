import {FETCH_POST} from '../actions/Consts'
import * as Immutable from 'immutable';

const defaultState =  Immutable.List.of();

export default function postReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_POST:
            return defaultState.concat(action.res);
        default:
            return state;
    }
}