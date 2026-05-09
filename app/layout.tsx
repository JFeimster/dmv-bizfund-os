import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMarketConfig } from "@/lib/market";

const market = getMarketConfig();

export const metadata: Metadata = {
  metadataBase: new URL(`https://${market.domain}`),
  title: {
    default: `${market.brandName} | ${market.publicDescriptor}`,
    template: `%s | ${market.brandName}`
  },
  description: market.publicDescriptor,
  openGraph: {
    title: market.brandName,
    description: market.publicDescriptor,
    url: `https://${market.domain}`,
    siteName: market.brandName,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
