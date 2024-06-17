import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginFormContainer from "@/components/core/forms/LoginFormContainer";

export default function page() {
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
