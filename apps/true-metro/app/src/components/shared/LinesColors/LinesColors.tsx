import { useTranslation } from 'react-i18next';

export function LinesColors({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div
      className={`nav-shadow absolute bottom-0 left-0 right-0 flex justify-around rounded-t-lg border-t border-gray-200 bg-white p-4 dark:border-gray-900 dark:bg-gray-800 ${className}`}
    >
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
    <div className={`flex items-center gap-2 `}>
      <div
        className={`dot
        h-4 w-4 rounded-full ${colors[color].background}`}
      />
      <div className={`TT text-base ${color}`}>{text}</div>
    </div>
  );
};

export default LinesColors;
