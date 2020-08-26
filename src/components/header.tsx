import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';

const LogoLight =
  'https://raw.githubusercontent.com/flowprotocol/flow-media/master/svg/logo-light.svg';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const mobileNav = toggle ? 'block' : 'hidden';
  return (
    <header className='bg-secondary'>
      <nav className='container mx-auto md:flex items-center justify-between flex-wrap px-5 sm:px-0 py-5 text-white'>
        <div className='flex text-xl md:text-xl justify-between'>
          <span className='flex items-center'>
            <img src={LogoLight} alt='logo-light' /> Flow
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
          <a href='https://app.flowprotocol.io/yieldfarming' target='_BLANK' rel='noopener noreferrer'>Yield Farming</a>
          <a href='https://app.flowprotocol.io/dashboard' target='_BLANK' rel='noopener noreferrer'>
            Dashboard
          </a>
          <a
            href='https://discord.gg/NtYXK8x'
            target='_BLANK'
            rel='noopener noreferrer'>
            Connect with Us
          </a>
        </div>
      </nav>
    </header>
  );
};
export { Header };

