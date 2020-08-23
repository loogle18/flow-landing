import React from 'react';
import { Header, Footer, Main } from '../components';
import { apiUrl } from '../utils/constants';

interface IState {
  current_price: string;
}

class Landing extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      current_price: '',
    };
  }

  componentDidMount() {
    this.getCurrentPrice();
  }

  async getCurrentPrice() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    this.setState({ current_price: json.tickers[0].converted_last['usd'] });
  }

  render() {
    const { current_price } = this.state;
    return (
      <>
        <body className='flex flex-col min-h-screen'>
          <Header price={current_price} />
          <Main />
          <Footer />
        </body>
      </>
    );
  }
}
export default Landing;
