import i18n from 'i18next';
import * as ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import LanguageDetector from 'i18next-browser-languagedetector';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

import App from './App';
import ar from './data/langs/ar.json';
import en from './data/langs/en.json';
import {
  DirectionType,
  getDirection,
  setDirection,
} from './assets/js/appDirection';

// translation catalog
const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

// initialize i18next with catalog and language to use
i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
});

/* Setting the direction of the app to be either `rtl` or `ltr` based on the language. */
setDirection(getDirection() as DirectionType);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
