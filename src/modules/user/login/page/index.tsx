"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

const LoginPage = () => {
  return (
    <main className="gap flex flex-grow flex-col items-center justify-center gap-4 bg-gray-100-tk px-2 py-5 md:px-4">
      <div className="min-h-[300px] w-[100%] max-w-[537px] rounded-[8px] bg-gray-300-tk px-[32px] py-[64px]">
        <Form.Root>
          <fieldset className="mx-auto mb-[47px] max-w-[245px] text-lg text-gray-900-tk">
            Insira suas credências
            <small className="block text-sm text-warning">
              *Campos Obrigatóios
            </small>
          </fieldset>
          <Form.Field className="mb-[10px] grid" name="email">
            <Form.Label
              className="text-left text-lg text-gray-900-tk"
              htmlFor="email"
            >
              E-mail<span className="text-warning">*</span>
            </Form.Label>
            <Form.Control asChild>
              <input
                id="email"
                className="rounded px-[10px] py-[6px]"
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
          <Form.Field className="mb-[83px] grid" name="password">
            <Form.Label
              className="text-left text-lg text-gray-900-tk"
              htmlFor="password"
            >
              Senha<span className="text-warning">*</span>
            </Form.Label>
            <Form.Control asChild>
              <input
                id="password"
                className="rounded px-[10px] py-[6px]"
                type="password"
                required
                placeholder="Insira sua senha"
              />
            </Form.Control>
            <a href="" className="text-gray-900-tk mt-[7px]">
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
            <button className="mx-[auto] block w-[100%] max-w-[229px] rounded bg-gray-900-tk p-[19px] text-lg text-gray-100-tk">
              Entrar na conta
            </button>
          </Form.Submit>
        </Form.Root>
        <a href="" className="text-gray-900-tk text-center block mt-[8px]">Não possuo uma conta</a>
      </div>
    </main>
  );
};

export default LoginPage;
