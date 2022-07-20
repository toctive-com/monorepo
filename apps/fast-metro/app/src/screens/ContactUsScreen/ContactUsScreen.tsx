import React from 'react';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { Page } from '../../components/layout/Page/Page';

import { Input } from '../../components/shared/Input/Input';
import { PageHeader } from '../../components/shared/PageHeader/PageHeader';
import { Textarea } from '../../components/shared/Textarea/Textarea';

export const ContactUsScreen = () => {
  return (
    <Page className="pb-0">
      <div className="flex h-screen flex-col items-center justify-start gap-16">
        <PageHeader text="About us" isBack={false} />

        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl font-semibold">Metro App</span>
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
  return (
    <form action="" className="flex w-full flex-col gap-4">
      <Input type="text" placeholder="John Doe" />
      <Input type="email" placeholder="name@mail.com" />
      <Textarea className="h-64 w-full" placeholder="I want to ..." />
      <Input type="submit" className="bg-blue-500 !py-4 text-white" />
    </form>
  );
}
