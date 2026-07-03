import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

const variants = {
  primary: "bg-brand-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-blue-600",
  secondary: "border border-brand-line bg-white text-brand-ink hover:border-brand-primary hover:text-brand-primary",
  ghost: "bg-brand-mist text-brand-primary hover:bg-blue-100",
};

export function ButtonLink({ to, href, variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-regular transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
