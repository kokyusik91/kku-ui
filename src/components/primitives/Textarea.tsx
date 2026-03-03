import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const textareaVariants = cva(
  [
    "w-full min-h-[80px]",
    "font-skin text-skin-text",
    "bg-skin-surface",
    "border-skin border-skin-border rounded-skin",
    "shadow-skin-sm",
    "placeholder:text-skin-text/40",
    "transition-shadow duration-100",
    "focus:outline-none focus:shadow-skin-md",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "resize-y",
  ],
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
      error: {
        true: "border-skin-danger focus:shadow-[4px_4px_0px_0px_theme(colors.skin.danger)]",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> &
  VariantProps<typeof textareaVariants>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ size, error }), className)}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants, type TextareaProps };
