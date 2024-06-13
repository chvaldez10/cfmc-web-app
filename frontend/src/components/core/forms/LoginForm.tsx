import Link from "next/link";
import { FC } from "react";
import { login, signup } from "@/app/login/actions";

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
              <button className="text-sm font-medium hover:text-purple-500">
                Forgot password?
              </button>

              <button
                formAction={login}
                className="text-sm font-medium text-purple-500 "
              >
                Sign In
              </button>
            </div>

            {/* Turn this off for live use */}
            <p className="text-sm font-light text-center">
              Don’t have an account yet?{" "}
              <button
                formAction={signup}
                className="font-medium hover:text-purple-500"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
