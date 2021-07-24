import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProductList from '../pages/ProductList';

interface Props {
  children?: JSX.Element[] | JSX.Element;
}

function Routes({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      {children}
      <Switch>
        <Route exact path="/products" component={ProductList} />
        
        <Route render={() => <Redirect to="/products" />} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;