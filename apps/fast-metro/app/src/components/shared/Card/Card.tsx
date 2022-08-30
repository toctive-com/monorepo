import { Link } from 'react-router-dom';
interface Card {
  className?: string;
  image?: any;
  text: string;
  to?: string;
}

/**
 * A Feature Card component. This component is used to display a card with a text and an image.
 * It is used in the Features component.
 * The Features component is used to display a list of cards in Home Page.
 *
 * @param {Card}  - Card - the name of the component
 * @returns A React component
 */
export function Card({ className, image, text, to = '/home' }: Card) {
  return (
    <Link to={to}>
      <div
        className={`flex w-full flex-col flex-wrap items-center gap-2 ${className}`}
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-800">
          {image}
        </div>
        <span className="text-center text-lg">{text}</span>
      </div>
    </Link>
  );
}

export default Card;
