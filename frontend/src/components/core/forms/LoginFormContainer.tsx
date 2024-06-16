import { FC } from "react";
import LoginForm from "./LoginForm";
import AuthenticatedForm from "./AuthenticatedForm";

const LoginFormContainer: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <LoginForm />
      <AuthenticatedForm />
    </div>
  );
};

export default LoginFormContainer;
