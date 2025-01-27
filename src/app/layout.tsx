import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/libs/Provider";
import Navbar from "./components/Navbar";
import { AuthProvider } from "@/libs/AuthContext";

export const metadata: Metadata = {
  title: "Remaster",
  description: "Where music meets creativity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AuthProvider>
          <Navbar />
          <Provider>{children}</Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
