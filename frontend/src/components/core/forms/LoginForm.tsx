import { FC } from "react";
import { login, signup } from "@/app/login/actions";
import CustomInput from "./CustomInput";
import SimpleButton from "../buttons/SimpleButton";

const LoginForm: FC = () => {
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
            {/* <SimpleButton className="underline hover:text-purple-500">
                Forgot password?
              </SimpleButton> */}

            <SimpleButton
              formAction={login}
              className="text-purple-500 hover:underline"
            >
              Sign In
            </SimpleButton>
          </div>

          {/* Un comment when need to be used */}
          {/* <p className="text-sm font-light text-center">
          Don’t have an account yet?{" "}
          <SimpleButton className="underline hover:text-purple-500">
            Sign Up
          </SimpleButton>
        </p> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
