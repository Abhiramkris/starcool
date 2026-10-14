import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Star Cool | AC Service & Repair in Kochi",
  description: "Contact Star Cool for AC service in Kochi, AC installation, fridge repair and washing machine repair. Enquire about professional appliance servicing today.",
  keywords: [
    "ac service in kochi",
    "AC service in Edappally",
    "AC service in Ernakulam",
    "AC installation in Kochi",
    "Star Cool contact number"
  ],
  alternates: {
    canonical: "https://starcoolkochi.com/contact",
  },
  openGraph: {
    title: "Contact Star Cool | AC Service & Repair in Kochi",
    description: "Contact Star Cool for AC service in Kochi, AC installation, fridge repair and washing machine repair. Enquire about professional appliance servicing today.",
    url: "https://starcoolkochi.com/contact",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Contact Star Cool Kochi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Star Cool | AC Service & Repair in Kochi",
    description: "Contact Star Cool for AC service in Kochi, AC installation, fridge repair and washing machine repair. Enquire about professional appliance servicing today.",
    images: ["/icon.png"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://starcoolkochi.com/contact#webpage",
        "url": "https://starcoolkochi.com/contact",
        "name": "Contact Star Cool | AC Service & Repair in Kochi",
        "description": "Contact Star Cool for AC service in Kochi, AC installation, fridge repair and washing machine repair. Enquire about professional appliance servicing today.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://starcoolkochi.com/#website",
          "name": "Star Cool Kochi",
          "url": "https://starcoolkochi.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://starcoolkochi.com/contact#breadcrumb",
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
            "name": "Contact Us",
            "item": "https://starcoolkochi.com/contact"
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
              <span className="current">Contact Us</span>
            </nav>
          </div>
        </div>

        <div className="container" style={{ maxWidth: "1000px", padding: "60px 24px 30px" }}>
          <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="subtitle font-bold text-teal">Get in Touch</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0b192c", margin: "14px 0" }}>
              Contact Star Cool | AC Service & Repair in Kochi
            </h1>
            <p style={{ maxWidth: "750px", margin: "0 auto", color: "#4b5563", fontSize: "1.05rem", lineHeight: "1.7" }}>
              Contact Star Cool for AC service in Kochi, AC installation, fridge repair and washing machine repair. Enquire about professional appliance servicing today.
            </p>
          </div>

          <div className="grid services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "50px" }}>
            <div className="feature-card" style={{ padding: "28px", borderRadius: "14px", backgroundColor: "#ffffff", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
              <div className="card-icon" style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", background: "rgba(0,128,128,0.1)", marginBottom: "16px" }}>
                <i className="fa-solid fa-location-dot text-teal" style={{ fontSize: "20px" }}></i>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0b192c", marginBottom: "8px" }}>
                Our Workshop & Office
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Near Edappally Church, Edappally, Kochi, Kerala - 682024, India
              </p>
            </div>

            <div className="feature-card" style={{ padding: "28px", borderRadius: "14px", backgroundColor: "#ffffff", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
              <div className="card-icon" style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", background: "rgba(0,128,128,0.1)", marginBottom: "16px" }}>
                <i className="fa-solid fa-phone-volume text-teal" style={{ fontSize: "20px" }}></i>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0b192c", marginBottom: "8px" }}>
                Phone Numbers
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "0.95rem" }}>
                Primary: <a href="tel:+918590225627" style={{ color: "#008080", fontWeight: "600", textDecoration: "none" }}>+91 85902 25627</a><br />
                Alternate: <a href="tel:+918086301409" style={{ color: "#008080", fontWeight: "600", textDecoration: "none" }}>+91 80863 01409</a>
              </p>
            </div>

            <div className="feature-card" style={{ padding: "28px", borderRadius: "14px", backgroundColor: "#ffffff", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
              <div className="card-icon" style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", background: "rgba(0,128,128,0.1)", marginBottom: "16px" }}>
                <i className="fa-regular fa-clock text-teal" style={{ fontSize: "20px" }}></i>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0b192c", marginBottom: "8px" }}>
                Working Hours
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Monday to Sunday: 8:00 AM – 9:00 PM<br />
                <span style={{ color: "#008080", fontWeight: "600" }}>Emergency Doorstep Support Available</span>
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <BookingForm />
      </main>

      <Footer />
    </>
  );
}
