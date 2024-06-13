"use client";

import Link from "next/link";
import { FC } from "react";
import PurplePillButton from "../buttons/PurplePillButton";

const LoginForm: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="bg-slate-50 w-full rounded-lg shadow sm:max-w-md xl:p-0">
        <div className="p-6 space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Welcome
          </h1>
          <form className="space-y-6" action="#">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-purple-500 focus:shadow-outline block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-purple-500 focus:shadow-outline block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="text-sm font-medium hover:text-purple-500"
              >
                Forgot password?
              </Link>
              <PurplePillButton
                onClick={() => console.log("login clicked")}
                variant="filled"
                className="px-7"
              >
                Sign In
              </PurplePillButton>
            </div>
            <p className="text-sm font-light text-center">
              Don’t have an account yet?{" "}
              <Link href="#" className="font-medium hover:text-purple-500">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
