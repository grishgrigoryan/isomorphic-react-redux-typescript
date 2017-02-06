import  {TOGGLE_FLAG} from '../actions/Consts'
export default function nestedReducer(state = 'false', action) {
    switch(action.type) {
        case TOGGLE_FLAG:
            return !state;
        default:
            return state;
    }
}
