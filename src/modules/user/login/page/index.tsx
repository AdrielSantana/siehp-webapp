"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";


const LoginPage = () => (
  <div style={{backgroundColor: "#1E1E1E", color: "#fff", minHeight: "722px", display: "flex", alignItems: "center", padding: "0 32px"}}>
    <div style={{maxWidth: 537}}>
      <h1 style={{fontWeight: 700, fontSize: "2rem", marginBottom: "25px", lineHeight: "38px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1>
      <p style={{fontWeight: 500, fontSize: "1.25rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
    </div>
    <Form.Root className="w-[260px]" style={{padding: "0 32px"}}>
      <Form.Field className="mb-[10px] grid" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="font-medium text-white text-[15px] leading-[35px]">
            Email
          </Form.Label>
          <Form.Message
            className="text-white text-[13px] opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-white text-[13px] opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="bg-blackA2 shadow-blackA6 text-white selection:color-white selection:bg-blackA6 box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="email"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-[10px] grid" name="question">
        <div className="flex items-baseline justify-between">
          <Form.Label className="font-medium text-white text-[15px] leading-[35px]">
            Question
          </Form.Label>
          <Form.Message
            className="text-white text-[13px] opacity-[0.8]"
            match="valueMissing"
          >
            Please enter a question
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="bg-blackA2 shadow-blackA6 text-white selection:color-white selection:bg-blackA6 box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 bg-white font-medium focus:shadow-black mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px] px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:outline-none">
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  </div>
);

export default LoginPage;
