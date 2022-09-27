import i18next from 'i18next';
import { useEffect, useState } from 'react';

import Page from '../../components/layout/Page/Page';
import SettingsSection from '../../components/layout/SettingsSection/SettingsSection';

import { Share } from '@capacitor/share';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DirectionType, setDirection } from '../../assets/js/appDirection';
import { Alert } from '../../components/shared/Alert/Alert';
import { Option } from '../../components/shared/Alert/Option';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import { SettingCard } from '../../components/shared/SettingCard/SettingCard';
import Switch from '../../components/shared/Switch/Switch';

export const SettingsScreen = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
  const [isDark] = useState<boolean>(darkMode);

  const saveDarkModeInLocalStorage = (isDark: boolean) => {
    localStorage.setItem('darkMode', isDark.toString());
    localStorage.getItem('darkMode') === 'true'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  };

  useEffect(() => {
    handleDarkMode(isDark);
  }, [isDark]);

  const { t } = useTranslation();

  const navigation = useNavigate();

  return (
    <Page>
      <div className={`flex flex-col gap-12`}>
        <PageHeader text={t`settings-screen.title`} isBack={false} />

        <div className="body flex flex-col gap-12">
          <SettingsSection title={t`settings-screen.appearance.title`}>
            <SettingCard
              title={t`settings-screen.dark-mode.title`}
              text={t`settings-screen.dark-mode.subtitle`}
            >
              <Switch
                isSwitched={isDark}
                onClick={saveDarkModeInLocalStorage}
              />
            </SettingCard>

            <LanguageCard />
          </SettingsSection>

          <SettingsSection title={t`settings-screen.cache.title`}>
            <ClearSettingsCard />
            <ClearCacheCard />
          </SettingsSection>

          <SettingsSection title={t`settings-screen.other.title`}>
            <SettingCard
              title={t`settings-screen.share.title`}
              text={t`settings-screen.share.subtitle`}
              onClick={() => {
                Share.share({
                  title: 'Fast Metro App',
                  text: 'Really awesome thing you need to see right now',
                  url: 'http://toctive.com/',
                  dialogTitle: 'Share with buddies',
                });
              }}
            />
            <SettingCard
              title={t`settings-screen.disclaimer.title`}
              text={t`settings-screen.disclaimer.subtitle`}
            />
            <SettingCard
              title={t`settings-screen.about.title`}
              text={t`settings-screen.about.subtitle`}
              onClick={() => {
                navigation('/about-us');
              }}
            />
          </SettingsSection>
        </div>
      </div>
    </Page>
  );
};

/* A function that is used to change the language of the app. */
function LanguageCard() {
  const [languagesAlert, setLanguagesAlert] = useState(false);
  const [language, setLanguage] = useState<string>(
    i18next.resolvedLanguage as string
  );
  const { t } = useTranslation();
  const languages = [
    {
      label: t`settings-screen.languages.arabic` + ' (العربية)',
      value: 'ar',
      dir: 'rtl',
    },
    {
      label: t`settings-screen.languages.english` + ' (English)',
      value: 'en',
      dir: 'ltr',
    },
  ];
  return (
    <>
      <SettingCard
        title={t`settings-screen.languages.title`}
        text={t`settings-screen.languages.subtitle`}
        onClick={() => {
          setLanguagesAlert(true);
        }}
      />
      {languagesAlert && (
        <Alert
          onSave={() => {
            i18next.changeLanguage(language);
            setLanguagesAlert(false);
            setDirection(
              languages.filter((lang) => lang.value === language)[0][
                'dir'
              ] as DirectionType
            );
          }}
          onCancel={() => setLanguagesAlert(false)}
        >
          {languages.map((item, index) => (
            <Option
              key={index}
              text={item.label}
              value={item.value}
              selectedValue={language}
              setValue={(value: string) => {
                setLanguage(value);
              }}
            />
          ))}
        </Alert>
      )}
    </>
  );
}
function handleDarkMode(isDark: boolean) {
  localStorage.setItem('darkMode', isDark.toString());
}

/* A function that is used to remove all settings and cached data of the app. */
function ClearCacheCard() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <SettingCard
        title={t`settings-screen.clear-cache.title`}
        text={t`settings-screen.clear-cache.subtitle`}
        onClick={() => {
          setIsAlertVisible(true);
        }}
      />
      {isAlertVisible && (
        <Alert
          onSave={() => {
            // Clear Cache
            for (const key in localStorage) {
              if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
                localStorage.removeItem(key);
              }
            }

            window.location.reload();
            setIsAlertVisible(false);
          }}
          onCancel={() => setIsAlertVisible(false)}
          saveButton={t`settings-screen.yes`}
        >
          <div className="my-4 text-center text-xl">
            {t`settings-screen.reset-confirmation-message`}
          </div>
        </Alert>
      )}
    </>
  );
}

/* A function that is used to remove all settings and cached data of the app. */
function ClearSettingsCard() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <SettingCard
        title={t`settings-screen.reset-settings.title`}
        text={t`settings-screen.reset-settings.subtitle`}
        onClick={() => {
          setIsAlertVisible(true);
        }}
      />
      {isAlertVisible && (
        <Alert
          onSave={() => {
            // Clear Cached Settings
            const settingsKeys = ['darkMode', 'i18nextLng', 'dir'];

            for (const key of settingsKeys) {
              localStorage.removeItem(key);
            }

            window.location.reload();
            setIsAlertVisible(false);
          }}
          onCancel={() => setIsAlertVisible(false)}
          saveButton={t`settings-screen.yes`}
        >
          <div className="my-4 text-center text-xl">
            {t`settings-screen.clear-settings-confirmation-message`}
          </div>
        </Alert>
      )}
    </>
  );
}
