import { FC } from "react";
import { logout } from "@/app/login/actions";
import { FormButton } from "@/components/core/ui";

const AuthenticatedForm: FC = () => {
  return (
    <div className="p-6 space-y-6 sm:p-8">
      <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
        Signed in
      </h1>
      <form className="space-y-6" action="#">
        <div className="flex flex-col items-center">
          <FormButton
            formAction={logout}
            className="text-purple-500 hover:underline"
          >
            Logout
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default AuthenticatedForm;
