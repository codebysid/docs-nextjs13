"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const SessionProviders = (props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default SessionProviders;
