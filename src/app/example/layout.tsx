import MakeExampleLayout from "@/main/factories/layouts/MakeExampleLayout";
import { ReactNode } from "react";

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return <MakeExampleLayout>{children}</MakeExampleLayout>;
}
