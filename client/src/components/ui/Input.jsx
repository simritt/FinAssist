import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

const Input = forwardRef(({ label, error, type = "text", icon: Icon, className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        )}
        <input
          ref={ref}
          type={inputType}
          className={clsx(
            "input-field",
            Icon && "pl-10",
            isPassword && "pr-10",
            error && "border-rose-400 focus:ring-rose-400/50 focus:border-rose-400",
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-rose-500">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
