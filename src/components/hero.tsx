import React from 'react';
import Bubbles from '../assets/bg.svg';
import Radial from '../assets/radial.png';
import { PrimaryButton, SecondaryButton } from '.';

interface IHero {
  flowprice: string;
}

const Hero: React.FC<IHero> = ({ flowprice }) => {
  return (
    <section
      style={{ backgroundImage: `url(${Bubbles})` }}
      className={`px-4 py-10 md:py-20  bg-local text-center md:text-left object-fill bg-secondary text-white flex`}>
      <div className='container mx-auto flex'>
        <div className='flex-1'>
          <h1 className='text-2xl sm:text-4xl sm:text font-bold border-primary md:border-l-4 md:pl-4 mb-4'>
            The self-distributing store of value token with daily intrest.
          </h1>
          <p className='sm:text-lg font-light'>
            Flow is a protocol that establishes an Ethereum based self-distributing store of value
            token (FLOW). FLOW is designed to be a hedge against Bitcoin as today's primary digital
            store of value.
          </p>

          <h3 className='text-lg my-10'>
            Current price per Flow is ${Number(flowprice).toFixed(2)}
          </h3>
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
