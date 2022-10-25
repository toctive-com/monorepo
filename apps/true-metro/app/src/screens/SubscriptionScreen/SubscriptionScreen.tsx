import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';

import CollapseBox from '../../components/shared/CollapseBox/CollapseBox';
import LinkButton from '../../components/shared/LinkButton/LinkButton';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const SubscriptionScreen = () => {
  const { t } = useTranslation();

  const quarterlySubscriptionOffices = {
    lineOne: [
      'helwan',
      'ain-helwan',
      'helwan-university',
      'maadi',
      'dar-el-salam',
      'el-zahraa',
      'al-shohadaa',
      'hadayeq-el-zaitoun',
      'ain-shams',
      'ezbet-el-nakhl',
      'el-marg',
      'new-el-marg',
    ],
    lineTwo: [
      'kolleyyet-el-zeraa',
      'mezallat',
      'road-el-farag',
      'masarra',
      'al-shohadaa',
      'attaba',
      'dokki',
      'cairo-university',
      'el-giza',
      'el-mounib',
    ],
    lineThree: ['attaba', 'abbassia', 'heliopolis', 'adly-mansour'],
  };

  const annualSubscriptionOffices = {
    lineOne: ['helwan', 'maadi', 'ain-shams'],
    lineTwo: [
      'kolleyyet-el-zeraa',
      'road-el-farag',
      'al-shohadaa',
      'attaba',
      'cairo-university',
    ],
    lineThree: ['heliopolis', 'adly-mansour'],
  };

  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text={t`subscriptions-screen.title`} />

        <h2 className="text-lg font-bold">
          {t`subscriptions-screen.subscription-offices`}:
        </h2>

        <CollapseBox
          title={t`subscriptions-screen.quarterly-subscription-offices`}
          isExpanded={false}
        >
          <h3 className="mt-8 text-lg font-semibold">Line 1</h3>
          <ul className="list-disc px-8 text-gray-500">
            {quarterlySubscriptionOffices.lineOne.map((office) => (
              <li key={office}>{t(`stations.${office}`)}</li>
            ))}
          </ul>
          <h3 className="mt-8 text-lg font-semibold">Line 2</h3>
          <ul className="list-disc px-8 text-gray-500">
            {quarterlySubscriptionOffices.lineTwo.map((office) => (
              <li key={office}>{t(`stations.${office}`)}</li>
            ))}
          </ul>
          <h3 className="mt-8 text-lg font-semibold">Line 3</h3>
          <ul className="list-disc px-8 text-gray-500">
            {quarterlySubscriptionOffices.lineThree.map((office) => (
              <li key={office}>{t(`stations.${office}`)}</li>
            ))}
          </ul>
        </CollapseBox>
        <CollapseBox
          title={t`subscriptions-screen.annual-subscription-offices`}
        >
          <h3 className="mt-8 text-lg font-semibold">Line 1</h3>
          <ul className="list-disc px-8 text-gray-500">
            {annualSubscriptionOffices.lineOne.map((office) => (
              <li key={office}>{t(`stations.${office}`)}</li>
            ))}
          </ul>
          <h3 className="mt-8 text-lg font-semibold">Line 2</h3>
          <ul className="list-disc px-8 text-gray-500">
            {annualSubscriptionOffices.lineTwo.map((office) => (
              <li key={office}>{t(`stations.${office}`)}</li>
            ))}
          </ul>
          <h3 className="mt-8 text-lg font-semibold">Line 3</h3>
          <ul className="list-disc px-8 text-gray-500">
            {annualSubscriptionOffices.lineThree.map((office) => (
              <li key={office}>{t(`stations.${office}`)}</li>
            ))}
          </ul>
        </CollapseBox>

        <h2 className="mt-8 text-lg font-bold">
          {t`subscriptions-screen.prices`}:
        </h2>

        <LinkButton
          text={t('tickets-prices-screen.title')}
          to="/subscription/tickets-prices"
        />
        {/* <LinkButton
          text={t('subscription-prices-screen.title')}
          to="/subscription/subscription-prices"
        /> */}
      </div>
    </Page>
  );
};
