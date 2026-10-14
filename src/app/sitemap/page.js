"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { name: "Air Conditioner Repair & Servicing", path: "/services/ac", desc: "Leak fixing, gas refills, compressor replacement, filter cleaning, and breakdown repairs." },
  { name: "Washing Machine Service & Repair", path: "/services/washing-machine", desc: "Drum fixes, spin issues, water discharge problems, digital panel repairs, and sound minimization." },
  { name: "Refrigerator Repair & Maintenance", path: "/services/refrigerator", desc: "No cooling fixes, frost control errors, gas leak repairs, thermostat and relay changes." },
  { name: "Microwave Oven Service & Repair", path: "/services/microwave", desc: "Magnetron heating element replacements, glass tray motor fixes, and microswitch diagnostics." },
  { name: "Deep Freezer Repair & Servicing", path: "/services/freezer", desc: "Commercial chest freezer gas refilling, fan motor fixes, and temperature control installations." },
  { name: "Ductable AC Maintenance & Repair", path: "/services/ductable-ac", desc: "Blower motor cleaning, duct airflow optimization, and compressor replacement." },
  { name: "Cassette AC Service & Repair", path: "/services/cassette-ac", desc: "Ceiling unit deep cleaning, drainage pump clearing, and PCB repair." },
];

export default function SitemapPage() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Navbar />

      <main className="sitemap-main" style={{ minHeight: "80vh", paddingBottom: "70px" }}>
        {/* Breadcrumb section */}
        <div className="breadcrumb-nav">
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumbs-list">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <span className="current">Sitemap</span>
            </nav>
          </div>
        </div>

        <div className="container" style={{ maxWidth: "800px", padding: "60px 24px 30px" }}>
          <div className="section-header" style={{ marginBottom: "40px", textAlign: "center" }}>
            <span className="subtitle">Site Directory</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0b192c", margin: "10px 0" }}>Sitemap</h1>
            <p style={{ color: "#4b5563" }}>
              Quick access to all sections and home appliance repair services offered by Star Cool in Kochi.
            </p>
          </div>

          <div className="sitemap-content" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* Main Navigation Section */}
            <div 
              className="sitemap-card" 
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "30px",
                border: "1.5px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
              }}
            >
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#008080", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-compass"></i> Main Pages
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                <li>
                  <Link href="/" style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1.1rem" }} className="sitemap-link">
                    Home Page
                  </Link>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                    Book a service, browse repair stats, read why customers choose us, and view the curved interactive carousel.
                  </p>
                </li>
                <li>
                  <Link href="/about" style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1.1rem" }} className="sitemap-link">
                    About Us
                  </Link>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                    Learn about Star Cool, offering AC repair in Kochi, commercial HVAC services, refrigeration solutions, and professional AC maintenance in Ernakulam.
                  </p>
                </li>
                <li>
                  <Link href="/services" style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1.1rem" }} className="sitemap-link">
                    Services Directory
                  </Link>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                    Complete list of appliance repair solutions across Kochi and Edappally.
                  </p>
                </li>
                <li>
                  <Link href="/complaint-register" style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1.1rem" }} className="sitemap-link">
                    Complaint Register
                  </Link>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                    Register repair or service complaints online for priority technician dispatch within 90 minutes.
                  </p>
                </li>
                <li>
                  <Link href="/blog" style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1.1rem" }} className="sitemap-link">
                    Appliance Care & Maintenance Blog
                  </Link>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                    Expert guides on AC maintenance, refrigerator troubleshooting, and appliance servicing tips.
                  </p>
                </li>
                <li>
                  <Link href="/contact" style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1.1rem" }} className="sitemap-link">
                    Contact Us
                  </Link>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                    Office location near Edappally Church, customer support hotlines, and booking inquiries.
                  </p>
                </li>
              </ul>
            </div>

            {/* Service Routes Section */}
            <div 
              className="sitemap-card" 
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "30px",
                border: "1.5px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
              }}
            >
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#008080", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-screwdriver-wrench"></i> Our Appliance Repair Services
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="sitemap-grid">
                {services.map((service, index) => (
                  <div key={index} style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)", paddingBottom: "15px" }}>
                    <Link href={service.path} style={{ color: "#0b192c", fontWeight: "600", textDecoration: "none", fontSize: "1rem" }} className="sitemap-link">
                      {service.name}
                    </Link>
                    <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "0.85rem", lineHeight: "1.4" }}>
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer setSelectedService={setSelectedService} />
    </>
  );
}
