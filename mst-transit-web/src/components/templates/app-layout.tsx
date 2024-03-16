import { FC, PropsWithChildren } from "react";
import { Nav } from "..";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col">
      <Nav />
      <section className="px-6">{children}</section>
    </main>
  );
};
