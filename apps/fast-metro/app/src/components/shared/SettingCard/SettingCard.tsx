import React from 'react';

export default function SettingCard(props: any) {
  const {
    className,
    title,
    text,
  }: { className?: string; title: string; text: string } = props;
  return (
    <div
      className={`rounded-sm bg-gray-100 p-4 ${className} flex justify-between`}
    >
      <div className={`flex flex-col `}>
        <span className="text-lg">{title}</span>
        <span className="text-sm text-gray-400 ">{text}</span>
      </div>

      <div className="self-center">{props.children}</div>
    </div>
  );
}
