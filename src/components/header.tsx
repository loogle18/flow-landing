import React from 'react';
// import logo from '../images/logo-main.png';
import logoAlternative from '../assets/logo-white.png';

const Header: React.FC = () => (
  <header className='bg-secondary'>
    <nav className='container mx-auto flex items-center justify-between flex-wrap p-3'>
      <span className='flex text-2xl text-white items-center'>
        <img src={logoAlternative} alt='logo' className='h-16 mr-4' /> Flow
      </span>
      <div className='space-x-10 hidden lg:block'>
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
          href='https://flowprotocol.io/dashboard'
          target='_BLANK'
          rel='noopener noreferrer'
          className='font-flow block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
          Dashboard
        </a>
      </div>
    </nav>
  </header>
);

export { Header };
