import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "@/components/Authentication";

export default async function LoginPage() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover={false}
        draggable={false}
      />
      <Login />
    </>
  );
}
