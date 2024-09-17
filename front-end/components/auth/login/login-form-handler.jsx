"use client";

import { useState } from "react";
import EmailForm from "@/components/auth/login/validate-email";
import PasswordForm from "@/components/auth/login/validate-password";

export default function LoginFormHandler() {
  const [emailField, setEmail] = useState("");

  return emailField ? <PasswordForm email={emailField.email}/> : <EmailForm setEmail={setEmail} />;
}
