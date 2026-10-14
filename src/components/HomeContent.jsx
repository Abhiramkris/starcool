"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function HomeContent() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-header-grid">
              <div>
                <h1 className="hero-title" id="main-heading">
                  Professional Home Appliance Repair Services in <span className="hero-highlight">Kochi</span>
                </h1>
              </div>
              
              <div className="hero-description-col">
                <p className="hero-subtitle">
                  At Star Cool, we make home appliance repairs simple, affordable, and hassle-free. Serving Kochi and Edappally, our skilled technicians handle everything from AC and washing machine repairs to refrigerator and microwave oven servicing. We offer convenient doorstep services, reliable repairs, and quality spare parts to keep your appliances running smoothly.
                </p>
                <div className="hero-actions">
                  <a href="#booking" className="btn btn-gradient btn-lg">
                    <i className="fa-solid fa-phone-volume"></i> Schedule Service
                  </a>
                  <Link href="/services" className="btn btn-secondary btn-lg">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>

            {/* 3D Curved Carousel (embedded in Hero) */}
            <Carousel setSelectedService={setSelectedService} />
          </div>
        </section>

        {/* Key Services Grid */}
        <section className="services-overview-section" id="services">
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Appliance Coverage</span>
              <h2>What We Fix with Expert Skills</h2>
              <p>
                Whether your AC isn&apos;t cooling, your washing machine has stopped working, or your refrigerator needs attention, Star Cool is here to help. Our experienced technicians provide dependable home appliance repair services in Edappally and across Kochi, ensuring your appliances get the care they need.
              </p>
            </div>

            <div className="grid services-grid">
              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-snowflake"></i>
                </div>
                <h3>Air Conditioners</h3>
                <p>Leak fixing, gas refills, compressor replacement, filter cleaning, and breakdown repairs in Kochi and Edappally.</p>
                <Link href="/services/ac" className="card-learn-more" style={{ display: 'inline-block', marginTop: '12px', color: '#008080', fontWeight: '600' }}>
                  Learn More &rarr;
                </Link>
              </div>

              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-circle-nodes"></i>
                </div>
                <h3>Washing Machines</h3>
                <p>Drum fixes, spin issues, water discharge problems, digital panel repairs, and sound minimization for front & top load.</p>
                <Link href="/services/washing-machine" className="card-learn-more" style={{ display: 'inline-block', marginTop: '12px', color: '#008080', fontWeight: '600' }}>
                  Learn More &rarr;
                </Link>
              </div>

              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-temperature-arrow-down"></i>
                </div>
                <h3>Refrigerators</h3>
                <p>No cooling fixes, frost control errors, gas leak repairs, thermostat and relay changes at your doorstep.</p>
                <Link href="/services/refrigerator" className="card-learn-more" style={{ display: 'inline-block', marginTop: '12px', color: '#008080', fontWeight: '600' }}>
                  Learn More &rarr;
                </Link>
              </div>

              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-microchip"></i>
                </div>
                <h3>Microwave Ovens</h3>
                <p>Convection, grill, and solo oven troubleshooting, heating magnetron replacements, and control keypad repairs.</p>
                <Link href="/services/microwave" className="card-learn-more" style={{ display: 'inline-block', marginTop: '12px', color: '#008080', fontWeight: '600' }}>
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Transparency */}
        <section className="why-us-section" id="why-us">
          <div className="container why-container">
            <div className="why-text">
              <span className="subtitle font-bold text-teal">Why Choose Star Cool</span>
              <h2>Professional Appliance Repairs with Complete Transparency</h2>
              <p>
                At Star Cool, we believe appliance repairs should be straightforward and stress-free. Our technicians carefully inspect your appliance, explain the issue, and discuss the repair process before getting started. With prompt service, clear communication, and dependable home appliance servicing in Kochi, we aim to make every repair experience smooth and worry-free.
              </p>
              
              <ul className="why-list">
                <li>
                  <div className="list-bullet">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <div>
                    <strong>Quick Response</strong>
                    <p>Dealing with a sudden AC breakdown? Our technicians respond quickly and provide doorstep AC repair services in Kochi and Edappally, helping you get your cooling system back to normal without unnecessary delays.</p>
                  </div>
                </li>
                <li>
                  <div className="list-bullet">
                    <i className="fa-solid fa-user-gear"></i>
                  </div>
                  <div>
                    <strong>Experienced Technicians</strong>
                    <p>Our trained technicians have over 7 years of experience handling AC repairs, HVAC maintenance, and home appliance servicing. We carefully inspect each problem and recommend practical repair solutions.</p>
                  </div>
                </li>
                <li>
                  <div className="list-bullet">
                    <i className="fa-solid fa-shield-check"></i>
                  </div>
                  <div>
                    <strong>Service Warranty</strong>
                    <p>We stand behind the quality of our work. Star Cool offers up to 90 days of warranty on eligible spare parts and repair services, giving you greater confidence in every service.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="why-stats">
              <div className="stat-card">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">98%</span>
                <span className="stat-label">Repair Success Rate</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">90m</span>
                <span className="stat-label">Average Arrival Time</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Genuine Spare Parts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Booking Form */}
        <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />
      </main>

      <Footer setSelectedService={setSelectedService} />
    </>
  );
}
