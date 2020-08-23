import React from 'react';

interface headerProps {
  price: string;
}

const Header: React.FC<headerProps> = props => (
  <header>
    <nav className='flex items-center justify-between flex-wrap bg-teal p-6'>
      <h1 className='text-primary'>Header</h1>
      <p>Flow Price: {props.price}</p>
    </nav>
  </header>
);

export { Header };
