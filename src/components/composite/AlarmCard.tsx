import React from "react";
import { cn } from "../../lib/cn";
import { Toggle, Badge } from "../primitives";
import { Card } from "../layout";

export interface AlarmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string;
  label: string;
  days: string[];
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  onDelete?: () => void;
}

export const AlarmCard = React.forwardRef<HTMLDivElement, AlarmCardProps>(
  (
    { className, time, label, days, enabled, onToggle, onDelete, ...props },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "flex items-center gap-4",
          !enabled && "opacity-60",
          className
        )}
        {...props}
      >
        <div className="flex flex-1 flex-col gap-2">
          <span className="font-skin text-3xl font-bold leading-none text-skin-text">
            {time}
          </span>
          <span className="font-skin text-sm font-medium text-skin-text/70">
            {label}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {days.map((day) => (
              <Badge key={day} size="sm" variant="outline" color="secondary">
                {day}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Toggle
            pressed={enabled}
            onPressedChange={onToggle}
            size="sm"
            aria-label={`Toggle ${label}`}
          />
          {onDelete && (
            <button
              onClick={onDelete}
              className="font-skin text-xs font-semibold text-skin-danger hover:underline"
              aria-label={`Delete ${label}`}
            >
              Delete
            </button>
          )}
        </div>
      </Card>
    );
  }
);
AlarmCard.displayName = "AlarmCard";
