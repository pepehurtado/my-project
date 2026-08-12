import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { en } from "../../content/en";
import { buildMetadata } from "../../content/metadata";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = buildMetadata(en);

export const viewport: Viewport = {
  themeColor: "#08090C",
  colorScheme: "dark",
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#08090C] text-neutral-200 antialiased`}
      >
        <noscript>
          {/* Content must remain readable without JavaScript. */}
          <style>{`.reveal{opacity:1!important;transform:none!important}.collapsible{grid-template-rows:1fr!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
