import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { ThemeProvider } from "next-themes"
import { M_PLUS_Rounded_1c } from "next/font/google"

export const metadata: Metadata = {
  title: "rixia.dev",
  description: "rixia's site.",
}

const font = M_PLUS_Rounded_1c({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className={font.className}>
      <body className="flex min-h-screen flex-col ">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Header />
          {/* iOSなどでbackground */}
          <div className="flex-1 bg-background dark:bg-background-dark">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
