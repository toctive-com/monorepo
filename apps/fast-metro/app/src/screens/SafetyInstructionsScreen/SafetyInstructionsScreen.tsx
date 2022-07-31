import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';

import CollapseBox from '../../components/shared/CollapseBox/CollapseBox';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const SafetyInstructionsScreen = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text={t('safety-instructions-screen.title')} />
        <CollapseBox
          title={t('safety-instructions-screen.do.title')}
          subtitle={t('safety-instructions-screen.do.subtitle')}
          isExpanded={true}
        >
          <ul className="list-decimal px-4">
            {Array.from(
              t('safety-instructions-screen.do.content', {
                returnObjects: true,
              })
            ).map((item) => (
              <li key={item as string} className="my-4">
                {item as string}
              </li>
            ))}
          </ul>
        </CollapseBox>
        <CollapseBox
          title={t('safety-instructions-screen.dont.title')}
          subtitle={t('safety-instructions-screen.dont.subtitle')}
        >
          <ul className="list-decimal px-4">
            {Array.from(
              t('safety-instructions-screen.dont.content', {
                returnObjects: true,
              })
            ).map((item) => (
              <li key={item as string} className="my-4">
                {item as string}
              </li>
            ))}
          </ul>
        </CollapseBox>
      </div>
    </Page>
  );
};
