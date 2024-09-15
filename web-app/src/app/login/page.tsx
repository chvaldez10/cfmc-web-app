import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginFormContainer } from "@/components/core/Authentication";
import { getWaffleSwitch } from "@/utils/supabase/actions/waffleSwitchActions";

export default async function LoginPage() {
  const waffleSwitch = await getWaffleSwitch("enable_sign_up");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover={false}
        draggable={false}
      />
      <LoginFormContainer />
    </>
  );
}
