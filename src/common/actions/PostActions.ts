import  * as fetch from 'isomorphic-fetch'
import  {FETCH_POST} from './Consts'

export function fetchPosts(){
    return {
        type: FETCH_POST,
        promise: fetch('http://www.mocky.io/v2/5898c45c1100009d0f038b1e')

    }
}