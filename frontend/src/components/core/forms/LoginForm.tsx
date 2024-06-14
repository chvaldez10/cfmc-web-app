import { FC } from "react";
import { login, signup } from "@/app/login/actions";
import CustomInput from "./CustomInput";

const LoginForm: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                className="font-medium underline hover:text-purple-500"
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
