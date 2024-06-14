import { FC } from "react";
import LoginForm from "./LoginForm";

const LoginFormContainer: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <LoginForm />
    </div>
  );
};

export default LoginFormContainer;
