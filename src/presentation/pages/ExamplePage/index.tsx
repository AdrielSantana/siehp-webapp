'use client'

import { ExampleComponent } from '@/presentation/components/ExampleComponent'
import { useExample } from '@/presentation/hooks/useExample'
import Image from 'next/image'
import React from 'react'
import siehpLogo from '@/presentation/assets/images/siehp_logo.png'

const ExamplePage = () => {
    const {
        example
    } = useExample()
  return (
    <div>
      Example Page
        <p>Vem do contexto do layout: {example}</p>
      <ExampleComponent.Root>
        <ExampleComponent.Title>Example Component</ExampleComponent.Title>
      </ExampleComponent.Root>
      <Image
        src={siehpLogo.src}
        alt='Siehp Logo'
        width={siehpLogo.width}
        height={siehpLogo.height}
      />
    </div>
  )
}

export default ExamplePage
