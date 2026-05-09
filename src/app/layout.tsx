import type { Metadata } from "next";
import { Geist, Geist_Mono, Fustat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NextJsTopLoader from "@/components/shared/NextjsTopLoader";

const fustat = Fustat({
  variable: "--font-fustat",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advantage Ride",
  description : "Reliable ride-sharing app offering fast, safe, and affordable transportation for daily commutes, airport transfers, and city travel with real-time booking and professional drivers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fustat.variable} antialiased`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>

      <body className="">
        <Navbar />
        <NextJsTopLoader />
        {children}
        <Footer />
      </body>

    </html>
  );
}
