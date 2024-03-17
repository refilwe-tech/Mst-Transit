import { FC } from "react";

interface CardProps {
  title: string;
  location: string;
  parcels?: string;
  tickets?: string;
  groceries?: string;
}

export const Card: FC<CardProps> = ({
  title,
  location,
  parcels,
  tickets,
  groceries,
}) => {
  return (
    <section className="flex flex-col gap-3 h-full">
      <h1>{title}</h1>
      <p>
        We offer the best delivery services in{" "}
        <strong className="font-extrabold">{location}</strong>.
      </p>
      <ul className="flex-1">
        {parcels && parcels !== "0" && <li>Food & Parcels : R{parcels}</li>}
        {tickets && tickets !== "0" && <li>Megabus Tickets : R{tickets}</li>}
        {groceries && groceries !== "0" && (
          <li>Lite Groceries : R{groceries}</li>
        )}
      </ul>
    </section>
  );
};
