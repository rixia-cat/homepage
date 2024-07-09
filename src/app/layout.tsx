import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { mainFont } from "@/util/font";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://rixia.dev"),
  title: "rixia.dev",
  description: "rixiaの個人サイト・ブログ。技術系の記事や日常のことを書いています。",
  openGraph: {
    title: "rixia.dev",
    description: "rixiaの個人サイト・ブログ。技術系の記事や日常のことを書いています。",
    type: "website",
    url: "https://rixia.dev",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className={mainFont.className}>
      <body className="flex min-h-screen flex-col ">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Header />
          {/* iOSなどでbackground */}
          <div className="flex-1 bg-background dark:bg-background-dark">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
