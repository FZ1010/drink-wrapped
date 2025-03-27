"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify-icon/react";

const SignOut = () => {
  return (
    <Button isIconOnly variant={"flat"} onPress={() => signOut()}>
      <Icon
        className={"text-default-500"}
        icon="solar:logout-linear"
        width={24}
      />
    </Button>
  );
};

export default SignOut;
