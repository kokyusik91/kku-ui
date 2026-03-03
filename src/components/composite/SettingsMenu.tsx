import React from "react";
import { cn } from "../../lib/cn";
import { Toggle, Checkbox } from "../primitives";
import { Card } from "../layout";
import { Divider } from "../layout";

export interface SettingsMenuItem {
  label: string;
  description?: string;
  type: "toggle" | "checkbox";
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface SettingsMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SettingsMenuItem[];
  title?: string;
}

export const SettingsMenu = React.forwardRef<HTMLDivElement, SettingsMenuProps>(
  ({ className, items, title, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        padding="none"
        className={cn("overflow-hidden", className)}
        {...props}
      >
        {title && (
          <div className="px-5 pt-5 pb-3">
            <h3 className="font-skin text-lg font-skin-bold text-skin-text">{title}</h3>
          </div>
        )}
        <div className="flex flex-col">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider />}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-skin font-skin-semibold text-skin-text">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="font-skin text-sm text-skin-text/60">
                      {item.description}
                    </span>
                  )}
                </div>
                {item.type === "toggle" ? (
                  <Toggle
                    pressed={item.checked}
                    onPressedChange={item.onChange}
                    size="sm"
                    aria-label={item.label}
                  />
                ) : (
                  <Checkbox
                    checked={item.checked}
                    onCheckedChange={item.onChange}
                    aria-label={item.label}
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </Card>
    );
  }
);
SettingsMenu.displayName = "SettingsMenu";
