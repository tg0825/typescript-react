import * as React from 'react';

type FooProps = {
  name: string;
  mark: string;
};

const Foo = ({ name, mark }: FooProps) => {
  return (
    <p>
      hello {name} {mark}
    </p>
  );
};

Foo.defaultProps = {
  mark: '!'
};

export default Foo;
