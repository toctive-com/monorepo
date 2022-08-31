import React from 'react';
import Page from '../../components/layout/Page/Page';
import CollapseBox from '../../components/shared/CollapseBox/CollapseBox';
import LinkButton from '../../components/shared/LinkButton/LinkButton';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export default function StationsScreen() {
  return (
    <Page>
      <div className="gap-4">
        <PageHeader text="Stations" />
        <div className="flex flex-col gap-4">
          <span className="text-center text-3xl">Stations have w.c</span>
          <div>
            <CollapseBox title="Line 1">
              <LinkButton text="html" />
              <LinkButton text="html" />
              <LinkButton text="html" />
              <LinkButton text="html" />
            </CollapseBox>
          </div>
        </div>
      </div>
    </Page>
  );
}
