import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden border-skin border-skin-border rounded-skin font-skin",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-14 w-14 text-base",
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

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, shadow, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, shadow }), className)}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  color?: "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "info";
}

const fallbackColorMap: Record<string, string> = {
  primary: "bg-skin-primary",
  secondary: "bg-skin-secondary",
  accent: "bg-skin-accent",
  success: "bg-skin-success",
  warning: "bg-skin-warning",
  danger: "bg-skin-danger",
  info: "bg-skin-info",
};

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, color = "primary", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center font-skin font-skin-bold text-skin-text",
      fallbackColorMap[color],
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
