import React from "react";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Register AC Repair & Service Complaints | Star Cool",
  description: "Register your AC repair or appliance service complaint with Star Cool in Kochi. Request assistance for AC, refrigerator, washing machine, and freezer issues.",
  keywords: [
    "AC repair in Kochi",
    "AC repair at home in Kochi",
    "home AC repair service in Kochi",
    "register appliance complaint Kochi",
    "emergency AC repair Edappally"
  ],
  alternates: {
    canonical: "https://starcoolkochi.com/complaint-register",
  },
  openGraph: {
    title: "Register AC Repair & Service Complaints | Star Cool",
    description: "Register your AC repair or appliance service complaint with Star Cool in Kochi. Request assistance for AC, refrigerator, washing machine, and freezer issues.",
    url: "https://starcoolkochi.com/complaint-register",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Register Appliance Complaint - Star Cool Kochi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register AC Repair & Service Complaints | Star Cool",
    description: "Register your AC repair or appliance service complaint with Star Cool in Kochi. Request assistance for AC, refrigerator, washing machine, and freezer issues.",
    images: ["/icon.png"],
  },
};

export default function ComplaintRegisterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://starcoolkochi.com/complaint-register#webpage",
        "url": "https://starcoolkochi.com/complaint-register",
        "name": "Register AC Repair & Service Complaints | Star Cool",
        "description": "Register your AC repair or appliance service complaint with Star Cool in Kochi. Request assistance for AC, refrigerator, washing machine, and freezer issues.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://starcoolkochi.com/#website",
          "name": "Star Cool Kochi",
          "url": "https://starcoolkochi.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://starcoolkochi.com/complaint-register#breadcrumb",
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
            "name": "Complaint Register",
            "item": "https://starcoolkochi.com/complaint-register"
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
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="subtitle font-bold text-teal">Rapid Doorstep Assistance</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0b192c", margin: "14px 0" }}>
              Register AC Repair & Service Complaints
            </h1>
            <p style={{ maxWidth: "720px", margin: "0 auto", color: "#4b5563", fontSize: "1.05rem", lineHeight: "1.7" }}>
              Dealing with an unexpected breakdown or cooling issue? Register your AC repair or appliance service complaint with Star Cool in Kochi. Request fast assistance for AC, refrigerator, washing machine, microwave, and freezer issues.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
              <i className="fa-solid fa-clock-rotate-left text-teal" style={{ fontSize: "22px", marginBottom: "8px" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#0b192c" }}>90 Min Arrival</h3>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "4px 0 0" }}>Prompt doorstep response in Kochi</p>
            </div>
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
              <i className="fa-solid fa-shield-halved text-teal" style={{ fontSize: "22px", marginBottom: "8px" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#0b192c" }}>90-Day Warranty</h3>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "4px 0 0" }}>On eligible parts & workmanship</p>
            </div>
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
              <i className="fa-solid fa-headset text-teal" style={{ fontSize: "22px", marginBottom: "8px" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#0b192c" }}>Direct Helpline</h3>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "4px 0 0" }}>+91 85902 25627</p>
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
