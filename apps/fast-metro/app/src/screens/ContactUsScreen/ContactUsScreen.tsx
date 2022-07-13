import React from 'react';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import Input from '../../components/shared/Input/Input';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Textarea from '../../components/shared/Textarea/Textarea';

export const ContactUsScreen = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start gap-24">
      <PageHeader text="About us" />
      <div className="mt-10 flex flex-col items-center gap-4">
        <span className="text-4xl font-semibold">Metro App</span>
        <span className="text-4xl font-semibold">info@toctive.com</span>
        <div className="flex gap-20">
          <FaFacebookSquare size={60} />
          <FaTwitterSquare size={60} />
        </div>
      </div>
      <Form />
    </div>
  );
};

function Form() {
  return (
    <form action="" className="flex w-full flex-col gap-4">
      <Input type="text" />
      <Input type="email" />
      <Textarea className="h-64 w-full" />
      <Input type="submit" className="bg-blue-500 py-4 text-white" />
    </form>
  );
}
