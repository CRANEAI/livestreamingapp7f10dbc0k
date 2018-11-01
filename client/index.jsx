
        //----------------------------------------------------------------------------------------------------------
        //Declariations and libraries
        //----------------------------------------------------------------------------------------------------------
        import React                                            from 'react';
        import ReactDOM                                         from 'react-dom';
        import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
        import { Provider }                                     from 'react-redux';
        import { createStore, applyMiddleware }                 from 'redux';
        import promise                                          from 'redux-promise';
        import createMemoryHistory                              from 'history/createMemoryHistory';
        import App                                              from './container/app.jsx';
       
        //----------------------------------------------------------------------------------------------------------
            //Parent Components
        //----------------------------------------------------------------------------------------------------------
        
        import notifications from './components/notifications.jsx'
import live from './components/live.jsx'
import "aw-r_m from './components/"aw-r m.jsx'
import sign_up from './components/sign up.jsx'
import search from './components/search.jsx'
import chat from './components/chat.jsx'
import get_started from './components/get started.jsx'
import edit_profile from './components/edit profile.jsx'
import follow from './components/follow.jsx'
import composite from './components/composite.jsx'
import share from './components/share.jsx'
import sign_up from './components/sign up.jsx'
       
        //----------------------------------------------------------------------------------------------------------
        //Reducer
        //----------------------------------------------------------------------------------------------------------
        import store                                            from './reducers/index.jsx';

        //----------------------------------------------------------------------------------------------------------
            //Middleware setup
        //----------------------------------------------------------------------------------------------------------
        const history                                 = createMemoryHistory();
        const createStoreWithMiddleware               = applyMiddleware(promise)(createStore);

        //----------------------------------------------------------------------------------------------------------
        //Routes Setup
        //----------------------------------------------------------------------------------------------------------
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        
                <Router basename="/" history={ history } >
                    <Switch>
                        <Route path "/" component={notifications}
                        <Route path="/notifications" component={notifications} /> 
,<Route path="/live" component={live} /> 
,<Route path="/"aw-r_m" component={"aw-r_m} /> 
,<Route path="/sign_up" component={sign_up} /> 
,<Route path="/search" component={search} /> 
,<Route path="/chat" component={chat} /> 
,<Route path="/get_started" component={get_started} /> 
,<Route path="/edit_profile" component={edit_profile} /> 
,<Route path="/follow" component={follow} /> 
,<Route path="/composite" component={composite} /> 
,<Route path="/share" component={share} /> 
,<Route path="/sign_up" component={sign_up} /> 

                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('app') || document.createElement('div')
          );
        