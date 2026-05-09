import Link from "next/link";
import { getMarketConfig } from "@/lib/market";

export default function Header() {
  const market = getMarketConfig();

  const nav = [
    ["Locations", "/locations"],
    ["Industries", "/industries"],
    ["Use Cases", "/use-cases"],
    ["Tools", "/tools"],
    ["Articles", "/articles"],
    ["Partners", "/referral-partners"],
    ["Directory", "/directory"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-ink/88 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="text-lg font-black tracking-tight text-cream group-hover:text-amber">{market.brandName}</span>
          <span className="hidden max-w-[280px] truncate text-xs text-muted sm:block">{market.publicDescriptor}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-muted lg:flex">
          {nav.map(([label, href]) => (
            <Link className="transition hover:text-amber" key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link className="btn btn-secondary hidden sm:inline-flex" href="/partner">Partner With Us</Link>
          <Link className="btn btn-primary" href="/apply">Check Options</Link>
        </div>
      </div>
    </header>
  );
}
