import { FC, PropsWithChildren } from "react";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="flex flex-col px-6">{children}</main>;
};
