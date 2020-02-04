import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './Page/Main.tsx';
import Foo from './Page/Foo.tsx';
import Bar from './Page/Bar.tsx';

const App = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>

      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/foo" render={() => <Foo name="hello" />} />
        <Route exact path="/bar" render={() => <Bar />} />
        <Route render={() => <div>404 :( </div>} />
      </Switch>
    </div>
  );
};

export default App;
