import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildwithshannon.com"),
  title: {
    default: "Build With Shannon",
    template: "%s | Build With Shannon",
  },
  description:
    "Personal brand hub for building, teaching, and creating smart AI solutions.",
  openGraph: {
    title: "Build With Shannon",
    description:
      "Personal brand hub for building, teaching, and creating smart AI solutions.",
    type: "website",
    url: "/",
    siteName: "Build With Shannon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build With Shannon",
    description:
      "Personal brand hub for building, teaching, and creating smart AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} min-h-screen antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-3 md:px-5">
          <div className="flex min-h-screen flex-1 flex-col rounded-none border-x border-brand-soft-gray/80 bg-brand-off-white shadow-[0_24px_80px_rgba(31,36,48,0.08)] md:rounded-none">
            <Header />
            <main id="main-content" className="-mt-[92px] flex-1 pt-[92px]">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
