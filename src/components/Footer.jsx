import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="main-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image 
              src="/logo-icon-teal.png" 
              alt="Star Cool Logo" 
              width={34} 
              height={34} 
              style={{ objectFit: "contain" }}
            />
            <span className="logo-text">
              STAR <span className="text-cyan">COOL</span>
            </span>
          </Link>
          <p className="footer-desc">
            Professional and high-integrity multi-brand home appliances repair, servicing, and installation in Kochi. Experienced experts at your service.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link href="/services/ac">AC Service & Repair</Link>
            </li>
            <li>
              <Link href="/services/washing-machine">Washing Machine Repair</Link>
            </li>
            <li>
              <Link href="/services/refrigerator">Refrigerator Repair</Link>
            </li>
            <li>
              <Link href="/services/microwave">Microwave Oven Repair</Link>
            </li>
            <li>
              <Link href="/services/freezer">Deep Freezer Repair</Link>
            </li>
            <li>
              <Link href="/services/ductable-ac">Ductable AC Service</Link>
            </li>
            <li>
              <Link href="/services/cassette-ac">Cassette AC Service</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">All Services Directory</Link>
            </li>
            <li>
              <Link href="/complaint-register">Complaint Register</Link>
            </li>
            <li>
              <Link href="/blog">Maintenance Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Details</h3>
          <p>
            <i className="fa-solid fa-location-dot text-cyan"></i> Near Edappally Church, Kochi, Kerala - 682024
          </p>
          <p>
            <i className="fa-solid fa-phone text-cyan"></i> <a href="tel:+918590225627">+91 85902 25627</a> / <a href="tel:+918086301409">+91 80863 01409</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope text-cyan"></i> <a href="mailto:support@starcoolkochi.com">support@starcoolkochi.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; 2026 Star Cool Kochi. All rights reserved.</p>
          <p>Designed with ❤️ for premium customer experiences.</p>
        </div>
      </div>
    </footer>
  );
}
