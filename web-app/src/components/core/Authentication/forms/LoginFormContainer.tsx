import { FC } from "react";
import LoginForm from "./LoginForm";
import AuthenticatedForm from "./AuthenticatedForm";
import { FlexCenter } from "@/components/core/ui";
import { checkAuthentication } from "@/utils/supabase/server";

const LoginFormContainer: FC = async () => {
  const { user, error } = await checkAuthentication();

  return (
    <FlexCenter containerClassName="px-6 py-8 mx-auto h-screen lg:py-0">
      {!user ? <LoginForm /> : <AuthenticatedForm />}
    </FlexCenter>
  );
};

export default LoginFormContainer;
