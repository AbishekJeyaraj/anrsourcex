import "./globals.css";

export const metadata = {
  title: "ANR SOURCEX - Premium Sourcing Partner | Find. Source. Deliver.",
  description:
    "ANR SOURCEX is India's trusted premium sourcing partner for quality rice, fresh fruits, vegetables, nuts and spices. Wholesale, bulk and export-ready. 150+ verified suppliers across 12+ states.",
  keywords: [
    "ANR SOURCEX",
    "premium sourcing",
    "bulk rice supplier",
    "wholesale spices India",
    "fresh fruits exporter",
    "vegetables supplier",
    "nuts wholesale",
    "ponni rice",
    "basmati rice",
    "cashew wholesale",
    "turmeric supplier",
    "coriander bulk",
    "cumin exporter",
    "black pepper wholesale",
    "golden raisins",
    "farm to business",
    "bulk food sourcing India",
  ],
  authors: [{ name: "ANR SOURCEX" }],
  creator: "ANR SOURCEX",
  publisher: "ANR SOURCEX",
  metadataBase: new URL("https://anrsourcex.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ANR SOURCEX - Premium Sourcing Partner | Find. Source. Deliver.",
    description:
      "Quality rice, fresh fruits, vegetables, nuts and spices — carefully sourced, quality-checked and delivered with the reliability your business deserves.",
    url: "https://anrsourcex.vercel.app",
    siteName: "ANR SOURCEX",
    images: [
      {
        url: "/images/hero-food.png.png",
        width: 1200,
        height: 630,
        alt: "ANR SOURCEX — Premium Sourcing Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANR SOURCEX - Premium Sourcing Partner",
    description:
      "Quality rice, fresh fruits, vegetables, nuts and spices — carefully sourced and delivered. 150+ verified suppliers across 12+ states.",
    images: ["/images/hero-food.png.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google20808fda6cc517df",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
