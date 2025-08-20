import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fatima's Portfolio",
  description: "A showcase of my design and development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        
        {children}
      </body>
    </html>
  );
}
