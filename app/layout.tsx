import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deversify Tech",
  description:
    "Welcome to Deversify tech! We specialize in web design and development, offering expertise in platforms like WordPress, Shopify, Next.js, and React.js. From crafting visually stunning websites to seamless user experiences, we bring your vision to life. Plus, we offer professional video editing services to enhance your digital content. Let's create something extraordinary together!",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-primary">{children}</div>
      </body>
    </html>
  );
}
