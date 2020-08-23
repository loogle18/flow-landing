import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Footer, Main } from '../components';
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
    <div className='flex flex-col min-h-screen'>
      <Header price={currentPrice} />
      <Main />
      <Footer />
    </div>
  );
};
export default Landing;
