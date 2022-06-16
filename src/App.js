import React from "react";
import routes from './routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route key={idx} path={route.path} exact={route.exact}
                     name={route.name} render={props => (
                <route.component {...props} />
              )} />
            ) : null;
          })}
        </Switch>
    </BrowserRouter>

  );
}

export default App;
