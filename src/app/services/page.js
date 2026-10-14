import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "AC Service in Kochi | Appliance Repair Services | Star Cool",
  description: "Explore AC service in Kochi, fridge repair, washing machine repair, microwave oven servicing, freezer repair, and commercial AC maintenance by Star Cool.",
  keywords: [
    "ac service in kochi",
    "fridge repair service in Kochi",
    "washing machine repair kochi",
    "Microwave Oven Repair in Kochi",
    "Commercial AC Contractors in Kochi"
  ],
  alternates: {
    canonical: "https://starcoolkochi.com/services",
  },
  openGraph: {
    title: "AC Service in Kochi | Appliance Repair Services | Star Cool",
    description: "Explore AC service in Kochi, fridge repair, washing machine repair, microwave oven servicing, freezer repair, and commercial AC maintenance by Star Cool.",
    url: "https://starcoolkochi.com/services",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Appliance Repair Services in Kochi - Star Cool",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Service in Kochi | Appliance Repair Services | Star Cool",
    description: "Explore AC service in Kochi, fridge repair, washing machine repair, microwave oven servicing, freezer repair, and commercial AC maintenance by Star Cool.",
    images: ["/icon.png"],
  },
};

export default function ServicesIndexPage() {
  const serviceList = Object.values(servicesData);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://starcoolkochi.com/services#webpage",
        "url": "https://starcoolkochi.com/services",
        "name": "AC Service in Kochi | Appliance Repair Services | Star Cool",
        "description": "Explore AC service in Kochi, fridge repair, washing machine repair, microwave oven servicing, freezer repair, and commercial AC maintenance by Star Cool.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://starcoolkochi.com/#website",
          "name": "Star Cool Kochi",
          "url": "https://starcoolkochi.com"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://starcoolkochi.com/services#itemlist",
        "itemListElement": serviceList.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://starcoolkochi.com/services/${service.slug}`,
          "name": service.name
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://starcoolkochi.com/services#breadcrumb",
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
      <Navbar />

      <main style={{ minHeight: "80vh", padding: "100px 0 60px" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="subtitle font-bold text-teal">Our Repair Solutions</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0b192c", margin: "14px 0" }}>
              Appliance Repair & HVAC Services in Kochi
            </h1>
            <p style={{ maxWidth: "750px", margin: "0 auto", color: "#4b5563", fontSize: "1.08rem", lineHeight: "1.7" }}>
              Explore AC service in Kochi, fridge repair, washing machine repair, microwave oven servicing, freezer repair, and commercial AC maintenance by Star Cool. Certified technicians at your doorstep in Edappally and Ernakulam.
            </p>
          </div>

          <div className="grid services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {serviceList.map((service) => (
              <div 
                key={service.slug} 
                className="feature-card" 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  padding: "32px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div className="card-icon" style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", background: "rgba(0,128,128,0.08)" }}>
                      <i className="fa-solid fa-screwdriver-wrench text-teal" style={{ fontSize: "20px" }}></i>
                    </div>
                    <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "#008080", background: "rgba(0,128,128,0.1)", padding: "4px 10px", borderRadius: "20px" }}>
                      {service.price}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#0b192c", marginBottom: "10px" }}>
                    {service.name}
                  </h2>
                  <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    {service.lead}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link 
                    href={`/services/${service.slug}`}
                    style={{ color: "#008080", fontWeight: "700", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    View Service Details <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
                  </Link>
                  <Link 
                    href={`/services/${service.slug}#booking`} 
                    className="btn btn-primary"
                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
