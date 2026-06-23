import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-title-md transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary";

    const variants = {
      primary:
        "bg-primary-container text-on-primary hover:bg-primary shadow-sm hover:shadow-lg transform hover:-translate-y-0.5",
      secondary:
        "bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary",
      outline:
        "bg-transparent text-on-background border-2 border-outline hover:bg-surface-container-high",
      ghost:
        "bg-transparent text-secondary hover:text-secondary-container",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
