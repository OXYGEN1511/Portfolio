"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) * 0.3;
    const y = (e.clientY - centerY) * 0.3;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ease-out inline-flex items-center gap-2 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30",
    outline:
      "border-2 border-primary/50 text-foreground hover:border-primary hover:bg-primary/10",
    ghost: "text-foreground hover:bg-secondary",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={buttonRef as never}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(baseStyles, variants[variant], className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </Component>
  );
}
