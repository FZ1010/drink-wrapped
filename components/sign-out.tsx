"use client";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

const SignOut = () => {
  return (
    <Button
      startContent={<IoLogOut size={20} />}
      variant={"flat"}
      onPress={() => signOut()}
    >
      Logout
    </Button>
  );
};

export default SignOut;
