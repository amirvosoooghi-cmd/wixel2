import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIXEL® — Independent Digital Studio",
  description: "Digital experiences built to make ambitious brands impossible to ignore.",
  applicationName: "WIXEL Studio"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
