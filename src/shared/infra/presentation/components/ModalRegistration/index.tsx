import React from "react";
import * as Form from "@radix-ui/react-form";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: IModal) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose(); // Fecha o modal se clicar fora
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative h-[758px] w-[537px] rounded-lg bg-[#474747] px-[32px] pb-[52px] pt-[38px]"
      >
        <Form.Root>
          <fieldset className="mx-auto flex max-w-[277px] flex-col text-center text-lg font-semi-bold leading-[26px] text-gray-900-tk drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]">
            Insira os dados do docente para realizar o cadastro
            <small className="block text-sm font-light text-warning">
              *Campos Obrigatóios
            </small>
          </fieldset>
          <Form.Field className="grid" name="email">
            <Form.Label
              className="text-left text-lg font-semi-bold text-gray-900-tk drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]"
              htmlFor="email"
            >
              E-mail<span className="font-semi-bold text-warning">*</span>
            </Form.Label>
            <div className="relative pb-0.5">
              <Form.Control asChild>
                <input
                  id="email"
                  className="my-1 h-[50px] w-[100%] rounded px-[10px] py-[6px] text-md drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]"
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
          <Form.Field className="grid min-h-[122px]" name="email">
            <Form.Label
              className="text-left text-lg font-semi-bold text-gray-900-tk drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]"
              htmlFor="email"
            >
              Confirmar E-mail
              <span className="font-semi-bold text-warning">*</span>
            </Form.Label>
            <div className="relative pb-0.5">
              <Form.Control asChild>
                <input
                  id="email"
                  className="my-1 h-[50px] w-[100%] rounded px-[10px] py-[6px] text-md drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]"
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
          <Form.Field className="grid min-h-[122px]" name="matricula">
            <Form.Label
              className="text-left text-lg font-semi-bold text-gray-900-tk drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]"
              htmlFor="matricula"
            >
              Matrícula(opcional)
            </Form.Label>
            <div className="relative min-h-[85px]">
              <Form.Control asChild>
                <input
                  id="matricula"
                  className="my-1 h-[50px] w-[100%] rounded px-[10px] py-[6px] text-md drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]"
                  type="text"
                />
              </Form.Control>
              <Form.Message
                className="absolute w-max text-right text-md text-fail opacity-[0.8]"
                match="typeMismatch"
                style={{ bottom: 0, right: 0 }}
              >
                Por favor, insira uma matrícula válida
              </Form.Message>
            </div>
          </Form.Field>
          <p className="font-semibold mx-auto h-[91px] w-[461px] text-center text-lg leading-tight text-[#f8f8f8] drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]">
            Após clicar em “Enviar Formulário” um e-mail com um código de acesso
            e um link serão enviados para finalizar o cadastro
          </p>
          <br />
          <Form.Submit asChild>
            <button className="mx-[auto] mt-[16px] block w-[100%] max-w-[267px] rounded bg-gray-900-tk px-[38px] py-[18px] text-lg font-semi-bold text-[#474747] drop-shadow-[0_0_3.2px_rgba(0,0,0,1)]">
              Enviar Formulário
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
}
