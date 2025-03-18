import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remaster",
  description: "Redefining music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" />
      <body>{children}</body>
    </html>
  );
}
