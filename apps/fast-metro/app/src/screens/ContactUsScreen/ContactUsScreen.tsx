import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { Page } from '../../components/layout/Page/Page';

import { Input } from '../../components/shared/Input/Input';
import { PageHeader } from '../../components/shared/PageHeader/PageHeader';
import { Textarea } from '../../components/shared/Textarea/Textarea';

export const ContactUsScreen = () => {
  const { t } = useTranslation();

  return (
    <Page className="pb-0">
      <div className="flex h-full flex-col items-center justify-start gap-16">
        <PageHeader text={t('contact-us-screen.title')} isBack={false} />

        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl font-semibold">
            {t('contact-us-screen.app-name')}
          </span>
          <span className="text-xl font-semibold">info@toctive.com</span>
          <div className="flex w-full justify-around ">
            <FaFacebookSquare size={48} />
            <FaTwitterSquare size={48} />
          </div>
        </div>

        <Form />
      </div>
    </Page>
  );
};

function Form() {
  const { t } = useTranslation();

  return (
    <form action="" className="flex w-full flex-col gap-4">
      <Input
        type="text"
        placeholder={t('contact-us-screen.contact-form.name')}
      />
      <Input
        type="email"
        placeholder={t('contact-us-screen.contact-form.email')}
      />
      <Textarea
        className="h-64 w-full"
        placeholder={t('contact-us-screen.contact-form.massage')}
      />
      <Input
        type="submit"
        className="mb-8 border-blue-800 !bg-blue-700 !py-4 text-white !shadow-blue-500"
      />
    </form>
  );
}
