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

      <main>
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

        {/* Dynamic Hero Section using standard Star Cool hero grid */}
        <section className="hero-section" style={{ padding: "60px 0 50px" }}>
          <div className="container">
            <div className="hero-header-grid" style={{ marginBottom: "0", alignItems: "flex-start" }}>
              
              {/* Left Column: Heading, Lead, Pricing & CTA */}
              <div className="service-hero-content">
                <span className="badge-tag">
                  <i className="fa-solid fa-certificate text-cyan"></i> Verified Doorstep Repair in Kochi
                </span>
                
                <h1 className="hero-title" id="main-heading" style={{ fontSize: "clamp(30px, 3.8vw, 44px)", marginBottom: "18px", lineHeight: "1.2" }}>
                  {service.h1}
                </h1>
                
                <p className="hero-subtitle" style={{ fontSize: "16.5px", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "22px" }}>
                  {service.lead}
                </p>

                <div className="service-price-pill">
                  <span>Pricing Estimate:</span>
                  <strong>{service.price}</strong>
                  <span className="price-sub">(Includes inspection & diagnosis)</span>
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

              {/* Right Column: Slide Card with Image & Details */}
              <div>
                <div 
                  className="slide-card" 
                  style={{ 
                    maxWidth: "100%", 
                    transform: "none", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    border: "1.5px solid rgba(0,0,0,0.1)",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden"
                  }}
                >
                  <div className="slide-img-wrapper" style={{ height: "300px" }}>
                    <Image 
                      src={service.img} 
                      alt={service.alt} 
                      width={600} 
                      height={300} 
                      priority
                      style={{ objectFit: "cover" }} 
                    />
                    <div className="service-tag">{service.price}</div>
                  </div>
                  <div className="slide-content">
                    <h3 className="slide-title">{service.sectionHeading}</h3>
                    <p className="slide-desc" style={{ marginBottom: "16px" }}>{service.body}</p>
                    <div className="service-guarantee-badge">
                      <i className="fa-solid fa-shield-halved text-cyan"></i>
                      <span>Up to 90 Days Service Warranty</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Coverage details */}
        <section className="services-overview-section" style={{ backgroundColor: "var(--bg-secondary)", padding: "70px 0" }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <span className="subtitle">Service Coverage</span>
              <h2>Comprehensive Inspection & Repair Checklist</h2>
              <p>Our experienced technicians follow stringent multi-point service protocols with genuine parts.</p>
            </div>
            
            <div className="grid services-grid" style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {service.coverage.map((item, idx) => (
                <div 
                  key={idx} 
                  className="feature-card" 
                  style={{ padding: "30px", border: "1.5px solid rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="card-icon"><i className="fa-solid fa-circle-check"></i></div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px", color: "var(--text-primary)" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Booking form (prefilled selection) */}
        <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />
      </main>

      <Footer />
    </>
  );
}
