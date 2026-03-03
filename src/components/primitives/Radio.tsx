import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const orientationStyles: Record<string, string> = {
  vertical: "flex flex-col gap-3",
  horizontal: "flex flex-row gap-4",
};

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(
      "font-skin",
      orientationStyles[orientation],
      className
    )}
    orientation={orientation}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

const radioItemVariants = cva(
  "aspect-square rounded-full border-skin border-skin-border bg-skin-surface text-skin-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skin-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {
  label?: string;
}

export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size, shadow, label, id, children, ...props }, ref) => {
  const radioId = id || React.useId();

  const radioEl = (
    <RadioGroupPrimitive.Item
      ref={ref}
      id={radioId}
      className={cn(radioItemVariants({ size, shadow }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <RadioDot size={size} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (!label) return radioEl;

  return (
    <div className="flex items-center gap-2">
      {radioEl}
      <label
        htmlFor={radioId}
        className="font-skin text-skin-text text-sm leading-none"
      >
        {label}
      </label>
    </div>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

function RadioDot({ size }: { size?: "sm" | "md" | "lg" | null }) {
  const sizeMap = { sm: "h-1.5 w-1.5", md: "h-2 w-2", lg: "h-2.5 w-2.5" };
  return (
    <span
      className={cn(
        "block rounded-full bg-skin-primary",
        sizeMap[size || "md"]
      )}
    />
  );
}
