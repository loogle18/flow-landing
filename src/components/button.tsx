import React from 'react';

interface IButton {
  text: string;
}

const PrimaryButton: React.FC<IButton> = ({ text }) => (
  <button className='px-8 rounded-sm bg-primary text-secondary py-3 shadow-md '>{text}</button>
);
const SecondaryButton: React.FC<IButton> = ({ text }) => (
  <button className='border border-primary px-8 rounded-sm py-3'>{text}</button>
);

export { PrimaryButton, SecondaryButton };
