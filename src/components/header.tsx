import React, { useState } from 'react';
import { ReactComponent as LogoAlternative } from '../assets/logo-light.svg';
import { CgMenu, CgClose } from 'react-icons/cg';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const mobileNav = toggle ? 'block' : 'hidden';
  return (
    <header className='bg-secondary'>
      <nav className='container mx-auto md:flex items-center justify-between flex-wrap px-5 sm:px-0 py-5 text-white'>
        <div className='flex text-xl md:text-xl justify-between'>
          <span className='flex items-center'>
            <LogoAlternative /> Flow
          </span>
          <button
            className='md:hidden text-2xl disable-zoom-tap'
            onClick={() => setToggle(!toggle)}>
            {!toggle ? <CgMenu /> : <CgClose />}
          </button>
        </div>
        <div
          className={`${mobileNav} mt-5 md:mt-0 md:flex space-y-5 md:space-y-0  md:space-x-10 flex flex-col md:flex-row items-center text-center`}>
          <a
            href='https://flowprotocol.io/static/media/flow-protocol.df8f84c5.pdf'
            target='_BLANK'
            rel='noopener noreferrer'>
            Whitepaper
          </a>
          <a
            href='https://github.com/flowprotocol/flow-contracts'
            target='_BLANK'
            rel='noopener noreferrer'>
            Github
          </a>
          <a href='#socials'>Connect</a>
          <a href='https://flowprotocol.io/dashboard' target='_BLANK' rel='noopener noreferrer'>
            Dashboard
          </a>
        </div>
      </nav>
    </header>
  );
};
export { Header };
