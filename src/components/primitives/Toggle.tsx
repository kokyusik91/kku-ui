import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-skin font-medium text-skin-text border-skin border-skin-border rounded-skin transition-all active:translate-x-[var(--skin-press-x)] active:translate-y-[var(--skin-press-y)] active:shadow-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "bg-skin-surface data-[state=on]:bg-skin-primary",
        outline:
          "bg-transparent data-[state=on]:bg-skin-surface",
        ghost:
          "border-transparent shadow-none data-[state=on]:border-skin-border data-[state=on]:bg-skin-surface",
      },
      size: {
        sm: "h-8 px-2.5 text-sm gap-1.5",
        md: "h-10 px-3 text-base gap-2",
        lg: "h-12 px-4 text-lg gap-2.5",
      },
      shadow: {
        none: "",
        sm: "shadow-skin-sm data-[state=on]:shadow-skin-sm",
        md: "shadow-skin-md data-[state=on]:shadow-skin-md",
        lg: "shadow-skin-lg data-[state=on]:shadow-skin-lg",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      shadow: "sm",
    },
  }
);

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, shadow, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, shadow }), className)}
    {...props}
  />
));
Toggle.displayName = "Toggle";
