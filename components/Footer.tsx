import Link from "next/link";
import { getMarketConfig } from "@/lib/market";

export default function Footer() {
  const market = getMarketConfig();

  return (
    <footer className="border-t border-line py-10">
      <div className="container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">{market.brandName}</p>
          <p className="mt-3 max-w-xl text-sm text-muted">{market.publicDescriptor}. Funding information is educational and does not guarantee approval or specific terms.</p>
        </div>
        <div>
          <p className="font-black">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-muted">
            <Link href="/locations">Locations</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/newsletter">Newsletter</Link>
          </div>
        </div>
        <div>
          <p className="font-black">Convert</p>
          <div className="mt-3 grid gap-2 text-sm text-muted">
            <Link href="/apply">Check Funding Options</Link>
            <Link href="/tools/dmv-funding-readiness-scorecard">Get Your Score</Link>
            <Link href="/partner">Become a Referral Partner</Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-xs text-muted">© {new Date().getFullYear()} {market.brandName}. Powered by {market.parentBrand}. Built for static deployment on Vercel.</div>
    </footer>
  );
}
