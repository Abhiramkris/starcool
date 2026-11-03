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
          <Link href="/" className="logo" id="header-logo" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }} onClick={handleLinkClick}>
            <Image 
              src="/logo-icon-white.png" 
              alt="Star Cool Logo" 
              width={46} 
              height={46} 
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="logo-text">
              STAR <span className="text-cyan">COOL</span>
            </span>
          </Link>

          <nav 
            className="nav-menu" 
            id="nav-menu"
            style={{
              display: menuOpen ? "flex" : undefined,
              flexDirection: menuOpen ? "column" : undefined,
              position: menuOpen ? "fixed" : undefined,
              top: menuOpen ? "72px" : undefined,
              left: menuOpen ? "0" : undefined,
              right: menuOpen ? "0" : undefined,
              bottom: menuOpen ? "0" : undefined,
              width: menuOpen ? "100%" : undefined,
              height: menuOpen ? "calc(100vh - 72px)" : undefined,
              backgroundColor: menuOpen ? "#0d5c56" : undefined,
              padding: menuOpen ? "28px 24px 60px" : undefined,
              gap: menuOpen ? "18px" : undefined,
              overflowY: menuOpen ? "auto" : undefined,
              zIndex: menuOpen ? 9999 : undefined,
              boxShadow: menuOpen ? "0 10px 30px rgba(0,0,0,0.3)" : undefined,
            }}
          >
            <Link 
              href="/about" 
              className="nav-link" 
              onClick={handleLinkClick}
              style={{ 
                color: "#ffffff", 
                fontSize: menuOpen ? "18px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
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
                  color: "#ffffff",
                  fontSize: menuOpen ? "18px" : undefined,
                  fontWeight: menuOpen ? "600" : undefined,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
                  paddingBottom: menuOpen ? "12px" : undefined
                }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Services</span>
                <i className={`fa-solid ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: "14px" }}></i>
              </button>
              
              <div 
                className="dropdown-menu"
                style={{
                  display: dropdownOpen ? "flex" : undefined,
                  opacity: dropdownOpen ? 1 : undefined,
                  visibility: dropdownOpen ? "visible" : undefined,
                  // Mobile adjustments:
                  position: menuOpen ? "static" : undefined,
                  transform: menuOpen ? "none" : dropdownOpen ? "translateX(-50%) translateY(4px)" : undefined,
                  minWidth: menuOpen ? "100%" : undefined,
                  boxShadow: menuOpen ? "none" : undefined,
                  backgroundColor: menuOpen ? "rgba(0, 0, 0, 0.15)" : undefined,
                  borderRadius: menuOpen ? "10px" : undefined,
                  border: menuOpen ? "none" : undefined,
                  padding: menuOpen ? "8px 12px" : undefined,
                  marginTop: menuOpen ? "8px" : undefined,
                  marginBottom: menuOpen ? "8px" : undefined,
                  gap: menuOpen ? "4px" : undefined
                }}
              >
                <Link href="/services" className="dropdown-item" onClick={handleLinkClick} style={{ color: "#ffffff", fontWeight: "700", borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.1)" : undefined }}>
                  All Services Directory
                </Link>
                <Link href="/services/ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  AC Service
                </Link>
                <Link href="/services/washing-machine" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  Washing Machine Service
                </Link>
                <Link href="/services/refrigerator" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  Refrigerator Service
                </Link>
                <Link href="/services/microwave" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  Microwave Service
                </Link>
                <Link href="/services/freezer" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  Freezer Service
                </Link>
                <Link href="/services/ductable-ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  Ductable AC Service
                </Link>
                <Link href="/services/cassette-ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#f1f5f9" : undefined }}>
                  Cassette AC Service
                </Link>
              </div>
            </div>

            <Link 
              href="/complaint-register" 
              className="nav-link" 
              onClick={handleLinkClick}
              style={{ 
                color: "#ffffff", 
                fontSize: menuOpen ? "18px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
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
                color: "#ffffff", 
                fontSize: menuOpen ? "18px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
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
                color: "#ffffff", 
                fontSize: menuOpen ? "18px" : undefined,
                fontWeight: menuOpen ? "600" : undefined,
                borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
                paddingBottom: menuOpen ? "12px" : undefined,
                width: menuOpen ? "100%" : undefined
              }}
            >
              Contact Us
            </Link>

            {menuOpen && (
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
                  style={{ textAlign: "center", justifyContent: "center", width: "100%", padding: "14px", fontSize: "16px", backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <i className="fa-solid fa-phone"></i> Call +91 85902 25627
                </a>
              </div>
            )}
          </nav>

          <Link href="/complaint-register" className="btn btn-primary nav-cta" id="nav-cta-btn">
            <i className="fa-regular fa-calendar-check"></i> Book Online
          </Link>

          <button 
            className="mobile-menu-toggle" 
            id="mobile-toggle" 
            aria-label="Toggle Navigation Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#ffffff", fontSize: "26px", zIndex: 10001, display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px" }}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </header>
    </>
  );
}
