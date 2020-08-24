import React from 'react';
import Bubbles from '../assets/bubbles.svg';
import Radial from '../assets/radial.png';
import { PrimaryButton, SecondaryButton } from '.';

const Hero: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Bubbles})` }}
      className={`px-4 py-20  bg-local object-fill bg-secondary text-white flex`}>
      <div className='container mx-auto flex'>
        <div className='flex-1'>
          <h1 className='text-2xl sm:text-4xl sm:text font-bold border-primary border-l-4 pl-4 mb-4'>
            The self-distributing store of value token with daily intrest.
          </h1>
          <p className='sm:text-lg font-light'>
            Flow is a protocol that establishes an Ethereum based self-distributing store of value
            token (FLOW). FLOW is designed to be a hedge against Bitcoin as today's primary digital
            store of value.
          </p>
          <div className='mt-10 space-x-10'>
            <SecondaryButton text='Airdrop' />
            <PrimaryButton text='Uniswap' />
          </div>
        </div>
        <div className='hidden lg:flex flex-1 items-center justify-end'>
          <img className='max-w-sm  ' src={Radial} alt='drops' />
        </div>
      </div>
    </section>
  );
};
export { Hero };
