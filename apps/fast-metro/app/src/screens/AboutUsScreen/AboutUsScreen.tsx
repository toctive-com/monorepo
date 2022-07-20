import React from 'react';

import Page from '../../components/layout/Page/Page';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export function AboutUsScreen() {
  return (
    <Page className="pb-0">
      <PageHeader text="About us" isBack={false} />
      <div className="-mt-20 flex h-full flex-col items-center justify-center gap-4">
        <a href="https://toctive.com">
          <span className="text-2xl font-semibold">Metro App</span>
        </a>
        <a href="mailto:info@toctive.com">
          <span className="text-xl font-semibold">info@toctive.com</span>
        </a>
        <span className="text-md text-gray-400">Version 1.0</span>
        <div className="flex w-full justify-evenly ">
          <FaFacebookSquare size={48} />
          <FaTwitterSquare size={48} />
        </div>
      </div>
    </Page>
  );
}
