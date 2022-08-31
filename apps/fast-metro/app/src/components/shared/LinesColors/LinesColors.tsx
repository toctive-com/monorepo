import { useTranslation } from 'react-i18next';

export function LinesColors({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col gap-3 rounded-lg ${className}`}>
      <LineColor color="blue" text={t('lines-colors.line-1')} />
      <LineColor color="red" text={t('lines-colors.line-2')} />
      <LineColor color={'green'} text={t('lines-colors.line-3')} />
    </div>
  );
}

type Colors = 'blue' | 'red' | 'green';
const LineColor = ({ color, text }: { color: Colors; text: string }) => {
  const colors = {
    red: {
      background: 'bg-red-500',
      text: 'text-red-500',
    },
    blue: {
      background: 'bg-blue-500',
      text: 'text-blue-500',
    },
    green: {
      background: 'bg-green-500',
      text: 'text-green-500',
    },
  };

  return (
    <div className={`flex items-center gap-5 `}>
      <div
        className={`dot
        h-4 w-4 rounded-full ${colors[color].background}`}
      />
      <div className={`TT text-base ${color}`}>{text}</div>
    </div>
  );
};

export default LinesColors;
