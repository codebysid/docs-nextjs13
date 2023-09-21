import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "./MaterialComponents";

const Login = () => {

  return (
    <div>
      <Button
        className=" bg-blue"
        ripple={true}
        onClick={() => {
          signIn();
        }}
      >
        SignIn
      </Button>
    </div>
  );
};

export default Login;
