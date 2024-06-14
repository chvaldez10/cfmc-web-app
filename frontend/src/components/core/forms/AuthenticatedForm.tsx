import { FC } from "react";
import { login } from "@/app/login/actions";
import SimpleButton from "../buttons/SimpleButton";

const AuthenticatedForm: FC = () => {
  return (
    <div className="p-6 space-y-6 sm:p-8">
      <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
        Already Sign in
      </h1>
      <form className="space-y-6" action="#">
        <div className="flex flex-col items-center">
          <SimpleButton
            formAction={login}
            className="text-purple-500 hover:underline"
          >
            Logout
          </SimpleButton>
        </div>
      </form>
    </div>
  );
};

export default AuthenticatedForm;
