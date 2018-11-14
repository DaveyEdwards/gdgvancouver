import * as React from 'react';
import About from './pages/About';
import Events from './pages/Events';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Resources from './pages/Resources';
import { Route, Switch } from 'react-router';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/upcoming-events" component={Events} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/resources" component={Resources} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default Routes;
