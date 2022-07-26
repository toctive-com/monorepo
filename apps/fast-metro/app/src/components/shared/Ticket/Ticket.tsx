export const ticketColors = {
  blue: 'bg-blue-300',
  green: 'bg-green-300',
  red: 'bg-red-300',
  yellow: 'bg-yellow-300',
};

export type TicketColor = 'blue' | 'green' | 'red' | 'yellow';

interface TicketI {
  mainColor: TicketColor;
  className?: string;
}

/**
 * The ticket image component.
 * this component is used in the TripDetailsComponent. It is used to display the ticket image.
 *
 * @param {TicketI}  - `mainColor` - the color of the ticket
 * @returns A div
 *
 */
export function Ticket({ mainColor, className }: TicketI) {
  return (
    <div
      className={`flex h-[116px] w-10/12 max-w-xs items-center rounded ${
        mainColor ? ticketColors[mainColor] : 'bg-yellow-200'
      } ${className} `}
    >
      <div className="h-8 w-full bg-black"></div>
    </div>
  );
}

export default Ticket;
