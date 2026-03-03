import React from "react";
import { cn } from "../../lib/cn";
import type { NeoBrutalColor } from "../../lib/types";
import { Button, Badge } from "../primitives";
import { Card } from "../layout";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  ctaOnClick?: () => void;
  highlighted?: boolean;
  color?: NeoBrutalColor;
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      period = "/mo",
      features,
      ctaText,
      ctaOnClick,
      highlighted = false,
      color = "primary",
      ...props
    },
    ref,
  ) => {
    const colorBorderMap: Record<string, string> = {
      primary: "border-skin-primary",
      secondary: "border-skin-secondary",
      accent: "border-skin-accent",
      success: "border-skin-success",
      warning: "border-skin-warning",
      danger: "border-skin-danger",
      info: "border-skin-info",
    };

    return (
      <Card
        ref={ref}
        shadow={highlighted ? "lg" : "md"}
        padding="lg"
        className={cn(
          "relative flex flex-col gap-6",
          highlighted && colorBorderMap[color],
          className,
        )}
        {...props}
      >
        {highlighted && (
          <Badge
            color={color}
            size="sm"
            className="absolute -top-3 left-1/2 -translate-x-1/2"
          >
            Popular
          </Badge>
        )}

        <div className="text-center">
          <h3 className="font-skin text-lg font-skin-bold">{title}</h3>
          <div className="mt-2 flex items-baseline justify-center gap-1">
            <span className="font-skin text-4xl font-black">{price}</span>
            <span className="font-skin text-sm text-skin-text/60">{period}</span>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 font-skin text-sm">
              <span className="text-skin-success font-skin-bold">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>

        <Button
          color={color}
          variant={highlighted ? "filled" : "outline"}
          className="mt-auto w-full"
          onClick={ctaOnClick}
        >
          {ctaText}
        </Button>
      </Card>
    );
  },
);
PricingCard.displayName = "PricingCard";
