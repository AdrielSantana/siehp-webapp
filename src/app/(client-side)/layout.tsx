"use client";

import ReactQueryProvider from "@/shared/config/libs/react-query";
import { useAuthStore } from "@/modules/user/infra/services/stores/auth-store";

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {auth} = useAuthStore()
  console.log(auth);
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
