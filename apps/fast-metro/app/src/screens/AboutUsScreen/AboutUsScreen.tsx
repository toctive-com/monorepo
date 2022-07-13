import React from 'react';

import Page from '../../components/layout/Page/Page';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export function AboutUsScreen() {
  return (
    <Page>
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <PageHeader text="About us" />
        <span className="text-4xl font-semibold">Metro App</span>
        <span className="text-4xl font-semibold">info@toctive.com</span>
        <span className="text-md text-gray-400">Version 1.0</span>
        <div className="flex gap-20">
          <FaFacebookSquare size={60} />
          <FaTwitterSquare size={60} />
        </div>
      </div>
    </Page>
  );
}
