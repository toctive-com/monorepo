import React from 'react';
import Page from '../../components/layout/Page/Page';

import CollapseBox from '../../components/shared/CollapseBox/CollapseBox';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const SubscriptionScreen = () => {
  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text="Subscription Information" />
        <CollapseBox
          title="Offices of Quarterly Subscriptions"
          isExpanded={false}
        >
          <h3 className="mt-8 text-lg font-semibold">Line 1</h3>
          <ul className="list-disc px-8 text-gray-500">
            <li>Helwan</li>
            <li>Ain Helwan</li>
            <li>Helwan uni.</li>
            <li>Maadi</li>
            <li>Dar el-Salaam</li>
            <li>El-Zahra</li>
            <li>Al-Shohadaa</li>
            <li>Hadayeq El-Zaitoun</li>
            <li>Ain Shams</li>
            <li>Ezbet El Nakhl</li>
            <li>El-Marg</li>
            <li>new El-Marg</li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Line 2</h3>
          <ul className="list-disc px-8 text-gray-500">
            <li>Kolleyyet El-Zeraa</li>
            <li>Mezallat</li>
            <li>Rod El-Farag</li>
            <li>Masarra</li>
            <li>Al-Shohadaa</li>
            <li>Attaba</li>
            <li>Dokki</li>
            <li>University of Cairo</li>
            <li>Giza</li>
            <li>El-Mounib</li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Line 3</h3>
          <ul className="list-disc px-8 text-gray-500">
            <li>Attaba</li>
            <li>El Abassiya</li>
            <li>Heliopolis</li>
            <li>Adly Mansour</li>
          </ul>
        </CollapseBox>
        <CollapseBox title="Offices of Annual Subscription">
          <h3 className="mt-8 text-lg font-semibold">Line 1</h3>
          <ul className="list-disc px-8 text-gray-500">
            <li>Helwan</li>
            <li>Maadi</li>
            <li>Ain Shams</li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Line 2</h3>
          <ul className="list-disc px-8 text-gray-500">
            <li>Kolleyyet El-Zeraa</li>
            <li>Rod El-Farag</li>
            <li>Al-Shohadaa</li>
            <li>Attaba</li>
            <li>University of Cairo</li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Line 3</h3>
          <ul className="list-disc px-8 text-gray-500">
            <li>Heliopolis</li>
            <li>Adly Mansour</li>
          </ul>
        </CollapseBox>
      </div>
    </Page>
  );
};
