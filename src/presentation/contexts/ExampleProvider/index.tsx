'use client'

import { createContext, useEffect, useState } from "react";
import { ExampleContextData, ExampleProviderProps } from "./types";
import { RemoteExample } from "@/data/usecases";
import { exampleAdapter } from "@/main/adapters";

export const ExampleContext = createContext<ExampleContextData>(
    {} as ExampleContextData
)

const ExampleProvider = ({ children }: ExampleProviderProps) => {
  const [example, setExample] = useState<string>('')
  const remoteExample = new RemoteExample()

  const getExample = async () => {
    const exampleData = await remoteExample.getExample({example: 'nada so pra testar'})
    const exampleAdapted = exampleAdapter(exampleData)
    setExample(exampleAdapted.example.exampleModelAttribute)
  }

  useEffect(() => {
    getExample()
  },[])

  return (
    <ExampleContext.Provider value={{ example }}>
    {children}
    </ExampleContext.Provider>
  )
}

export default ExampleProvider
