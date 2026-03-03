import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const dividerVariants = cva("border-skin-border shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full border-t-[3px]",
      vertical: "h-full border-l-[3px] self-stretch",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (label && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation ?? undefined}
          className={cn("flex items-center gap-3 w-full", className)}
          {...props}
        >
          <div className="flex-1 border-t-[3px] border-skin-border" />
          <span className="font-skin text-skin-text text-sm font-skin-medium px-2">
            {label}
          </span>
          <div className="flex-1 border-t-[3px] border-skin-border" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation ?? undefined}
        className={cn(dividerVariants({ orientation }), className)}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";
