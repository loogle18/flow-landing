import React from 'react';

interface IFooterLink {
  href: string;
  name: string;
}

interface IFooterItem {
  title: string;
  linkArr: IFooterLink[];
}

let socialLinks = [
  { href: 'https://discord.gg/NtYXK8x', name: 'Discord' },
  { href: 'https://twitter.com/FlowProtocol', name: 'Twitter' },
  { href: 'https://t.me/flowprotocol', name: 'Telegram' },
];

let flowLinks = [
  { href: 'https://app.flowprotocol.io/dashboard', name: 'Dashboard' },
  { href: 'https://app.flowprotocol.io/yieldfarming', name: 'Liquidity Mining' },
  { href: 'https://flowprotocol.io/static/media/flow-protocol.df8f84c5.pdf', name: 'Whitepaper' },
];

let exchangeLinks = [
  {
    href: 'https://uniswap.info/token/0xc6e64729931f60d2c8bc70a27d66d9e0c28d1bf9',
    name: 'Uniswap',
  },
  { href: 'https://www.coingecko.com/en/coins/flow-protocol', name: 'Coingecko' },
  {
    href: 'https://etherscan.io/token/0xC6e64729931f60D2c8Bc70A27D66D9E0c28D1BF9',
    name: 'Etherscan',
  },
];

const Footer: React.FC = () => (
  <footer>
    <div className='container mx-auto flex flex-col'>
      <div className=' flex  justify-around py-4 text-sm sm:text-base'>
        <FooterItem title='Social' linkArr={socialLinks} />
        <FooterItem title='Flow' linkArr={flowLinks} />
        <FooterItem title='Links' linkArr={exchangeLinks} />
      </div>
    </div>
    <p className='text-sm font-bold bg-primary py-2 mt-8 text-center'>© 2020 Flow Protocol</p>
  </footer>
);

const FooterItem: React.FC<IFooterItem> = ({ title, linkArr }) => {
  return (
    <div className='flex flex-col text-center space-y-2'>
      <h4>{title}</h4>
      {Array.isArray(linkArr) &&
        linkArr.map((link, key) => {
          return (
            <a key={key} href={link.href} rel='noopener noreferrer' target='_blank'>
              {link.name}
            </a>
          );
        })}
    </div>
  );
};

export { Footer };

