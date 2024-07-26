import { ToastContext } from "@/contexts/ToastContext";
import { useContext } from "react";

export function useToast() {
  const toast = useContext(ToastContext);

  return toast;
}
