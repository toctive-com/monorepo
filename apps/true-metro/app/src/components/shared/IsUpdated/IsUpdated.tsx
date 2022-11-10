import React, { useEffect, useState } from 'react';
import { GoAlert } from 'react-icons/go';
import Alert from '../Alert/Alert';
import axios from 'axios';
import { Browser } from '@capacitor/browser';
import { useTranslation } from 'react-i18next';
import {environment} from '../../../environments/environment.prod'

export default function IsUpdated(props: any) {
  const [isClicked, setIsClicked] = useState(false);
  const [isLastVersion, setIsLastVersion] = useState(true);
  const { t } = useTranslation();

  function showPopup() {
    setIsClicked(!isClicked);
  }

  const openAppPageOnGooglePlay = async () => {
    await Browser.open({
      url: 'https://play.google.com/store/apps/details?id=com.toctive.metro',
    });
  };

  const getLatestVersion = async () => {
    const res = await axios.get('/api/v1/latest-version');
    if(res.data.version !== environment.version) {
      setIsLastVersion(false);
    }
    return res.data.version;
  }
  
  useEffect(() => {
    getLatestVersion().catch(console.error);
  }, [])
  

  return (
    <div onClick={showPopup}>
      {!isLastVersion && <button onClick={showPopup}>
        <GoAlert className="text-2xl" />
      </button>}

      {isClicked && (
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
