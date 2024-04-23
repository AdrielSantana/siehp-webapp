"use client";

import ReactQueryProvider from "@/shared/config/libs/react-query";

export const ClientSideLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default ClientSideLayout;
