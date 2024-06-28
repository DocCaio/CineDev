import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Cine Dev",
  description: "Cine system ,buy tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">{children}</body>     
    </html>
  );
}
