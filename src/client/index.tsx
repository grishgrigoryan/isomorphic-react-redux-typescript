import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Router }           from 'react-router';
import { browserHistory } from 'react-router'
import { Provider }         from 'react-redux';
import * as reducers        from '../common/reducers';
import routes               from '../common/routes';
import asyncMiddleware    from '../common/utils/AsyncMiddleware';
import { createStore,combineReducers,applyMiddleware,ReducersMapObject }  from 'redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

const initialState = window['__INITIAL_STATE__'];

const reducer = combineReducers({...reducers});
const store   = applyMiddleware(asyncMiddleware)(createStore)(reducer, initialState);
injectTapEventPlugin();
ReactDOM.render(
    <Provider store={store}>
            <Router  children={routes}  history={browserHistory}/>
    </Provider>,
    document.getElementById('body')
);
window['serverRendered'] = false;