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

// ⭐ UPDATED FULL METADATA ⭐
export const metadata: Metadata = {
  title:
    "The Pathseekers International School – Admissions Open 2026–27 | TPIS Ramgarh/Vijaypur",
  description:
    "Admissions Open 2026–27 at The Pathseekers International School (TPIS), Ramgarh/Vijaypur, District Samba (JKUT). CBSE-aligned learning, safe campus, strong academics, co-curricular activities. Enquire now.",

  openGraph: {
    title:
      "Admissions Open 2026–27 – The Pathseekers International School (TPIS)",
    description:
      "Join TPIS for CBSE-aligned learning, discipline, co-curricular excellence, and holistic student development. Fill enquiry form for Pre-Nursery to Grade 9.",
    url: "https://tpis-admissions.edubridgeerp.in",
    siteName: "The Pathseekers International School",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "TPIS - Admissions Open 2026–27",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TPIS – Admissions Open 2026–27 | The Pathseekers International School",
    description:
      "CBSE Curriculum · Safe Campus · Holistic Learning · Pre-Nursery to Grade 9. Apply Now.",
    images: ["/OG.png"],
  },

  // highest-quality SEO fields
  keywords: [
    "TPIS",
    "The Pathseekers International School",
    "School Admissions",
    "Admissions 2026",
    "Admissions 2027",
    "Ramgarh School",
    "Vijaypur School",
    "JKUT Schools",
    "CBSE Schools",
    "Best school in Samba",
    "Nursery admissions",
  ],
  authors: [{ name: "The Pathseekers International School" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Mobile Chrome theme color */}
        <meta name="theme-color" content="#0ea5e9" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
