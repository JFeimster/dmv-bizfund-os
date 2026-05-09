import Link from "next/link";
import { getMarketConfig } from "@/lib/market";

export default function Header() {
  const market = getMarketConfig();

  const nav = [
    ["Funding", "/directory"],
    ["Guides", "/locations"],
    ["Industries", "/industries"],
    ["Tools", "/tools"],
    ["Articles", "/articles"],
    ["Partners", "/partner"]
  ];

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="min-w-0">
          <span className="site-logo">{market.brandName}</span>
          <span className="site-descriptor">{market.publicDescriptor}</span>
        </Link>
        <nav className="site-nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-0">
          <Link className="btn btn-secondary hidden sm:inline-flex" href="/partner">Partner</Link>
          <Link className="btn btn-primary site-header-cta" href="/apply">Get Funded</Link>
        </div>
      </div>
    </header>
  );
}
