import * as React from 'react';

const Foo = (props: any) => {
  const { name } = props;
  const message: string = name;
  console.log(name);

  return <p>{message} Foo</p>;
};

export default Foo;
