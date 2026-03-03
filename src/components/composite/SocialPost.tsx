import React from "react";
import { cn } from "../../lib/cn";
import { Avatar, AvatarImage, AvatarFallback, Button } from "../primitives";
import { Card } from "../layout";

export interface SocialPostAuthor {
  name: string;
  avatar?: string;
  handle: string;
}

export interface SocialPostProps extends React.HTMLAttributes<HTMLDivElement> {
  author: SocialPostAuthor;
  content: string;
  timestamp: string;
  likes?: number;
  comments?: number;
  shares?: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export const SocialPost = React.forwardRef<HTMLDivElement, SocialPostProps>(
  (
    {
      className,
      author,
      content,
      timestamp,
      likes = 0,
      comments = 0,
      shares = 0,
      onLike,
      onComment,
      onShare,
      ...props
    },
    ref,
  ) => {
    const initials = author.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <Card ref={ref} shadow="md" padding="md" className={cn("flex flex-col gap-3", className)} {...props}>
        <div className="flex items-center gap-3">
          <Avatar size="md">
            {author.avatar && <AvatarImage src={author.avatar} alt={author.name} />}
            <AvatarFallback color="accent">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-skin text-sm font-skin-bold">{author.name}</span>
            <span className="font-skin text-xs text-skin-text/50">
              @{author.handle} &middot; {timestamp}
            </span>
          </div>
        </div>

        <p className="font-skin text-sm leading-relaxed">{content}</p>

        <div className="flex items-center gap-1 border-t-2 border-skin-border pt-3">
          <Button variant="ghost" size="sm" onClick={onLike} className="gap-1.5">
            <HeartIcon />
            <span className="text-xs">{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={onComment} className="gap-1.5">
            <CommentIcon />
            <span className="text-xs">{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={onShare} className="gap-1.5">
            <ShareIcon />
            <span className="text-xs">{shares}</span>
          </Button>
        </div>
      </Card>
    );
  },
);
SocialPost.displayName = "SocialPost";

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}
