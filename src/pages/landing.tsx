import React, { useEffect, useState } from 'react';
import { Section, Hero } from '../components';
import Drops from '../assets/drops.svg';
import Defi from '../assets/defi.svg';
import Block from '../assets/block.svg';
import { PrimaryButton } from '../components/button';

import axios from 'axios';
import { coingeckoApiUrl, flowTvlUrl } from '../utils/constants';

const Landing: React.FC = () => {
  const [currentPrice, setCurrentPrice] = useState('');
  const [tvl, setTvl] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const [priceResult, tvlResult] = await Promise.all([
        axios(coingeckoApiUrl),
        axios(flowTvlUrl)
      ]);
      const price = priceResult.data.tickers[0].converted_last['usd'];
      const tvl = tvlResult.data.tvl;
      setCurrentPrice(price);
      setTvl(tvl);
    };
    fetchData();
  }, []);

  return (
    <main className='flex flex-col'>
      <Hero flowprice={currentPrice} tvl={tvl} />
      <Section
        image={Drops}
        title='Liquidity Mining'
        paragraph='The Flow Protocol liquidity mining program is live!
          Holders can now earn extra FLOW tokens by providing liquidity on Uniswap.'
      >
        <p className='font-light sm:text-lg mt-5'>
          The more tokens you stake and the longer you keep them staked for, the greater the rewards!
        </p>
        <div className='mt-10 space-x-10'>
          <a
            href='https://medium.com/@flowprotocol/liquidity-mining-with-the-flow-tap-c7848cf798f5'
            target='_blank'
            rel='noopener noreferrer'>
            <PrimaryButton text='Learn More' />
          </a>
        </div>
      </Section>
      <Section
        image={Block}
        bgcolor='secondary'
        title='Why do we need FLOW?'
        paragraph='Until now, digital stores of value like Bitcoin have required participation in mining or staking in order to receive a portion of the inflating supply. This has several problems:'>
        <ul className='space-y-4 list-disc text-sm sm:text-base font-light p-5 sm:p-10 '>
          <li>
            When a pure store of value (inflation eventually ending) is tied to a consensus
            mechanism, it disproportionately punishes holders as their share of the supply is
            continuously diluted during the inflation period.
          </li>
          <li>
            The long term value of these coins depends heavily on the ability of the protocol to
            continue to operate without inflation being paid to miners/stakers, which is a highly
            debated topic.
          </li>
          <li>
            Protocol coins (BTC, ETH, etc) are tied to the underlying network, which can cause their
            value to flunctuate wildy due to delays in the network, bugs, etc.{' '}
          </li>
          <li>
            Coins that require actions such as staking in order to receive a portion of the
            inflation prevent the coin from being used easily in other applications (lending,
            collateral, etc.) without being diluted.
          </li>
        </ul>
      </Section>
      <Section
        image={Defi}
        title='Designed for De-Fi'
        paragraph=' As DeFi Rapidly grows, so does the demand for collateral assets that fill specific roles.
          FLOW (Store of Value) can help diversify collateral by being combined with digital assets
          that fill other roles such as ETH (Protocol) and AMPL (Elastic Supply). FLOW does not need
          to be staked or locked into a contract to receive inflation, therefore it can be applied
          to the full range of DeFi applications while still achieving its distribution target.'
      />
    </main>
  );
};
export default Landing;
