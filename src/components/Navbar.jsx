"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <span>
            <i className="fa-solid fa-circle-check text-cyan"></i> Kochi&apos;s #1 Rated Home Appliance Service Center
          </span>
          <div className="phone-link">
            <i className="fa-solid fa-phone"></i> Call Now:{" "}
            <a href="tel:+918590225627" style={{ color: "inherit", textDecoration: "none" }}>+91 85902 25627</a>
            {" / "}
            <a href="tel:+918086301409" style={{ color: "inherit", textDecoration: "none" }}>+91 80863 01409</a>
          </div>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="main-header">
        <div className="container header-container">
          <Link href="/" className="logo" id="header-logo" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }} onClick={handleLinkClick}>
            <Image 
              src="/logo-icon-blue.png" 
              alt="Star Cool Logo" 
              width={56} 
              height={56} 
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="logo-text" style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "0.5px", color: "#0a2540" }}>
              STAR <span className="text-cyan">COOL</span>
            </span>
          </Link>

          <nav 
            className={`nav-menu ${menuOpen ? "mobile-open" : ""}`} 
            id="nav-menu"
            style={menuOpen ? {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              top: "76px",
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "calc(100vh - 76px)",
              backgroundColor: "#ffffff",
              padding: "24px 20px 40px",
              gap: "14px",
              overflowY: "auto",
              zIndex: 9999,
              boxShadow: "0 10px 30px rgba(2, 132, 199, 0.15)",
              borderTop: "1px solid rgba(14, 165, 233, 0.15)"
            } : undefined}
          >
            <Link 
              href="/about" 
              className="nav-link" 
              onClick={handleLinkClick}
              style={{ 
                color: menuOpen ? "#0a2540" : undefined, 
                fontSize: menuOpen ? "17px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(14, 165, 233, 0.12)" : undefined,
                paddingBottom: menuOpen ? "12px" : undefined,
                width: menuOpen ? "100%" : undefined
              }}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => !menuOpen && setDropdownOpen(true)}
              onMouseLeave={() => !menuOpen && setDropdownOpen(false)}
              style={{ width: menuOpen ? "100%" : undefined }}
            >
              <button 
                type="button"
                className="nav-link dropdown-toggle" 
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  width: "100%", 
                  textAlign: "left",
                  color: menuOpen ? "#0a2540" : undefined,
                  fontSize: menuOpen ? "17px" : undefined,
                  fontWeight: menuOpen ? "600" : undefined,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: menuOpen ? "1px solid rgba(14, 165, 233, 0.12)" : undefined,
                  paddingBottom: menuOpen ? "12px" : undefined
                }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Services</span>
                <i className={`fa-solid ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: "14px", color: "var(--teal)" }}></i>
              </button>
              
              {/* Only render or expand when dropdownOpen is true */}
              {dropdownOpen && (
                <div 
                  className="dropdown-menu"
                  style={{
                    display: "flex",
                    opacity: 1,
                    visibility: "visible",
                    // Mobile adjustments:
                    position: menuOpen ? "static" : undefined,
                    transform: menuOpen ? "none" : "translateX(-50%) translateY(4px)",
                    minWidth: menuOpen ? "100%" : undefined,
                    boxShadow: menuOpen ? "none" : undefined,
                    backgroundColor: menuOpen ? "#f0f9ff" : undefined,
                    borderRadius: menuOpen ? "10px" : undefined,
                    border: menuOpen ? "1px solid rgba(14, 165, 233, 0.18)" : undefined,
                    padding: menuOpen ? "10px 14px" : undefined,
                    marginTop: menuOpen ? "8px" : undefined,
                    marginBottom: menuOpen ? "8px" : undefined,
                    gap: menuOpen ? "4px" : undefined
                  }}
                >
                  <Link href="/services" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#0369a1", fontWeight: "700", borderBottom: "1px solid rgba(14, 165, 233, 0.15)" }}>
                    All Services Directory
                  </Link>
                  <Link href="/services/ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    AC Service
                  </Link>
                  <Link href="/services/washing-machine" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    Washing Machine Service
                  </Link>
                  <Link href="/services/refrigerator" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    Refrigerator Service
                  </Link>
                  <Link href="/services/microwave" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    Microwave Service
                  </Link>
                  <Link href="/services/freezer" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    Freezer Service
                  </Link>
                  <Link href="/services/ductable-ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    Ductable AC Service
                  </Link>
                  <Link href="/services/cassette-ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#334155" }}>
                    Cassette AC Service
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/complaint-register" 
              className="nav-link" 
              onClick={handleLinkClick}
              style={{ 
                color: menuOpen ? "#0a2540" : undefined, 
                fontSize: menuOpen ? "17px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(14, 165, 233, 0.12)" : undefined,
                paddingBottom: menuOpen ? "12px" : undefined,
                width: menuOpen ? "100%" : undefined
              }}
            >
              Complaint Register
            </Link>
            <Link 
              href="/blog" 
              className="nav-link" 
              onClick={handleLinkClick}
              style={{ 
                color: menuOpen ? "#0a2540" : undefined, 
                fontSize: menuOpen ? "17px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(14, 165, 233, 0.12)" : undefined,
                paddingBottom: menuOpen ? "12px" : undefined,
                width: menuOpen ? "100%" : undefined
              }}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="nav-link" 
              onClick={handleLinkClick}
              style={{ 
                color: menuOpen ? "#0a2540" : undefined, 
                fontSize: menuOpen ? "17px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(14, 165, 233, 0.12)" : undefined,
                paddingBottom: menuOpen ? "12px" : undefined,
                width: menuOpen ? "100%" : undefined
              }}
            >
              Contact Us
            </Link>

            {menuOpen && (
              <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <Link 
                  href="/complaint-register" 
                  className="btn btn-gradient btn-lg" 
                  onClick={handleLinkClick}
                  style={{ textAlign: "center", justifyContent: "center", width: "100%", padding: "14px", fontSize: "16px" }}
                >
                  <i className="fa-regular fa-calendar-check"></i> Book Online
                </Link>
                <a 
                  href="tel:+918590225627" 
                  className="btn btn-secondary btn-lg"
                  style={{ textAlign: "center", justifyContent: "center", width: "100%", padding: "14px", fontSize: "16px", backgroundColor: "#f0f9ff", color: "var(--teal-dark)", borderColor: "rgba(14, 165, 233, 0.3)" }}
                >
                  <i className="fa-solid fa-phone"></i> Call +91 85902 25627
                </a>
              </div>
            )}
          </nav>

          <Link href="/complaint-register" className="btn btn-gradient nav-cta" id="nav-cta-btn">
            <i className="fa-regular fa-calendar-check"></i> Book Online
          </Link>

          <button 
            className="mobile-menu-toggle" 
            id="mobile-toggle" 
            aria-label="Toggle Navigation Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#0a2540", fontSize: "26px", zIndex: 10001, display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "8px", border: "1px solid rgba(14, 165, 233, 0.2)", backgroundColor: "#f0f9ff" }}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </header>
    </>
  );
}
