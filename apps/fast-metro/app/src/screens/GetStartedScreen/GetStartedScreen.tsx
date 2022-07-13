import React from 'react';

import Page from '../../components/layout/Page/Page';
import Slider from '../../components/shared/Slider/Slider';

export const GetStartedScreen = () => {
  return (
    <Page>
      <div className="flex h-full flex-col items-center justify-center self-center">
        <Slider />
      </div>
    </Page>
  );
};
