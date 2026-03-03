import React from "react";
import { cn } from "../../lib/cn";
import { Avatar, AvatarImage, AvatarFallback, Badge } from "../primitives";
import { Card } from "../layout";
import { Divider } from "../layout";

export interface BlogPostCardAuthor {
  name: string;
  avatar?: string;
}

export interface BlogPostCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  excerpt: string;
  author: BlogPostCardAuthor;
  date: string;
  tags?: string[];
  onClick?: () => void;
}

export const BlogPostCard = React.forwardRef<
  HTMLDivElement,
  BlogPostCardProps
>(
  (
    { className, image, title, excerpt, author, date, tags, onClick, ...props },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        padding="none"
        className={cn(
          "overflow-hidden",
          onClick && "cursor-pointer transition-transform hover:-translate-y-0.5",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {/* Cover Image */}
        {image && (
          <div className="w-full aspect-video border-b-skin border-skin-border overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="px-5 pt-4 pb-2">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag) => (
                <Badge key={tag} size="sm" variant="filled" color="accent">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h3 className="font-skin text-lg font-skin-bold text-skin-text leading-snug">
            {title}
          </h3>
          <p className="font-skin text-sm text-skin-text/70 mt-1.5 line-clamp-2">
            {excerpt}
          </p>
        </div>

        <Divider className="mx-5" />

        {/* Author Bar */}
        <div className="flex items-center gap-3 px-5 py-3">
          <Avatar size="sm" shadow="none">
            {author.avatar ? (
              <AvatarImage src={author.avatar} alt={author.name} />
            ) : (
              <AvatarFallback color="secondary">
                {author.name[0].toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-col">
            <span className="font-skin text-sm font-skin-semibold text-skin-text">
              {author.name}
            </span>
            <span className="font-skin text-xs text-skin-text/50">{date}</span>
          </div>
        </div>
      </Card>
    );
  }
);
BlogPostCard.displayName = "BlogPostCard";
