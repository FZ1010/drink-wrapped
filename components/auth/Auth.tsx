import React from "react";

import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default async function Auth() {
  const session = await auth();
  const user = session?.user;

  if (user) {
    // User is signed in
    return <SignOut />;
  }

  // User is not signed in
  return <SignIn />;
}
