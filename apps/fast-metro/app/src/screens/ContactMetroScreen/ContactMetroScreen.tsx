import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const ContactMetroScreen = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <PageHeader text="Contact Metro " />
      <span className="text-4xl font-semibold">Cairo Metro</span>
      <span className="text-4xl font-semibold">metro@cairo.gov.eg</span>
      <span className="text-md text-gray-400">+2 012 345 678 90 </span>
      <div className="flex gap-20">
        <FaFacebookSquare size={60} />
        <FaTwitterSquare size={60} />
        <FaWhatsappSquare size={60} />
      </div>
    </div>
  );
};
