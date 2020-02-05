import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './Page/Main.tsx';
import Foo from './Page/Foo.tsx';
import Bar from './Page/Bar.tsx';
import Baz from './Page/Baz.tsx';

const App = () => {
  const onClick = (name: string) => {
    alert(`${name} hi`);
  };

  // type error
  // const onSubmit = form => {
  const onSubmit = (form: { name: string; description: string }) => {
    const { name, description } = form;
    alert(`${name} ${description}! ok! typescript!`);
  };

  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>
      <Link to="/baz">Baz</Link>

      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/foo" render={() => <Foo name="hello" />} />
        <Route exact path="/bar" render={() => <Bar onClick={onClick} />} />
        <Route exact path="/baz" render={() => <Baz onSubmit={onSubmit} />} />
        <Route render={() => <div>404 :( </div>} />
      </Switch>
    </div>
  );
};

export default App;
