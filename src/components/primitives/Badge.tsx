import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-skin font-skin-semibold text-skin-text",
    "border-skin border-skin-border rounded-skin",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outline: "bg-transparent",
      },
      color: {
        primary: "",
        secondary: "",
        accent: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
      },
      size: {
        sm: "h-5 px-1.5 text-xs",
        md: "h-6 px-2 text-sm",
        lg: "h-7 px-2.5 text-base",
      },
    },
    compoundVariants: [
      { variant: "filled", color: "primary", className: "bg-skin-primary" },
      { variant: "filled", color: "secondary", className: "bg-skin-secondary" },
      { variant: "filled", color: "accent", className: "bg-skin-accent" },
      { variant: "filled", color: "success", className: "bg-skin-success" },
      { variant: "filled", color: "warning", className: "bg-skin-warning" },
      { variant: "filled", color: "danger", className: "bg-skin-danger" },
      { variant: "filled", color: "info", className: "bg-skin-info text-white" },
      {
        variant: "outline",
        color: "primary",
        className: "text-skin-primary border-skin-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "text-skin-secondary border-skin-secondary",
      },
      {
        variant: "outline",
        color: "accent",
        className: "text-skin-accent border-skin-accent",
      },
      {
        variant: "outline",
        color: "success",
        className: "text-skin-success border-skin-success",
      },
      {
        variant: "outline",
        color: "warning",
        className: "text-skin-warning border-skin-warning",
      },
      {
        variant: "outline",
        color: "danger",
        className: "text-skin-danger border-skin-danger",
      },
      {
        variant: "outline",
        color: "info",
        className: "text-skin-info border-skin-info",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
    },
  },
);

type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, color, size, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, color, size }), className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
