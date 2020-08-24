import React from 'react';
import logo from '../assets/logo-main.png';

const Footer: React.FC = () => (
 <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col hidden md:block mt-4">
                    <div className="flex items-center text-xl md:text-2xl justify-between">
                <span className="flex items-center">
                <img src={logo} alt='logo' className="h-12 mr-2 mb-2" />
                Flow
                </span>
                
                </div>
                <span className="inline-block w-auto max-w-sm">Flow is a protocol that establishes an Ethereum based self-distributing store of value token (FLOW). FLOW is designed to be a hedge against Bitcoin as today's primary digital store of value.</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Socials</span>
                    <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">Telegram</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Twitter</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">Reddit</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Links</span>
                    <span className="my-2"><a href="https://flowprotocol.io" className="text-blue-700 text-md hover:text-blue-500">Home</a></span>
                    <span className="my-2"><a href="https://app.flowprotocol.io" className="text-blue-700  text-md hover:text-blue-500">Dashboard</a></span>
                    <span className="my-2"><a href="https://flowprotocol.io/static/media/flow-protocol.df8f84c5.pdf" className="text-blue-700 text-md hover:text-blue-500">Whitepaper</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">FLOW</span>
                    <span className="my-2"><a href="https://etherscan.io/token/0xC6e64729931f60D2c8Bc70A27D66D9E0c28D1BF9" target="_BLANK" rel="noopener noreferrer" className="text-blue-700  text-md hover:text-blue-500">Etherscan</a></span>
                    <span className="my-2"><a href="https://uniswap.info/token/0xc6e64729931f60d2c8bc70a27d66d9e0c28d1bf9" target="_BLANK" rel="noopener noreferrer" className="text-blue-700  text-md hover:text-blue-500">Uniswap</a></span>
                    <span className="my-2"><a href="https://www.coingecko.com/en/coins/flow-protocol" target="_BLANK" rel="noopener noreferrer" className="text-blue-700  text-md hover:text-blue-500">Coingecko</a></span>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-blue-700 font-bold mb-2">
                    © 2020 Flow Protocol
                </p>
            </div>
        </div>
    </div>
</footer>
);

export { Footer };
