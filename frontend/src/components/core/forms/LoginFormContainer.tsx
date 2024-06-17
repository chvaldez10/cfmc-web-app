import { FC } from "react";
import LoginForm from "./LoginForm";
import AuthenticatedForm from "./AuthenticatedForm";
import { checkAuthentication } from "@/utils/supabase/server";

const LoginFormContainer: FC = async () => {
  const { user, error } = await checkAuthentication();

  if (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      {!user ? <LoginForm /> : <AuthenticatedForm />}
    </div>
  );
};

export default LoginFormContainer;
