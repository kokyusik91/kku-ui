import React from "react";
import { cn } from "../../lib/cn";
import { Avatar, AvatarImage, AvatarFallback, Button } from "../primitives";
import { Card } from "../layout";
import { Divider } from "../layout";

export interface ProfileCardStat {
  label: string;
  value: string | number;
}

export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  bio?: string;
  avatar?: string;
  stats?: ProfileCardStat[];
  onFollow?: () => void;
  isFollowing?: boolean;
}

export const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    { className, name, bio, avatar, stats, onFollow, isFollowing, ...props },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        padding="none"
        className={cn("overflow-hidden", className)}
        {...props}
      >
        {/* Banner */}
        <div className="h-16 bg-skin-primary border-b-skin border-skin-border" />

        {/* Avatar + Info */}
        <div className="flex flex-col items-center -mt-8 px-5 pb-5">
          <Avatar size="lg" shadow="md" className="h-16 w-16 text-lg">
            {avatar ? (
              <AvatarImage src={avatar} alt={name} />
            ) : (
              <AvatarFallback color="accent">
                {name[0].toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>

          <h3 className="font-skin text-lg font-bold text-skin-text mt-3">
            {name}
          </h3>
          {bio && (
            <p className="font-skin text-sm text-skin-text/70 text-center mt-1 max-w-[250px]">
              {bio}
            </p>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <>
              <Divider className="my-4" />
              <div className="flex w-full justify-around">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-0.5"
                  >
                    <span className="font-skin text-lg font-bold text-skin-text">
                      {stat.value}
                    </span>
                    <span className="font-skin text-xs text-skin-text/60">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Follow Button */}
          {onFollow && (
            <Button
              onClick={onFollow}
              variant={isFollowing ? "outline" : "filled"}
              color="primary"
              size="sm"
              shadow="sm"
              className="mt-4 w-full"
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          )}
        </div>
      </Card>
    );
  }
);
ProfileCard.displayName = "ProfileCard";
