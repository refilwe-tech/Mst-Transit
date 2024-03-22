import { FC, PropsWithChildren } from "react";
import { Footer, Nav } from "..";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col">
      <Nav />
      <section className="px-2 lg:px-16 w-full">{children}</section>
      <Footer />
    </main>
  );
};
