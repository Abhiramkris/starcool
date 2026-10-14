"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function ServiceDetailClient({ service }) {
  const [selectedService, setSelectedService] = useState(service.formKey || service.slug);

  return (
    <>
      <Navbar />

      <main className="service-detail-page">
        {/* Breadcrumb section */}
        <div className="breadcrumb-nav">
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumbs-list">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <Link href="/services">Services</Link>
              <span className="separator">/</span>
              <span className="current">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-content">
              <div className="badge-pill">
                <i className="fa-solid fa-certificate text-cyan"></i> Verified Doorstep Repair in Kochi
              </div>
              <h1 className="service-title">{service.h1}</h1>
              <p className="service-lead">{service.lead}</p>
              
              <div className="service-price-tag">
                <span className="price-label">Pricing Estimate:</span>
                <span className="price-value">{service.price}</span>
                <span className="price-sub"> (Includes inspection & diagnosis)</span>
              </div>

              <div className="hero-actions">
                <a href="#booking" className="btn btn-gradient btn-lg">
                  <i className="fa-regular fa-calendar-check"></i> Book Doorstep Service
                </a>
                <a href="tel:+918590225627" className="btn btn-secondary btn-lg">
                  <i className="fa-solid fa-phone"></i> +91 85902 25627
                </a>
              </div>
            </div>

            <div className="service-hero-visual">
              <div className="service-image-card">
                <Image 
                  src={service.img} 
                  alt={service.alt} 
                  width={500} 
                  height={400} 
                  priority
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "16px" }}
                />
                <div className="service-guarantee-badge">
                  <i className="fa-solid fa-shield-halved text-cyan"></i>
                  <span>Up to 90 Days Service Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description Section */}
        <section className="service-info-section" style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div className="service-info-card" style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 4px 25px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.06)",
              marginBottom: "50px"
            }}>
              <span className="subtitle font-bold text-teal" style={{ display: "block", marginBottom: "8px" }}>Expert Diagnosis & Solutions</span>
              <h2 style={{ fontSize: "1.85rem", fontWeight: "700", color: "#0b192c", marginBottom: "16px" }}>
                {service.sectionHeading}
              </h2>
              <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "#374151" }}>
                {service.body}
              </p>
            </div>

            {/* Service Coverage Grid */}
            <div className="section-header" style={{ marginBottom: "32px", textAlign: "left" }}>
              <span className="subtitle">Service Coverage</span>
              <h2>Comprehensive Inspection & Repair Checklist</h2>
              <p>Our experienced technicians follow stringent multi-point service protocols with genuine parts.</p>
            </div>

            <div className="grid services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {service.coverage.map((item, idx) => (
                <div key={idx} className="feature-card" style={{ padding: "28px" }}>
                  <div className="card-icon" style={{ marginBottom: "16px" }}>
                    <i className="fa-solid fa-circle-check text-teal"></i>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#0b192c" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <BookingForm 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />
      </main>

      <Footer setSelectedService={setSelectedService} />
    </>
  );
}
