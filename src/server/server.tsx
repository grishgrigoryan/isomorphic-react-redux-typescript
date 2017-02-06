import * as express              from 'express';
import * as React                from 'react';
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server';
import * as path from "path";
import routes                    from '../common/routes';
import { Provider }              from 'react-redux';
import * as reducers             from '../common/reducers';
import AsyncMiddleware         from '../common/utils/AsyncMiddleware';
import DataFetcher        from '../common/utils/DataFetcher';
import { createStore,
    combineReducers,
    applyMiddleware } from 'redux';

export class Server {
    public app: express.Application;
    public static bootstrap(): Server {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();

        this.routes();
        this.api();
    }
    public api() {
        //empty for now
    }
    public config() {
        this.app.use(express.static(path.join(__dirname, '../../public')));
        this.app.set('views', path.join(__dirname, '../../views'));
        this.app.set('view engine', 'ejs');
    }

    private routes() {
        this.app.use( (req, res) => {
           // const location = createLocation(req.url);
            const reducer  = combineReducers({...reducers});
            const store    = applyMiddleware(AsyncMiddleware)(createStore)(reducer);
            match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
                if(err) {
                    console.error(err);
                    return res.status(500).end('Internal server error');
                }

                if(!renderProps)
                    return res.status(404).end('Not found');

                function renderView() {
                    const InitialView = (
                        <Provider store={store}>
                            <RouterContext {...renderProps} />
                        </Provider>
                    );
                    const componentHTML = renderToString(InitialView);
                    const initialState = store.getState();
                    let markup;
                    markup = componentHTML;
                    return res.render('index', { markup, initialState:JSON.stringify(initialState)});
                }
                DataFetcher(store.dispatch, renderProps.components, renderProps.params)
                    .then(renderView)
                    .catch(err => res.end(err.message));
            });
       });
    }

}