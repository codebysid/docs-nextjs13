"use client";
import React from "react";
import { Button } from "./MaterialComponents";

const ButtonCustom = ({ children, handler }) => {
  return (
    <Button
      ripple={true}
      className="bg-transparent text-gray shadow-none hover:shadow-none"
      onClick={() => handler()}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
