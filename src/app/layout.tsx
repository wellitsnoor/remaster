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
      <head>
        <link rel="icon" href="/faviconreal.png" type="image/x-icon" />
      </head>

      <body>{children}</body>
    </html>
  );
}
