import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ThemeProvider } from "next-themes";
import { mainFont } from "@/util/font";

export const metadata: Metadata = {
  title: "rixia.dev",
  description: "rixia's site.",
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
