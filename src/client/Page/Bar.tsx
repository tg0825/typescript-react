import * as React from 'react';

type BarProps = {
  onClick: (name: string) => void;
};

const Bar = ({ onClick }: BarProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Bar;
