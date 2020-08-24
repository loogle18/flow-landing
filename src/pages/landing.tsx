import React, { useEffect, useState } from 'react';
import { Section, Hero } from '../components';
import Drops from '../assets/drops.png';
import Defi from '../assets/defi.png';
import Participation from '../assets/participation.png';

import axios from 'axios';
import { apiUrl } from '../utils/constants';

const Landing: React.FC = () => {
  const [currentPrice, setCurrentPrice] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setCurrentPrice(result.data.tickers[0].converted_last['usd']);
    };
    fetchData();
  }, []);

  return (
    <main className='flex flex-col'>
      <Hero flowprice={currentPrice} />
      <Section
        image={Defi}
        title='Designed for De-Fi'
        paragraph=' As Defi Rapidly grows, so does the demand for collateral assets that fill specific roles.
          FLOW (Store of Value) can help diversify collateral by being combined with digital assets
          that fill other roles such as ETH (Protocol) and AMPL (Elastic Supply). FLOW does not need
          to be staked or locked into a contract to receive inflation, therefore it can be applied
          to the full range of DeFi applications while still achieving its distribution target.'
      />{' '}
      <Section
        image={Participation}
        bgcolor='secondary'
        title='Why do we need FLOW?'
        paragraph='Until now, digital stores of value like Bitcoin have required participation in mining or staking in order to receive a portion of the inflating supply. This has several problems:'>
        <ul className='space-y-4 list-disc text-sm sm:text-base font-light p-5 sm:p-10 '>
          <li>
            When a pure store of value (inflation eventually ending) is tied to consensus mechanism,
            it disproportinally punishes holders as their share of the supply is continuously
            diluted during the inflation period.
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
            Coins that require actions such as taking in order to receive a portion of the inflation
            prevent the coin from being used easily in other applications (lending, collateral,
            etc.) without being diluted.
          </li>
        </ul>
      </Section>
      <Section
        image={Drops}
        title='Liquditity Mining'
        paragraph='As Defi Rapidly grows, so does the demand for collateral assets that fill specific roles.
          FLOW (Store of Value) can help diversify collateral by being combined with digital assets
          that fill other roles such as ETH (Protocol) and AMPL (Elastic Supply). FLOW does not need
          to be staked or locked into a contract to receive inflation, therefore it can be applied
          to the full range of DeFi applications while still achieving its distribution target.'
      />
    </main>
  );
};
export default Landing;
