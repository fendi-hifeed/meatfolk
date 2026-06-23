import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default:
      "bg-surface-container-high text-on-surface-variant",
    secondary:
      "bg-secondary-container text-on-secondary-container",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full font-label-sm text-label-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
