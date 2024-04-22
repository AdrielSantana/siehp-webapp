"use client";
import Image from "next/image";

import siehpLogo from "@/shared/infra/presentation/assets/images/siehp_logo.png";
import { useExample } from "@/shared/infra/services/hooks/useExample";
import { ExampleComponent } from "@/shared/infra/presentation/components/ExampleComponent";
import { useAuthStore } from "@/modules/user/infra/services/stores/auth-store";
import { useEffect } from "react";
import { RemoteAuth } from "@/modules/user/infra/services/data/usecases";

const ExamplePage = ({}) => {
  const { example } = useExample();

  const {
    auth,
    setAuth
  } = useAuthStore()

  useEffect(() => { // TODO: Substituir por uma chamada de API utilizando o Tanstack/React Query
    (async () => {const userAuth = await new RemoteAuth().authUser({
      email: 'sadas',
      password: 'asdas'
    })

    setAuth(userAuth)})()
  }, [setAuth])

  return (
    <div>
      Example Page
      <p>Vem do contexto do layout: {example}</p>
      <ExampleComponent.Root className="border-2">
        <ExampleComponent.Title>Example Component</ExampleComponent.Title>
      </ExampleComponent.Root>
      <Image
        src={siehpLogo.src}
        alt="Siehp Logo"
        width={siehpLogo.width}
        height={siehpLogo.height}
      />
      {auth?.user.name}
    </div>
  );
};

export default ExamplePage;
