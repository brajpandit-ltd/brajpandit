import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Brajpandit - A platform to book your events and take advance bookings with free advice from experts",
  description:
    "A platform to book your events and take advance bookings with free advice from experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
