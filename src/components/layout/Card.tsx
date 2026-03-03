import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const cardVariants = cva(
  "font-skin text-skin-text border-skin border-skin-border rounded-skin bg-skin-surface",
  {
    variants: {
      shadow: {
        none: "",
        sm: "shadow-skin-sm",
        md: "shadow-skin-md",
        lg: "shadow-skin-lg",
      },
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-5",
        lg: "p-8",
      },
    },
    defaultVariants: {
      shadow: "md",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shadow, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ shadow, padding }), className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
