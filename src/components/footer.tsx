import React from 'react';
import logo from '../images/logo-main.png';

const Footer: React.FC = () => (
  <footer className='bg-gray-100'>
    <div className='container mx-auto pt-8 pb-4'>
      <div className='flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2'>
        <div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'>
          <img
            src={logo}
            alt='logo'
            style={{ width: '55px', paddingLeft: '8' }}
          />
        </div>

        <div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'>
          <h4 className=''>Links</h4>
          <ul className='nav navbar-nav'>
            <li id='navi-2' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small' href='/'>
                Home{' '}
              </a>
            </li>
            <li id='navi-1' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small text-grey-darker' href='/'>
                Dashboard
              </a>
            </li>
            <li id='navi-1' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small' href='/'>
                Whitepaper
              </a>
            </li>
          </ul>
        </div>

        <div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'>
          <h4 className=''>Social</h4>
          <ul className=''>
            <li id='navi-2' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small' href='/'>
                Twitter{' '}
              </a>
            </li>
            <li id='navi-1' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-md' href='/'>
                Telegram
              </a>
            </li>
            <li id='navi-1' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small' href='/'>
                Annoucements
              </a>
            </li>
          </ul>
        </div>

        <div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'>
          <h4 className=''>FLOW</h4>
          <ul className=''>
            <li id='navi-2' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small' href='/'>
                Uniswap{' '}
              </a>
            </li>
            <li id='navi-1' className='leading-7 text-sm'>
              <a className='no-underline font-flow text-small' href='/'>
                Etherscan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='pt-4 md:flex md:items-center md:justify-center'>
        <ul className=''>
          <li className='md:mx-2 md:inline leading-7 text-sm' id='footer-navi-2'>
            <a className='no-underline font-flow text-small' href='/disclaimer'>
              Disclaimer
            </a>
          </li>
          <li className='md:mx-2 md:inline leading-7 text-sm' id='footer-navi-2'>
            <a className='no-underline font-flow text-small' href='/cookie'>
              Cookie policy
            </a>
          </li>
          <li className='md:mx-2 md:inline leading-7 text-sm' id='footer-navi-2'>
            <a className='no-underline font-flow text-small' href='/privacy'>
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export { Footer };
