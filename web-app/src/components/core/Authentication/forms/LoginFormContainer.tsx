import { FC } from "react";
import LoginForm from "./LoginForm";
import AuthenticatedForm from "./AuthenticatedForm";
import { FlexCenter } from "@/components/core/ui";
import { checkAuthentication } from "@/utils/supabase/server";
import { getWaffleSwitch } from "@/utils/supabase/actions/waffleSwitchActions";

const LoginFormContainer: FC = async () => {
  const { user, error } = await checkAuthentication();
  const enableSignUp = await getWaffleSwitch("enable_sign_up");

  return (
    <FlexCenter containerClassName="px-6 py-8 mx-auto h-screen lg:py-0">
      {!user ? (
        <LoginForm enableSignUp={enableSignUp?.isActive ?? false} />
      ) : (
        <AuthenticatedForm />
      )}
    </FlexCenter>
  );
};

export default LoginFormContainer;
