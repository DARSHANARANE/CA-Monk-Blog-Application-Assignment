import * as React from "react";

type ToastVariant = "default" | "destructive";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
}

const ToastContext = React.createContext<{
  toast: (toast: Omit<Toast, "id">) => void;
}>({ toast: () => {} });

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = (toast: Omit<Toast, "id">) => {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), variant: "default", ...toast },
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`rounded-lg border p-4 shadow-md bg-background ${
              t.variant === "destructive" ? "border-destructive text-destructive" : ""
            }`}
          >
            {t.title && <p className="font-medium">{t.title}</p>}
            {t.description && (
              <p className="text-sm text-muted-foreground">{t.description}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
