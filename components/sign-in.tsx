"use client";

import React from "react";
import { Button } from "@heroui/button";
import { signIn } from "next-auth/react";
import { Icon } from "@iconify-icon/react";

const SignIn = () => {
  return (
    <Button isIconOnly variant={"flat"} onPress={() => signIn("google")}>
      <Icon
        className={"text-default-500"}
        icon="solar:login-linear"
        width={24}
      />
    </Button>
  );
};

export default SignIn;
