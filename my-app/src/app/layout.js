import "./globals.css";

export const metadata = {
  title: {
    default: "ANR Sourcex — Premium Sourcing Partner | Rice, Spices, Fruits & Vegetables Wholesale India",
    template: "%s | ANR Sourcex",
  },
  description:
    "ANR Sourcex (anrsourcex) is India's trusted premium sourcing partner. We supply quality rice, fresh fruits, vegetables, nuts and spices wholesale & bulk. 150+ verified suppliers, 12+ states, 98% on-time delivery. Get a quote today!",
  keywords: [
    "anrsourcex",
    "ANR Sourcex",
    "ANR SOURCEX",
    "anr sourcex",
    "anrsourcex.vercel.app",
    "premium sourcing partner",
    "bulk rice supplier India",
    "wholesale spices India",
    "fresh fruits exporter India",
    "vegetables supplier wholesale",
    "nuts wholesale India",
    "ponni rice supplier",
    "basmati rice wholesale",
    "cashew wholesale supplier",
    "turmeric supplier India",
    "coriander bulk supplier",
    "cumin exporter India",
    "black pepper wholesale",
    "golden raisins wholesale",
    "farm to business sourcing",
    "bulk food sourcing India",
    "agricultural products exporter",
    "food sourcing company India",
    "wholesale food supplier",
    "premium food sourcing",
  ],
  authors: [{ name: "ANR Sourcex", url: "https://anrsourcex.vercel.app" }],
  creator: "ANR Sourcex",
  publisher: "ANR Sourcex",
  metadataBase: new URL("https://anrsourcex.vercel.app"),
  alternates: {
    canonical: "https://anrsourcex.vercel.app",
  },
  openGraph: {
    title: "ANR Sourcex — Premium Sourcing Partner | Find. Source. Deliver.",
    description:
      "ANR Sourcex (anrsourcex) — Quality rice, fresh fruits, vegetables, nuts and spices. Carefully sourced, quality-checked and delivered with the reliability your business deserves. 150+ suppliers across India.",
    url: "https://anrsourcex.vercel.app",
    siteName: "ANR Sourcex",
    images: [
      {
        url: "https://anrsourcex.vercel.app/images/hero-food.png.png",
        width: 1200,
        height: 630,
        alt: "ANR Sourcex — Premium Sourcing Partner for Rice, Spices, Fruits & Vegetables",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANR Sourcex — Premium Sourcing Partner | Find. Source. Deliver.",
    description:
      "ANR Sourcex (anrsourcex) — Quality rice, fruits, vegetables, nuts & spices. 150+ verified suppliers, 12+ states. Wholesale & export-ready.",
    images: ["https://anrsourcex.vercel.app/images/hero-food.png.png"],
    creator: "@anrsourcex",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google20808fda6cc517df",
  },
  category: "Food & Beverage",
  other: {
    "google-site-verification": "google20808fda6cc517df",
  },
};

// JSON-LD Structured Data for rich search results
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANR Sourcex",
  alternateName: ["anrsourcex", "ANR SOURCEX", "SOURCEX", "ANR Sourcex India"],
  url: "https://anrsourcex.vercel.app",
  logo: "https://anrsourcex.vercel.app/images/anr_logo.jpg",
  description:
    "ANR Sourcex is India's trusted premium sourcing partner for quality rice, fresh fruits, vegetables, nuts and spices. Wholesale, bulk and export-ready sourcing from 150+ verified suppliers.",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8825453262",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil", "Hindi"],
  },
  sameAs: [
    "https://www.instagram.com/anr_sourcex",
    "https://wa.me/918825453262",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ANR Sourcex",
  alternateName: "anrsourcex",
  url: "https://anrsourcex.vercel.app",
  description:
    "ANR Sourcex — Premium sourcing partner for rice, spices, fruits, vegetables, nuts. Wholesale & export from India.",
  publisher: {
    "@type": "Organization",
    name: "ANR Sourcex",
    logo: {
      "@type": "ImageObject",
      url: "https://anrsourcex.vercel.app/images/anr_logo.jpg",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://anrsourcex.vercel.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://anrsourcex.vercel.app/#business",
  name: "ANR Sourcex",
  alternateName: "anrsourcex",
  image: "https://anrsourcex.vercel.app/images/hero-food.png.png",
  url: "https://anrsourcex.vercel.app",
  telephone: "+91-8825453262",
  email: "anrsourcex@gmail.com",
  description:
    "Premium sourcing partner for quality rice, fresh fruits, vegetables, nuts and spices. Wholesale, bulk and export-ready. Farm to business delivery across India.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "99",
    bestRating: "5",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="application-name" content="ANR Sourcex" />
        <meta name="apple-mobile-web-app-title" content="ANR Sourcex" />
      </head>
      <body>{children}</body>
    </html>
  );
}
