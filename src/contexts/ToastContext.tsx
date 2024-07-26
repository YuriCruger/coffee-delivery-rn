import { ReactNode, createContext, useState } from "react";

import { Toast } from "@/components/Toast";

export interface ToastProductProps {
  quantity: string;
  title: string;
  size: string;
}

interface ContextProps {
  addToast: ({ quantity, title, size }: ToastProductProps) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ContextProps>({} as ContextProps);

export const ToastProvider = ({ children }: ProviderProps) => {
  const [toast, setToast] = useState<ToastProductProps | null>(null);

  const addToast = ({ quantity, title, size }: any) => {
    setToast({ quantity, title, size });
  };

  return (
    <ToastContext.Provider
      value={{
        addToast,
      }}
    >
      {children}

      {toast?.title && (
        <Toast
          title={toast.title}
          quantity={toast.quantity}
          size={toast.size}
          showToast={toast ? true : false}
          setShowToast={setToast}
        />
      )}
    </ToastContext.Provider>
  );
};
