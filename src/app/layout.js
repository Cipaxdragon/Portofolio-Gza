import { Playfair_Display, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL('https://gza-mu.vercel.app'),
  title: "Ahmad Ghazali — All Things Visual.",
  description:
    "Portfolio Ahmad Ghazali (Gali) — Motion Graphics Designer, Video Editor, dan Web Developer. Saya percaya setiap karya visual adalah cara bercerita tanpa kata.",
  keywords: [
    "Ahmad Ghazali",
    "Gali",
    "Motion Graphics",
    "Web Designer",
    "Video Editor",
    "Portfolio",
    "Makassar",
  ],
  authors: [{ name: "Ahmad Ghazali" }],
  openGraph: {
    title: "Ahmad Ghazali — All Things Visual.",
    description:
      "Portfolio Ahmad Ghazali (Gali) — Saya percaya setiap karya visual adalah cara bercerita tanpa kata.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Ghazali — All Things Visual.",
    description:
      "Portfolio Ahmad Ghazali (Gali) — Saya percaya setiap karya visual adalah cara bercerita tanpa kata.",
  },
};

import GlobalClientProviders from "@/components/shared/GlobalClientProviders";

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} ${spaceMono.variable} dark`}
    >
      <body className="min-h-screen bg-brand-bg text-brand-text font-sans antialiased overflow-x-hidden">
        <GlobalClientProviders>
          {children}
        </GlobalClientProviders>
      </body>
    </html>
  );
}
