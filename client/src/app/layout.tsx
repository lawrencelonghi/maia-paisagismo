import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Maia Paisagismo",
  description: "Empresa brasileira de paisagismo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
