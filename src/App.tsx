import React, { FC } from 'react';
import { Landing } from './pages';
import { Header, Footer } from './components';

const App: FC = () => (
  <>
    <Header />
    <Landing />
    <Footer />
  </>
);

export default App;
