import React from "react";
import { cn } from "../../lib/cn";
import { Button, Badge } from "../primitives";
import { Card } from "../layout";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  onAddToCart?: () => void;
  badge?: string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      image,
      title,
      price,
      originalPrice,
      rating,
      onAddToCart,
      badge,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        shadow="md"
        padding="none"
        className={cn("flex flex-col overflow-hidden", className)}
        {...props}
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover border-b-2 border-skin-border"
          />
          {badge && (
            <Badge color="danger" size="sm" className="absolute top-2 right-2">
              {badge}
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h3 className="font-skin text-base font-bold leading-snug">{title}</h3>

          <div className="flex items-baseline gap-2">
            <span className="font-skin text-xl font-black">{price}</span>
            {originalPrice && (
              <span className="font-skin text-sm text-skin-text/50 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {rating !== undefined && (
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-sm",
                    i < Math.round(rating) ? "text-skin-warning" : "text-skin-text/20",
                  )}
                >
                  &#9733;
                </span>
              ))}
              <span className="font-skin text-xs text-skin-text/60 ml-1">
                {rating.toFixed(1)}
              </span>
            </div>
          )}

          <Button color="primary" className="w-full" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card>
    );
  },
);
ProductCard.displayName = "ProductCard";
