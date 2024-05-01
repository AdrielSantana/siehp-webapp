"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

const LoginPage = () => {
  return (
    <main className="gap flex-wrap flex flex-grow items-center justify-center gap-4 bg-gray-100-tk px-2 py-2">
      <div className="text-gray-900-tk max-w-lg">
        <h1 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1>
        <br />
        <h2 className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</h2>
      </div>
      <div className="lg:min-h-[200px] min-h-[100px] w-[100%] max-w-[537px] rounded-[8px] bg-gray-300-tk py-3 px-2">
        <Form.Root>
          <fieldset className="mx-auto mb-1 xl:mb-3 max-w-[321px] text-lg text-gray-900-tk font-semi-bold leading-[26px]">
            Insira suas credências
            <small className="block text-sm text-warning font-light">
              *Campos Obrigatóios
            </small>
          </fieldset>
          <Form.Field className="grid min-h-[122px]" name="email">
            <Form.Label
              className="text-left text-lg text-gray-900-tk font-semi-bold"
              htmlFor="email"
            >
              E-mail<span className="text-warning font-semi-bold">*</span>
            </Form.Label>
            <Form.Control asChild>
              <input
                id="email"
                className="rounded px-[10px] py-[6px] h-[50px] text-md"
                type="email"
                required
                placeholder="Insira seu e-mail"
              />
            </Form.Control>
            <Form.Message
              className="text-right text-md text-fail opacity-[0.8]"
              match="typeMismatch"
            >
              Por favor, insira um e-mail válido
            </Form.Message>
            <Form.Message
              className="text-right text-md text-fail opacity-[0.8]"
              match="valueMissing"
            >
              Por favor, insira um e-mail
            </Form.Message>
          </Form.Field>
          <Form.Field className="mb-2 xl:mb-[83px] grid" name="password">
            <Form.Label
              className="text-left text-lg text-gray-900-tk font-semi-bold mb-1/2 xl:mb-0.75"
              htmlFor="password"
            >
              Senha<span className="text-warning font-semi-bold">*</span>
            </Form.Label>
            <Form.Control asChild>
              <input
                id="password"
                className="rounded px-[10px] py-[6px] h-[50px]"
                type="password"
                required
                placeholder="Insira sua senha"
              />
            </Form.Control>
            <a href="" className="text-gray-900-tk mt-[7px] font-regular">
              Esqueci minha senha
            </a>
            <Form.Message
              className="text-right text-md text-fail opacity-[0.8]"
              match="valueMissing"
            >
              Por favor, insira uma senha
            </Form.Message>
          </Form.Field>{" "}
          <Form.Submit asChild>
            <button className="mx-[auto] block w-[100%] max-w-[229px] rounded bg-gray-900-tk p-[19px] text-lg text-gray-100-tk font-semi-bold">
              Entrar na conta
            </button>
          </Form.Submit>
        </Form.Root>
        <a href="" className="text-gray-900-tk text-center block mt-[8px] font-regular">Não possuo uma conta</a>
      </div>
    </main>
  );
};

export default LoginPage;
