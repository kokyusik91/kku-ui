import React from "react";
import { cn } from "../../lib/cn";
import { Button, Input } from "../primitives";
import { Card } from "../layout";

export interface LoginCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  onSubmit?: (data: { email: string; password: string }) => void;
  title?: string;
  showSocial?: boolean;
}

export const LoginCard = React.forwardRef<HTMLDivElement, LoginCardProps>(
  ({ className, onSubmit, title = "Log In", showSocial = false, ...props }, ref) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.({ email, password });
    };

    return (
      <Card
        ref={ref}
        shadow="lg"
        padding="lg"
        className={cn("w-full max-w-sm", className)}
        {...props}
      >
        <h2 className="font-skin text-2xl font-black text-center mb-6">{title}</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-email" className="font-skin text-sm font-skin-bold">
              Email
            </label>
            <Input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-password" className="font-skin text-sm font-skin-bold">
              Password
            </label>
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" color="primary" className="w-full mt-2">
            {title}
          </Button>
        </form>

        {showSocial && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-skin-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-skin-surface px-3 font-skin text-sm text-skin-text/60">
                  or continue with
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" className="flex-1">
                Google
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                GitHub
              </Button>
            </div>
          </>
        )}
      </Card>
    );
  },
);
LoginCard.displayName = "LoginCard";
