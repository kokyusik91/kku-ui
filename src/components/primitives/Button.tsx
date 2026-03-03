import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-skin font-semibold text-skin-text",
    "border-skin border-skin-border rounded-skin",
    "transition-all duration-100",
    "active:translate-x-[var(--skin-press-x)] active:translate-y-[var(--skin-press-y)] active:shadow-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outline: "bg-transparent",
        ghost: "bg-transparent border-transparent shadow-none",
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
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-skin-sm active:shadow-none",
        md: "shadow-skin-md active:shadow-none",
        lg: "shadow-skin-lg active:shadow-none",
      },
    },
    compoundVariants: [
      // Filled variants
      { variant: "filled", color: "primary", className: "bg-skin-primary" },
      { variant: "filled", color: "secondary", className: "bg-skin-secondary" },
      { variant: "filled", color: "accent", className: "bg-skin-accent" },
      { variant: "filled", color: "success", className: "bg-skin-success" },
      { variant: "filled", color: "warning", className: "bg-skin-warning" },
      { variant: "filled", color: "danger", className: "bg-skin-danger" },
      { variant: "filled", color: "info", className: "bg-skin-info text-white" },
      // Outline variants
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
      // Ghost variants
      {
        variant: "ghost",
        color: "primary",
        className: "text-skin-primary hover:bg-skin-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-skin-secondary hover:bg-skin-secondary/10",
      },
      {
        variant: "ghost",
        color: "accent",
        className: "text-skin-accent hover:bg-skin-accent/10",
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-skin-success hover:bg-skin-success/10",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-skin-warning hover:bg-skin-warning/10",
      },
      {
        variant: "ghost",
        color: "danger",
        className: "text-skin-danger hover:bg-skin-danger/10",
      },
      {
        variant: "ghost",
        color: "info",
        className: "text-skin-info hover:bg-skin-info/10",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
      shadow: "md",
    },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, shadow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, color, size, shadow }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
