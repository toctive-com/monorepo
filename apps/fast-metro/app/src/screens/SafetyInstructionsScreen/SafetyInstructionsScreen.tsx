import React from 'react';
import Page from '../../components/layout/Page/Page';

import CollapseBox from '../../components/shared/CollapseBox/CollapseBox';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const SafetyInstructionsScreen = () => {
  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text="Safety Instructions" />
        <CollapseBox
          title="Do"
          subtitle="What should you do on Metro"
          isExpanded={true}
        >
          Taking into account and helping the elderly, women, children and
          people with special needs (allowing them to pass first through ticket
          gates, escalators, elevators, and train rides, and giving them
          priority to sit).
        </CollapseBox>
        <CollapseBox title="Don't" subtitle="What should Not you do Metro">
          children and people with special needs (allowing them to pass first
          through ticket gates, escalators, elevators, and train rides, and
          giving them priority to sit).
        </CollapseBox>
      </div>
    </Page>
  );
};
