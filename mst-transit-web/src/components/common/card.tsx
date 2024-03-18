import { FC } from "react";

interface CardProps {
  title: string;
  number: string;
  parcels?: string;
  tickets?: string;
  groceries?: string;
}

export const Card: FC<CardProps> = ({
  title,
  number,
  parcels,
  tickets,
  groceries,
}) => {
  return (
    <section className="flex flex-col gap-3 h-full  border border-primary/90 rounded-lg p-5">
      <h1 className="font-extrabold flex gap-2 items-center">
        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {number}
        </p>
        {title}
      </h1>
      <ul className="flex-1">
        {parcels && parcels !== "0" && (
          <li className="flex items-center justify-between px-4">
            <p>· Food & Parcels</p> <p className="font-semibold">R{parcels}</p>
          </li>
        )}
        {tickets && tickets !== "0" && (
          <li className="flex items-center justify-between px-4">
            <p>· Megabus Tickets</p>
            <p className="font-semibold"> R{tickets}</p>
          </li>
        )}
        {groceries && groceries !== "0" && (
          <li className="flex items-center justify-between px-4">
            <p>· Lite Groceries</p>
            <p className="font-semibold"> R{groceries}</p>
          </li>
        )}
      </ul>
    </section>
  );
};
