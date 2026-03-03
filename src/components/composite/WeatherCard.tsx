import React from "react";
import { cn } from "../../lib/cn";
import { Card } from "../layout";

export interface WeatherCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: string;
  temperature: number;
  condition: string;
  icon?: React.ReactNode;
  high: number;
  low: number;
  humidity?: number;
}

export const WeatherCard = React.forwardRef<HTMLDivElement, WeatherCardProps>(
  (
    {
      className,
      city,
      temperature,
      condition,
      icon,
      high,
      low,
      humidity,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        shadow="md"
        padding="lg"
        className={cn("flex flex-col gap-4", className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="font-skin text-lg font-skin-bold">{city}</h3>
            <span className="font-skin text-sm text-skin-text/60">{condition}</span>
          </div>
          {icon && <div className="text-4xl">{icon}</div>}
        </div>

        <div className="flex items-baseline gap-1">
          <span className="font-skin text-5xl font-black">{temperature}&deg;</span>
        </div>

        <div className="flex items-center gap-4 border-t-2 border-skin-border pt-3">
          <div className="flex flex-col items-center">
            <span className="font-skin text-xs text-skin-text/60">High</span>
            <span className="font-skin text-sm font-skin-bold">{high}&deg;</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-skin text-xs text-skin-text/60">Low</span>
            <span className="font-skin text-sm font-skin-bold">{low}&deg;</span>
          </div>
          {humidity !== undefined && (
            <div className="flex flex-col items-center">
              <span className="font-skin text-xs text-skin-text/60">Humidity</span>
              <span className="font-skin text-sm font-skin-bold">{humidity}%</span>
            </div>
          )}
        </div>
      </Card>
    );
  },
);
WeatherCard.displayName = "WeatherCard";
