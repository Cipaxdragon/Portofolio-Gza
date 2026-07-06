import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ahmad Ghazali — Motion Graphics & Web Designer",
  description:
    "Portfolio Ahmad Ghazali (Gali) — Motion Graphics Designer, Video Editor, dan Web Developer berbasis di Makassar, Indonesia. Creating visual experiences with code & creativity.",
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
    title: "Ahmad Ghazali — Motion Graphics & Web Designer",
    description:
      "Portfolio Ahmad Ghazali (Gali) — Creating visual experiences with code & creativity.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Ghazali — Motion Graphics & Web Designer",
    description:
      "Portfolio Ahmad Ghazali (Gali) — Creating visual experiences with code & creativity.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-brand-bg text-brand-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
