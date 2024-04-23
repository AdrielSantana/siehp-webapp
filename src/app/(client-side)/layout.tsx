"use client";

import ReactQueryProvider from "@/shared/config/libs/react-query";

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
