import React from 'react';

import Page from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const TransitStationsScreen = () => {
  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text="Transit stations" />

        <div className="flex flex-col gap-4">
          <Header text="Line 1 - Line 2" title="EL-monet" />
          <Header text="Line 2 - Line 4" title="EL-monet" />
          <Header text="Line 3 - Line 1" title="EL-monet" />
          <Header text="Line 3 - Line 2" title="EL-monet" />
        </div>
      </div>
    </Page>
  );
};

// TODO: make this component collapsible
// TODO: Write the correct data instead of this dummy data
function Header({ title, text }: { title: string; text: string }) {
  return (
    <div className={`flex w-full flex-col justify-center p-4 shadow-sm`}>
      <div className="flex items-center justify-between">
        <span className="text-xl">{title}</span>
        <span className="text-xs text-gray-500">{text}</span>
      </div>
    </div>
  );
}
