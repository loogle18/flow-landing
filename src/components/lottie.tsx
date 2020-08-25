import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import FlowPulse from '../assets/flowpulse.json';

const LottiPlayer = () => {
  return (
    <Player autoplay loop src={FlowPulse} style={{ height: '450px', width: '450px' }}></Player>
  );
};

export default LottiPlayer;
