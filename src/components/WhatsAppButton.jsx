"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname() || "";
  const phoneNumber = "918590225627";

  let message = "Hi Star Cool, I would like to enquire about home appliance repair service in Kochi.";

  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "").replace(/\/$/, "");
    const formattedName = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    message = `Hi Star Cool, I need ${formattedName} repair service in Kochi. Could you please share the details and availability?`;
  } else if (pathname === "/services") {
    message = "Hi Star Cool, I need appliance repair service in Kochi. Could you please assist me with the available services?";
  } else if (pathname === "/complaint-register") {
    message = "Hi Star Cool, I would like to register a repair complaint for my appliance.";
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp with Star Cool support"
      title="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
