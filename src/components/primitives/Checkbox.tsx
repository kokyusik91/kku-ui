import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const checkboxVariants = cva(
  "peer inline-flex shrink-0 items-center justify-center border-skin border-skin-border rounded-skin font-skin transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skin-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-skin-primary data-[state=checked]:text-skin-text",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      shadow: {
        none: "",
        sm: "shadow-skin-sm",
        md: "shadow-skin-md",
        lg: "shadow-skin-lg",
      },
    },
    defaultVariants: {
      size: "md",
      shadow: "sm",
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
}

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, shadow, label, id, ...props }, ref) => {
  const checkboxId = id || React.useId();

  const checkboxEl = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      className={cn(checkboxVariants({ size, shadow }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon size={size} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label) return checkboxEl;

  return (
    <div className="flex items-center gap-2">
      {checkboxEl}
      <label
        htmlFor={checkboxId}
        className="font-skin text-skin-text text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
});
Checkbox.displayName = "Checkbox";

function CheckIcon({ size }: { size?: "sm" | "md" | "lg" | null }) {
  const sizeMap = { sm: 10, md: 12, lg: 14 };
  const s = sizeMap[size || "md"];
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
