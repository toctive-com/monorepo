import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { Page } from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const ContactMetroScreen = () => {
  return (
    <Page className="pb-0">
      <PageHeader text="Contact Metro" isBack={false} />
      <div className="-mt-20 flex h-screen flex-col items-center justify-center gap-4">
        <span className="text-xl font-semibold">Cairo Metro</span>
        <span className="text-xl font-semibold">metro@cairo.gov.eg</span>
        <a href="tel:+201234567890">
          <span className="text-md text-gray-400">+2 012 345 678 90</span>
        </a>
        <div className="flex gap-20">
          <FaFacebookSquare size={48} />
          <FaTwitterSquare size={48} />
          <FaWhatsappSquare size={48} />
        </div>
      </div>
    </Page>
  );
};
