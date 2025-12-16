import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  newTab?: boolean;
};

export default function Button({ href, children, variant = "secondary", newTab }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";

  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-b from-indigo-400 to-indigo-600 hover:brightness-105 shadow-[0_18px_35px_-22px_rgba(99,102,241,0.95)]"
      : "border border-neutral-700 bg-neutral-950/40 text-neutral-100 hover:bg-neutral-900/60 hover:border-neutral-600";

  const props = newTab ? { target: "_blank", rel: "noreferrer" } : {};

  // External link
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={`${base} ${styles}`} {...props}>
        {children}
      </a>
    );
  }

  // Internal link
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
