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
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-black tracking-tight">{market.brandName}</span>
          <span className="text-xs text-muted">{market.publicDescriptor}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted lg:flex">
          {nav.map(([label, href]) => <Link className="hover:text-cream" key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link className="btn btn-secondary hidden sm:inline-flex" href="/partner">Partner</Link>
          <Link className="btn btn-primary" href="/apply">Check Options</Link>
        </div>
      </div>
    </header>
  );
}
