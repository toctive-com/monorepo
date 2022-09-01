import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import path from 'path';

interface serverSideTranslationsI {
  initialLocale?: string;
  namespacesRequired?: string[] | undefined;
  extraLocales?: false | string[] | undefined;
  defaultLocale?: string;
  locales?: string[];
}

/**
 * next-i18next serverSideTranslations function doesn't work with NX.
 * So, we have to use our own function as a wrapper of serverSideTranslations and create
 * userConfig object from scratch.
 *
 * @param {serverSideTranslationsI}  - initialLocale: The initial locale of the page.
 * @returns A function that returns a promise.
 */
export function serverSideTranslationsWithNX({
  initialLocale = 'ar',
  defaultLocale = 'ar',
  locales = ['ar', 'en'],
  namespacesRequired,
  extraLocales,
}: serverSideTranslationsI) {
  const userConfig = {
    i18n: { defaultLocale, locales },
    localePath: path.resolve(__dirname, '../../../../frontend/public/locales'),
  };

  return () =>
    serverSideTranslations(
      initialLocale,
      namespacesRequired,
      userConfig,
      extraLocales
    );
}
