import React from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { Router, Routes, Route,Navigate } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { AppRoutes } from './AppRoutes';
const Routing =()=>
{
    const history = createHistory();
  
    return(
        <Provider store={store}>
        <Router history={history}>
          <React.Suspense>
            <Routes>
            <Route
              render={() => <Navigate to={{ pathname: AppRoutes.HOME }} />}
            />
             <Route
              render={() => <Navigate to={{ pathname: AppRoutes.ABOUT_US }} />}
            />
             <Route
              render={() => <Navigate to={{ pathname: AppRoutes.CONTACT_US }} />}
            />
            </Routes>
          </React.Suspense>
        </Router>
      </Provider>
    )
}
export default Routing