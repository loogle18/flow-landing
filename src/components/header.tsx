import React from 'react';
// import logo from '../images/logo-main.png';
import logoAlternative from '../images/logo-white.png';

interface headerProps {
  price: string;
}

const Header: React.FC<headerProps> = props => (
  <header>
    <nav className='flex items-center justify-between flex-wrap bg-dark p-3'>
      <img src={logoAlternative} alt='logo' style={{ width: '55px', marginLeft: '10px' }} />
      <div className='space-x-10'>
        <a
          href='https://flowprotocol.io/dashboard'
          target='_BLANK'
          rel='noopener noreferrer'
          className='font-flow block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
          Dashboard
        </a>
        <a
          href='https://flowprotocol.io/static/media/flow-protocol.df8f84c5.pdf'
          target='_BLANK'
          rel='noopener noreferrer'
          className='font-flow block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
          Whitepaper
        </a>
        <a
          href='https://github.com/flowprotocol/flow-contracts'
          target='_BLANK'
          rel='noopener noreferrer'
          className='font-flow block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
          Github
        </a>
        <a
          href='#socials'
          className='font-flow block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
          Connect
        </a>
        <a
          href='https://app.uniswap.org/#/swap?outputCurrency=0xc6e64729931f60d2c8bc70a27d66d9e0c28d1bf9'
          target='_BLANK'
          rel='noopener noreferrer'
          className='font-flow font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white pr-8'>
          1 Flow = ${Number(props.price).toFixed(2)}
        </a>
      </div>
    </nav>
  </header>
);

export { Header };
