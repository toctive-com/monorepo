import React from 'react';

interface ISettingCard {
  className?: string;
  title: string;
  text: string;
  onClick?: () => void;
}

export function SettingCard(props: any) {
  const { className, title, text, onClick }: ISettingCard = props;
  return (
    <div
      className={`rounded-sm bg-gray-100 p-4 ${className} flex justify-between`}
      onClick={onClick}
    >
      <div className={`flex flex-col `}>
        <span className="text-lg">{title}</span>
        <span className="text-sm text-gray-400 ">{text}</span>
      </div>

      <div className="self-center">{props.children}</div>
    </div>
  );
}
export default SettingCard;
