import React, { useEffect, useState } from 'react';
import { GoAlert } from 'react-icons/go';
import Alert from '../Alert/Alert';
import axios from 'axios';
import { Browser } from '@capacitor/browser';
import { useTranslation } from 'react-i18next';

export default function IsUpdated(props: any) {
  const [Clicked, setClicked] = useState(false);
  const { t } = useTranslation();

  function showPopup() {
    setClicked(!Clicked);
  }

  const openAppPageOnGooglePlay = async () => {
    await Browser.open({
      url: 'https://play.google.com/store/apps/details?id=com.toctive.metro',
    });
  };

  const getLatestVersion = async () => {
    const res = await axios.get('/api/v1/latest-version');
    console.log(res.data)
  }
  useEffect(() => {
    getLatestVersion();
  }, [])
  

  return (
    <div onClick={showPopup}>
      <button onClick={showPopup}>
        <GoAlert className="text-2xl" />
      </button>

      {Clicked && (
        <Alert
          onSave={openAppPageOnGooglePlay}
          saveButton={t`update-alert.btn`}
        >
          <div className="text-center text-xl">{t`update-alert.message`}</div>
        </Alert>
      )}
    </div>
  );
}
