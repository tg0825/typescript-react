import * as React from 'react';

type FooProps = {
  name?: string;
  mark: string;
};

type BarProps = {
  age: number;
};

const Foo = ({ name, mark }: BarProps) => {
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
