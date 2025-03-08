import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Header, Navbar, HeroUiProviders } from "@repo/ui";

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
      <body className={`${inter.className} dark text-foreground bg-background`}>
        <HeroUiProviders>
          <Navbar />
          {children}
          <Footer />
        </HeroUiProviders>
      </body>
    </html>
  );
}
