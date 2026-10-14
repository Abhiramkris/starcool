import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Star Cool | AC Repair & HVAC Services in Kochi",
  description: "Learn about Star Cool, offering AC repair in Kochi, commercial HVAC services, refrigeration solutions, and professional AC maintenance in Ernakulam.",
  keywords: [
    "AC maintenance service in Kochi",
    "Commercial HVAC Services in Kochi",
    "HVAC Contractors in Ernakulam",
    "AC service in Ernakulam",
    "Star Cool Kochi"
  ],
  alternates: {
    canonical: "https://starcoolkochi.com/about",
  },
  openGraph: {
    title: "About Star Cool | AC Repair & HVAC Services in Kochi",
    description: "Learn about Star Cool, offering AC repair in Kochi, commercial HVAC services, refrigeration solutions, and professional AC maintenance in Ernakulam.",
    url: "https://starcoolkochi.com/about",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "About Star Cool Kochi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Star Cool | AC Repair & HVAC Services in Kochi",
    description: "Learn about Star Cool, offering AC repair in Kochi, commercial HVAC services, refrigeration solutions, and professional AC maintenance in Ernakulam.",
    images: ["/icon.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://starcoolkochi.com/about#webpage",
        "url": "https://starcoolkochi.com/about",
        "name": "About Star Cool | AC Repair & HVAC Services in Kochi",
        "description": "Learn about Star Cool, offering AC repair in Kochi, commercial HVAC services, refrigeration solutions, and professional AC maintenance in Ernakulam.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://starcoolkochi.com/#website",
          "name": "Star Cool Kochi",
          "url": "https://starcoolkochi.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://starcoolkochi.com/about#breadcrumb",
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
            "name": "About Us",
            "item": "https://starcoolkochi.com/about"
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
        {/* Header / Intro */}
        <section className="container" style={{ maxWidth: "1000px", marginBottom: "60px" }}>
          <div className="section-header" style={{ textAlign: "center", marginBottom: "30px" }}>
            <span className="subtitle font-bold text-teal">About Star Cool</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0b192c", margin: "14px 0", lineHeight: "1.3" }}>
              Why Choose Star Cool for AC Repair & HVAC Services in Kochi?
            </h1>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#374151", maxWidth: "880px", margin: "0 auto" }}>
              At Star Cool, we understand how frustrating it can be when your AC or home appliances stop working. That&apos;s why we provide reliable AC repair & HVAC services in Kochi and Edappally, with experienced technicians who focus on finding the problem and fixing it properly. From routine AC maintenance to unexpected breakdowns, we offer dependable service, clear explanations, and transparent pricing before starting any repair.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", margin: "30px 0" }}>
            <Link href="/complaint-register" className="btn btn-gradient btn-lg">
              <i className="fa-regular fa-calendar-check"></i> Book Doorstep Service
            </Link>
            <a href="tel:+918590225627" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-phone"></i> Call +91 85902 25627
            </a>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="container" style={{ maxWidth: "1100px", marginBottom: "70px" }}>
          <div className="grid services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            <div className="feature-card" style={{ padding: "32px", borderRadius: "18px", backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div className="card-icon" style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(0,128,128,0.1)", marginBottom: "18px" }}>
                <i className="fa-solid fa-bolt text-teal" style={{ fontSize: "24px" }}></i>
              </div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#0b192c", marginBottom: "12px" }}>
                Quick Response
              </h2>
              <p style={{ color: "#4b5563", lineHeight: "1.65" }}>
                Dealing with a sudden AC breakdown? Our technicians respond quickly and provide doorstep AC repair services in Kochi and Edappally, helping you get your cooling system back to normal without unnecessary delays.
              </p>
            </div>

            <div className="feature-card" style={{ padding: "32px", borderRadius: "18px", backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div className="card-icon" style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(0,128,128,0.1)", marginBottom: "18px" }}>
                <i className="fa-solid fa-user-gear text-teal" style={{ fontSize: "24px" }}></i>
              </div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#0b192c", marginBottom: "12px" }}>
                Experienced Technicians
              </h2>
              <p style={{ color: "#4b5563", lineHeight: "1.65" }}>
                Our trained technicians have over 7 years of experience handling AC repairs, HVAC maintenance, and home appliance servicing. We carefully inspect each problem and recommend practical repair solutions.
              </p>
            </div>

            <div className="feature-card" style={{ padding: "32px", borderRadius: "18px", backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div className="card-icon" style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(0,128,128,0.1)", marginBottom: "18px" }}>
                <i className="fa-solid fa-shield-check text-teal" style={{ fontSize: "24px" }}></i>
              </div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#0b192c", marginBottom: "12px" }}>
                Service Warranty
              </h2>
              <p style={{ color: "#4b5563", lineHeight: "1.65" }}>
                We stand behind the quality of our work. Star Cool offers up to 90 days of warranty on eligible spare parts and repair services, giving you greater confidence in every service.
              </p>
            </div>
          </div>
        </section>

        {/* Commercial HVAC & Refrigeration Solutions */}
        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="subtitle">Commercial HVAC & Refrigeration Contractors</span>
              <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#0b192c" }}>
                Trusted by Homes & Businesses Across Ernakulam
              </h2>
              <p style={{ color: "#4b5563" }}>
                From domestic split ACs and high-capacity refrigerators to commercial ductable systems, cassette air conditioners, and deep freezers, Star Cool delivers end-to-end HVAC solutions with original manufacturer parts.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "14px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#008080", fontWeight: "700" }}>Edappally</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: "6px 0 0" }}>Local doorstep service near Edappally Church</p>
              </div>
              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "14px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#008080", fontWeight: "700" }}>Kochi Bypass & Vyttila</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: "6px 0 0" }}>Quick 90-minute mobile technician arrival</p>
              </div>
              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "14px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#008080", fontWeight: "700" }}>Kaloor & Palarivattom</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: "6px 0 0" }}>Full residential & commercial coverage</p>
              </div>
              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "14px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#008080", fontWeight: "700" }}>Kakkanad & Aluva</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: "6px 0 0" }}>Office HVAC, server room cooling & AMC</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
