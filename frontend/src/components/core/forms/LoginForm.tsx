"use client";

import { FC, useEffect } from "react";
import { login, signup } from "@/app/login/actions";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import CustomInput from "./CustomInput";
import FormButton from "../buttons/FormButton";

const LoginForm: FC = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");

  useEffect(() => {
    let toastId: number | string;

    if (status && message) {
      if (status === "success") {
        toastId = toast.success(message);
        console.log("toastId = ", toastId);
      } else if (status === "error") {
        toastId = toast.error(message);
        console.log("toastId = ", toastId);
      }
    }

    return () => {
      if (toastId) {
        toast.dismiss(toastId);
      }
    };
  }, [status, message]);

  return (
    <div className="bg-slate-50 w-full rounded-lg shadow sm:max-w-md xl:p-0">
      <div className="p-6 space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Welcome
        </h1>
        <form className="space-y-6" action="#">
          <CustomInput
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            required
          />
          <CustomInput
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
          />
          <div className="flex flex-col items-end ">
            {/* Un comment when need to be used */}
            {/* <FormButton className="underline hover:text-purple-500">
                Forgot password?
              </FormButton> */}

            <FormButton
              formAction={login}
              className="text-purple-500 hover:underline"
            >
              Sign In
            </FormButton>
          </div>

          {/* Un comment when need to be used */}
          {/* <p className="text-sm font-light text-center">
          Don’t have an account yet?{" "}
          <FormButton className="underline hover:text-purple-500">
            Sign Up
          </FormButton>
        </p> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
