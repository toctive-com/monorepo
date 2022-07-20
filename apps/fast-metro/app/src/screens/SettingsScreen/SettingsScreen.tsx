import React, { useState } from 'react';

import Page from '../../components/layout/Page/Page';
import SettingsSection from '../../components/layout/SettingsSection/SettingsSection';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import SettingCard from '../../components/shared/SettingCard/SettingCard';
import Switch from '../../components/shared/Switch/Switch';

export const SettingsScreen = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Page>
      <div className={`flex flex-col gap-12`}>
        <PageHeader text="Settings" isBack={false} />
        <div className="body flex flex-col gap-5">
          <SettingsSection title="Appearance">
            <SettingCard text="increase or decrease" title="Dark Mode">
              {/* <BsToggleOn className='self-center' size={44} /> */}
              <Switch IsDark={setIsDark} />
            </SettingCard>

            <SettingCard title="Font Size" text="increase or decrease" />

            <SettingCard text="change the display language" title="Languages" />
          </SettingsSection>
          <SettingsSection title="Cache">
            <SettingCard title="Reset Settings" text="Reset all settings" />
            <SettingCard title="Clear Cache" text="Remove all Cache" />
          </SettingsSection>
          <SettingsSection title="Other">
            <SettingCard
              title="Share This App"
              text="Share this app with your friends"
            />
            <SettingCard
              title="Disclaimer"
              text="Delimit The scope of rights"
            />
            <SettingCard title="About" text="Our social media and technical" />
          </SettingsSection>
        </div>
      </div>
    </Page>
  );
};
