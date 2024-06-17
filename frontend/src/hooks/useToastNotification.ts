import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const useToastNotification = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");

  useEffect(() => {
    let toastId: number | string;

    if (status && message) {
      if (status === "success") {
        toastId = toast.success(message);
      } else if (status === "error") {
        toastId = toast.error(message);
      }
    }

    return () => {
      if (toastId) {
        toast.dismiss(toastId);
      }
    };
  }, [status, message]);
};

export default useToastNotification;
