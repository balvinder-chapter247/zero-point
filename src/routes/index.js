import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Router, Switch, Route,Redirect } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { createBrowserHistory as createHistory } from 'history';
import {routerList} from './RouterList';
import { RestrictRoute } from './routes';
// import { GlobalLoader } from '../helper/CommonServices/index';

const Routing = () => {
  const history = createHistory();
  // const loader = GlobalLoader();
    
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback="...loading">
          {console.log(routerList,"this is listing")}
          <Switch>
            {routerList.map((routes) => (
              <RestrictRoute {...routes} />
            ))}
           
           {/* <Route
              render={() => <Redirect to={{ pathname: AppRoutes.HOME }} />}
            /> */}
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
};

export default Routing;
