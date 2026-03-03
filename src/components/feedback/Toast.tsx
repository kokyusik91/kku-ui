import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

export const ToastProvider = ToastPrimitive.Provider;

const toastViewportClass = cn(
  "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-3 p-4",
  "sm:max-w-[420px]"
);

export const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(toastViewportClass, className)}
    {...props}
  />
));
ToastViewport.displayName = "ToastViewport";

const toastVariants = cva(
  [
    "group pointer-events-auto relative flex w-full items-center gap-3 overflow-hidden",
    "p-4 font-skin text-skin-text",
    "border-skin border-skin-border rounded-skin shadow-skin-md",
    "bg-skin-surface",
    "data-[state=open]:animate-skin-pop",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
  ],
  {
    variants: {
      variant: {
        default: "border-l-[6px] border-l-skin-border",
        success: "border-l-[6px] border-l-skin-success",
        error: "border-l-[6px] border-l-skin-danger",
        warning: "border-l-[6px] border-l-skin-warning",
        info: "border-l-[6px] border-l-skin-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

export const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("font-skin text-skin-text text-sm font-bold", className)}
    {...props}
  />
));
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("font-skin text-skin-text/70 text-sm", className)}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

export const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center shrink-0",
      "px-3 py-1 text-sm font-bold font-skin",
      "border-skin border-skin-border rounded-skin bg-skin-surface",
      "hover:bg-skin-accent hover:shadow-skin-sm",
      "transition-shadow",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = "ToastAction";

export const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2",
      "inline-flex h-6 w-6 items-center justify-center rounded-skin",
      "text-skin-text/50 hover:text-skin-text",
      "font-skin text-xs font-bold",
      className
    )}
    {...props}
  >
    &#x2715;
  </ToastPrimitive.Close>
));
ToastClose.displayName = "ToastClose";
