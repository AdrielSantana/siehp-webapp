'use client'
import ExampleProvider from '@/presentation/contexts/ExampleProvider'
import { MakeExampleLayoutProps } from './types'
import ExampleLayout from '@/presentation/layouts/ExampleLayout'

const MakeExampleLayout = ({ children }: MakeExampleLayoutProps) => {
  return (
    <ExampleProvider>
        <ExampleLayout>
            {children}
        </ExampleLayout>
    </ExampleProvider>
  )
}

export default MakeExampleLayout
