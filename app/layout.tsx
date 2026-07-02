import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrdoctors.in"),

  title: {
    default: "VR Doctors Academy | Residential NEET Coaching in Hyderabad",
    template: "%s | VR Doctors Academy",
  },

  description:
    "VR Doctors Academy is a premier residential NEET coaching institute in Hyderabad, helping students achieve medical admissions through disciplined learning, expert faculty, residential campus and proven results.",

  keywords: [
    "VR Doctors Academy",
    "NEET Coaching Hyderabad",
    "Best NEET Coaching Hyderabad",
    "Residential NEET Coaching",
    "BiPC Coaching",
    "Intermediate NEET",
    "Long Term NEET",
    "Medical Entrance Coaching",
  ],

  authors: [
    {
      name: "VR Doctors Academy",
    },
  ],

  creator: "VR Doctors Academy",

  publisher: "VR Doctors Academy",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "VR Doctors Academy",
    description:
      "Residential NEET Coaching Institute in Hyderabad with expert faculty and proven medical admissions.",
    url: "https://vrdoctors.in",
    siteName: "VR Doctors Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VR Doctors Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VR Doctors Academy",
    description:
      "Residential NEET Coaching Institute in Hyderabad.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}