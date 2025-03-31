import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import { Footer, Navbar, HeroUiProviders } from "@repo/ui";
// Dynamically import Navbar
// const Navbar = dynamic(() => import("@repo/ui").then((mod) => mod.Navbar), { ssr: false });
// const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Braj Pandit",
  description: "A platform for learning and sharing knowledge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-foreground bg-background`}>
        <HeroUiProviders>
          <Navbar />
          {children}
          <Footer />
        </HeroUiProviders>
      </body>
    </html>
  );
}
