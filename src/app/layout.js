import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://starcoolkochi.com"),
  title: "AC Repair in Kochi | AC Service & Repairs | Star Cool",
  description: "Looking for AC repair in Kochi? Star Cool offers AC service in Kochi, refrigerator repair, washing machine repair, AC installation, and maintenance.",
  keywords: [
    "ac repair in kochi",
    "ac service in kochi",
    "ac repair kochi",
    "best AC repair service in Kochi",
    "home AC service in Kochi",
    "refrigerator repair Kochi",
    "washing machine repair kochi",
    "microwave oven repair in kochi"
  ],
  authors: [{ name: "Star Cool Kochi" }],
  creator: "Star Cool",
  publisher: "Star Cool",
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
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AC Repair in Kochi | AC Service & Repairs | Star Cool",
    description: "Looking for AC repair in Kochi? Star Cool offers AC service in Kochi, refrigerator repair, washing machine repair, AC installation, and maintenance.",
    url: "https://starcoolkochi.com",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Star Cool - AC Repair & Appliance Service in Kochi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Repair in Kochi | AC Service & Repairs | Star Cool",
    description: "Looking for AC repair in Kochi? Star Cool offers AC service in Kochi, refrigerator repair, washing machine repair, AC installation, and maintenance.",
    images: ["/icon.png"],
  },
  verification: {
    google: "UhR_XLFp6yrP4UAABq-jUMhPZpq0tZRGcsokkNSUxok",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi, Edappally, Ernakulam",
    "geo.position": "9.9674;76.3180",
    "ICBM": "9.9674, 76.3180",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": "https://starcoolkochi.com/#business",
    "name": "Star Cool Kochi",
    "alternateName": "Star Cool AC Repair & Home Appliance Service",
    "image": "https://starcoolkochi.com/icon.png",
    "logo": "https://starcoolkochi.com/icon.png",
    "url": "https://starcoolkochi.com",
    "telephone": "+918590225627",
    "email": "support@starcoolkochi.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Edappally Church",
      "addressLocality": "Edappally, Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682024",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9674,
      "longitude": 76.3180
    },
    "areaServed": [
      { "@type": "City", "name": "Kochi" },
      { "@type": "Place", "name": "Edappally" },
      { "@type": "AdministrativeArea", "name": "Ernakulam" },
      { "@type": "Place", "name": "Kakkanad" },
      { "@type": "Place", "name": "Palarivattom" },
      { "@type": "Place", "name": "Aluva" },
      { "@type": "Place", "name": "Vyttila" },
      { "@type": "Place", "name": "Kaloor" },
      { "@type": "Place", "name": "Tripunithura" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Repair & Servicing",
            "description": "AC diagnostics, gas charging, filter cleaning, and compressor replacement in Kochi and Edappally."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washing Machine Repair",
            "description": "Front-load, top-load, and semi-automatic washing machine repair and maintenance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerator Repair",
            "description": "Single-door, double-door, and French-door refrigerator cooling and thermostat repairs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microwave Oven Repair",
            "description": "Convection, grill, and solo microwave oven diagnostics and heating repairs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Freezer Repair",
            "description": "Commercial chest freezer and display cooler maintenance and gas charging."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ductable AC Service",
            "description": "Ductable AC maintenance, blower motor cleaning, airflow optimization, and compressor repair."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cassette AC Service",
            "description": "Ceiling-mounted cassette AC deep cleaning, drainage pump repair, and PCB replacement."
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
