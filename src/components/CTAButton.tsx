import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-momentum text-elevation hover:opacity-90",
  secondary: "bg-transparent text-elevation border border-operational/20 hover:border-elevation",
  ghost: "bg-transparent text-operational hover:text-elevation",
};

export default function CTAButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: CTAButtonProps) {
  const isExternal = href.startsWith("http");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition duration-200 whitespace-nowrap";

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
