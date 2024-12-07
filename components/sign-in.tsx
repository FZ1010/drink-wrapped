"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { IoLogIn } from "react-icons/io5";

const SignIn = () => {
  return (
    <Button
      startContent={<IoLogIn size={20} />}
      variant={"flat"}
      onPress={() => signIn("google", { redirectTo: "/count" })}
    >
      Login
    </Button>
  );
};

export default SignIn;
