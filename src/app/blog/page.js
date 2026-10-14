import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AC Repair & Home Appliance Maintenance Blog | Star Cool",
  description: "Read expert guides on AC repair in Kochi, AC maintenance, refrigerator troubleshooting, washing machine care, and microwave oven servicing from Star Cool.",
  keywords: [
    "AC maintenance service in Kochi",
    "home AC service in Kochi",
    "refrigerator repair in Kochi",
    "Microwave Oven Service in Kochi",
    "appliance maintenance guides Kochi"
  ],
  alternates: {
    canonical: "https://starcoolkochi.com/blog",
  },
  openGraph: {
    title: "AC Repair & Home Appliance Maintenance Blog | Star Cool",
    description: "Read expert guides on AC repair in Kochi, AC maintenance, refrigerator troubleshooting, washing machine care, and microwave oven servicing from Star Cool.",
    url: "https://starcoolkochi.com/blog",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Star Cool Appliance Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Repair & Home Appliance Maintenance Blog | Star Cool",
    description: "Read expert guides on AC repair in Kochi, AC maintenance, refrigerator troubleshooting, washing machine care, and microwave oven servicing from Star Cool.",
    images: ["/icon.png"],
  },
};

export default function BlogPage() {
  const articles = [
    {
      title: "Essential AC Maintenance Tips for Kochi's Humid Climate",
      category: "AC Maintenance",
      slug: "ac-maintenance-kochi-summer",
      snippet: "Discover why regular filter washing, coil foaming, and drain pipe unclogging are critical to maintaining ice-cold airflow and preventing high electric bills in Ernakulam.",
      readTime: "4 min read",
      serviceLink: "/services/ac"
    },
    {
      title: "Why Is My Refrigerator Not Cooling? Common Causes & Fixes",
      category: "Refrigerator Repair",
      slug: "refrigerator-not-cooling-causes",
      snippet: "From frost buildup blocking evaporator air vents to faulty starting relays and refrigerant gas leaks, learn what steps you should take before calling a technician.",
      readTime: "5 min read",
      serviceLink: "/services/refrigerator"
    },
    {
      title: "Front Load vs Top Load Washing Machines: Troubleshooting Drum Noises",
      category: "Washing Machine Care",
      slug: "washing-machine-noise-troubleshooting",
      snippet: "Excessive shaking during the high-speed spin cycle usually points to worn shock absorbers or unlevel feet. Here is our technician guide to preserving machine life.",
      readTime: "3 min read",
      serviceLink: "/services/washing-machine"
    },
    {
      title: "Microwave Oven Not Heating? Understanding Magnetron & High-Voltage Parts",
      category: "Microwave Servicing",
      slug: "microwave-oven-not-heating-troubleshooting",
      snippet: "If your turntable spins and the interior light is on but your food remains cold, your magnetron or door safety switches likely need professional testing.",
      readTime: "4 min read",
      serviceLink: "/services/microwave"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://starcoolkochi.com/blog#blog",
        "url": "https://starcoolkochi.com/blog",
        "name": "AC Repair & Home Appliance Maintenance Blog | Star Cool",
        "description": "Read expert guides on AC repair in Kochi, AC maintenance, refrigerator troubleshooting, washing machine care, and microwave oven servicing from Star Cool.",
        "publisher": {
          "@type": "LocalBusiness",
          "name": "Star Cool Kochi",
          "url": "https://starcoolkochi.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://starcoolkochi.com/blog#breadcrumb",
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
            "name": "Blog",
            "item": "https://starcoolkochi.com/blog"
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

      <main style={{ minHeight: "80vh", paddingBottom: "70px" }}>
        {/* Breadcrumb section */}
        <div className="breadcrumb-nav">
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumbs-list">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <span className="current">Blog</span>
            </nav>
          </div>
        </div>

        <div className="container" style={{ maxWidth: "1000px", padding: "60px 24px 30px" }}>
          <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="subtitle font-bold text-teal">Guides & Diagnostic Insights</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0b192c", margin: "14px 0" }}>
              AC Repair & Home Appliance Maintenance Blog
            </h1>
            <p style={{ maxWidth: "750px", margin: "0 auto", color: "#4b5563", fontSize: "1.08rem", lineHeight: "1.7" }}>
              Read expert guides on AC repair in Kochi, AC maintenance, refrigerator troubleshooting, washing machine care, and microwave oven servicing from Star Cool.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginBottom: "60px" }}>
            {articles.map((article, index) => (
              <article 
                key={index} 
                className="feature-card" 
                style={{ 
                  borderRadius: "16px", 
                  padding: "32px", 
                  backgroundColor: "#ffffff", 
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#008080", background: "rgba(0,128,128,0.08)", padding: "4px 10px", borderRadius: "12px" }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                      {article.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0b192c", margin: "10px 0 12px", lineHeight: "1.4" }}>
                    {article.title}
                  </h2>
                  <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: "1.65" }}>
                    {article.snippet}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "18px", marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link 
                    href={article.serviceLink} 
                    style={{ color: "#008080", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none" }}
                  >
                    Need Expert Help? Book Repair &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ background: "linear-gradient(135deg, #008080 0%, #004d40 100%)", borderRadius: "18px", padding: "40px", color: "#ffffff", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "12px" }}>Need Immediate Appliance Assistance in Kochi?</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 24px", color: "rgba(255,255,255,0.9)", fontSize: "1.05rem" }}>
              Our mobile technicians arrive within 90 minutes anywhere in Kochi & Edappally.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/complaint-register" className="btn btn-primary" style={{ backgroundColor: "#ffffff", color: "#008080" }}>
                Register Complaint Online
              </Link>
              <a href="tel:+918590225627" className="btn btn-secondary" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
                <i className="fa-solid fa-phone"></i> +91 85902 25627
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
