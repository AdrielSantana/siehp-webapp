import React from 'react'
import { MakeAuthenticatedLayoutProps as MakeAuthenticatedLayoutProps } from './types'
import AuthenticatedLayout from '@/shared/infra/presentation/layouts/AuthenticatedLayout'

const MakeAuthenticatedLayout = ({children}: MakeAuthenticatedLayoutProps) => {
  return (
    <div>
      <AuthenticatedLayout>
        {children}
      </AuthenticatedLayout>
    </div>
  )
}

export default MakeAuthenticatedLayout
