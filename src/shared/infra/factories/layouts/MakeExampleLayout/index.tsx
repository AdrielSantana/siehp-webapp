"use client";
import ExampleProvider from "@/shared/infra/services/contexts/ExampleProvider";
import { MakeExampleLayoutProps } from "./types";
import ExampleLayout from "@/app/example/layout";

const MakeExampleLayout = ({ children }: MakeExampleLayoutProps) => {
  return (
    <ExampleProvider>
      <ExampleLayout>{children}</ExampleLayout>
    </ExampleProvider>
  );
};

export default MakeExampleLayout;
