import * as React from 'react';
import { Route ,Redirect} from 'react-router';
import App                     from './components/index';
import Posts                    from './components/Posts';
import Hello                    from './components/Hello';
export default (
    <Route  component={App} path="/">
        <Route component={Hello} path="hello" />
        <Route component={Posts} path="posts" />
    </Route>

);
