"use client";

import { FC } from "react";
import { login, signUp } from "@/app/(main)/login/actions";
import { LoginInput } from "@/components/core/forms/";
import useToastNotification from "@/hooks/useToastNotification";
import {
  SectionHeader,
  LongParagraph,
  FormButton,
  Box,
} from "@/components/core/ui";

interface LoginFormProps {
  enableSignUp?: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ enableSignUp = false }) => {
  useToastNotification();

  return (
    <Box containerClassName="bg-slate-50 w-full rounded-lg shadow sm:max-w-md xl:p-0">
      <Box containerClassName="p-6 space-y-6 sm:p-8">
        <SectionHeader text="Welcome" />
        <LongParagraph containerClassName="text-gray-600">
          {`Please sign in if you're an admin user.`}
        </LongParagraph>
        <form className="space-y-6" action="#">
          <LoginInput
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            required
          />
          <LoginInput
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
            maxLength={20}
          />
          <Box
            containerClassName={`flex flex-row ${
              enableSignUp ? "justify-between" : "justify-end"
            }`}
          >
            {enableSignUp && (
              <FormButton className="underline hover:text-purple-500">
                Forgot password?
              </FormButton>
            )}

            <FormButton
              formAction={login}
              className="text-purple-500 hover:underline "
            >
              Sign In
            </FormButton>
          </Box>

          {enableSignUp && (
            <p className="text-sm font-light text-center">
              Don’t have an account yet?{" "}
              <FormButton
                className="underline hover:text-purple-500"
                formAction={signUp}
              >
                Sign Up
              </FormButton>
            </p>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
