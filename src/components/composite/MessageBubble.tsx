import React from "react";
import { cn } from "../../lib/cn";
import { Avatar, AvatarImage, AvatarFallback } from "../primitives";

export interface MessageBubbleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  timestamp: string;
  variant: "sent" | "received";
  avatar?: string;
  senderName?: string;
}

export const MessageBubble = React.forwardRef<
  HTMLDivElement,
  MessageBubbleProps
>(({ className, content, timestamp, variant, avatar, senderName, ...props }, ref) => {
  const isSent = variant === "sent";

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-2.5 max-w-[80%]",
        isSent ? "ml-auto flex-row-reverse" : "mr-auto",
        className
      )}
      {...props}
    >
      {!isSent && (
        <Avatar size="sm" shadow="sm" className="shrink-0 mt-1">
          {avatar ? (
            <AvatarImage src={avatar} alt={senderName || "User"} />
          ) : (
            <AvatarFallback color="secondary">
              {senderName ? senderName[0].toUpperCase() : "?"}
            </AvatarFallback>
          )}
        </Avatar>
      )}
      <div className={cn("flex flex-col gap-1", isSent ? "items-end" : "items-start")}>
        {!isSent && senderName && (
          <span className="font-skin text-xs font-semibold text-skin-text/70 px-1">
            {senderName}
          </span>
        )}
        <div
          className={cn(
            "font-skin text-sm leading-relaxed px-4 py-2.5 border-skin border-skin-border rounded-skin",
            isSent
              ? "bg-skin-primary shadow-skin-sm rounded-br-none"
              : "bg-skin-surface shadow-skin-sm rounded-bl-none"
          )}
        >
          {content}
        </div>
        <span className="font-skin text-[10px] text-skin-text/50 px-1">
          {timestamp}
        </span>
      </div>
    </div>
  );
});
MessageBubble.displayName = "MessageBubble";
