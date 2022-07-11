interface TicketI {
  mainColor: string;
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
      className={`flex h-[116px] w-3/4 items-center rounded-sm ${
        mainColor ? `bg-${mainColor}` : 'bg-yellow-200'
      } ${className} `}
    >
      <div className="h-8 w-full bg-black"></div>
    </div>
  );
}

export default Ticket;
