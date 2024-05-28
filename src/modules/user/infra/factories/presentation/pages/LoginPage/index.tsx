"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

const LoginPage = () => {
  return (
    <main className="gap flex flex-grow flex-wrap items-center justify-center gap-4 bg-gray-100-tk px-2 py-2">
      <div className="max-w-lg text-gray-900-tk">
        <h1 className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </h1>
        <br />
        <h2 className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </h2>
      </div>
      <div className="min-h-[100px] w-[100%] max-w-[537px] rounded-[8px] bg-gray-300-tk px-2 py-3 lg:min-h-[200px]">
        <Form.Root>
          <fieldset className="mx-auto mb-1 max-w-[321px] text-lg font-semi-bold leading-[26px] text-gray-900-tk xl:mb-3">
            Insira suas credências
            <small className="block text-sm font-light text-warning">
              *Campos Obrigatóios
            </small>
          </fieldset>
          <Form.Field className="grid min-h-[122px]" name="email">
            <Form.Label
              className="text-left text-lg font-semi-bold text-gray-900-tk"
              htmlFor="email"
            >
              E-mail<span className="font-semi-bold text-warning">*</span>
            </Form.Label>
            <div className="relative min-h-[85px]">
              <Form.Control asChild>
                <input
                  id="email"
                  className="mb-[30px] h-[50px] w-[100%] rounded px-[10px] py-[6px] text-md"
                  type="email"
                  required
                  placeholder="Insira seu e-mail"
                />
              </Form.Control>
              <Form.Message
                className="absolute w-max text-right text-md text-fail opacity-[0.8]"
                match="typeMismatch"
                style={{ bottom: 0, right: 0 }}
              >
                Por favor, insira um e-mail válido
              </Form.Message>
              <Form.Message
                className="absolute w-max text-right text-md text-fail opacity-[0.8]"
                match="valueMissing"
                style={{ bottom: 0, right: 0 }}
              >
                Por favor, insira um e-mail
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field className="mb-2 grid xl:mb-[83px]" name="password">
            <Form.Label
              className="mb-1/2 text-left text-lg font-semi-bold text-gray-900-tk xl:mb-0.75"
              htmlFor="password"
            >
              Senha<span className="font-semi-bold text-warning">*</span>
            </Form.Label>
            <div className="relative min-h-[85px]">
              <Form.Control asChild>
                <input
                  id="password"
                  className="h-[50px] rounded px-[10px] py-[6px] w-[100%]"
                  type="password"
                  required
                  placeholder="Insira sua senha"
                />
              </Form.Control>
              <a href="" className="mt-[7px] font-regular text-gray-900-tk">
                Esqueci minha senha
              </a>
              <Form.Message
                className="absolute w-max text-right text-md text-fail opacity-[0.8]"
                match="valueMissing"
                style={{ bottom: 0, right: 0 }}
              >
                Por favor, insira uma senha
              </Form.Message>
            </div>
          </Form.Field>{" "}
          <Form.Submit asChild>
            <button className="mx-[auto] block w-[100%] max-w-[229px] rounded bg-gray-900-tk p-[19px] text-lg font-semi-bold text-gray-100-tk">
              Entrar na conta
            </button>
          </Form.Submit>
        </Form.Root>
        <a
          href=""
          className="mt-[8px] block text-center font-regular text-gray-900-tk"
        >
          Não possuo uma conta
        </a>
      </div>
    </main>
  );
};

export default LoginPage;
