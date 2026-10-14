import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { service: serviceKey } = await params;
  const service = servicesData[serviceKey];

  if (!service) {
    return {
      title: "Service Not Found | Star Cool",
      description: "Appliance repair service category not found.",
    };
  }

  const url = `https://starcoolkochi.com/services/${service.slug}`;
  const keywords = [service.focusKeyword, ...(service.secondaryKeywords || [])];

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "Star Cool Kochi",
      images: [
        {
          url: service.img || "/icon.png",
          width: 800,
          height: 600,
          alt: service.alt || service.name,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.img || "/icon.png"],
    },
  };
}

export default async function ServicePage({ params }) {
  const { service: serviceKey } = await params;
  const service = servicesData[serviceKey];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://starcoolkochi.com/services/${service.slug}#service`,
        "name": service.name,
        "description": service.lead,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Star Cool Kochi",
          "telephone": "+918590225627",
          "url": "https://starcoolkochi.com"
        },
        "areaServed": [
          { "@type": "City", "name": "Kochi" },
          { "@type": "Place", "name": "Edappally" },
          { "@type": "AdministrativeArea", "name": "Ernakulam" }
        ],
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": service.price.replace(/[^0-9]/g, "") || "399",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://starcoolkochi.com/services/${service.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://starcoolkochi.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://starcoolkochi.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.name,
            "item": `https://starcoolkochi.com/services/${service.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
