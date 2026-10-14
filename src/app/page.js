import HomeContent from "@/components/HomeContent";

export const metadata = {
  title: "AC Repair in Kochi | AC Service & Repairs | Star Cool",
  description: "Looking for AC repair in Kochi? Star Cool offers AC service in Kochi, refrigerator repair, washing machine repair, AC installation, and maintenance.",
  keywords: [
    "ac repair in kochi",
    "ac service in kochi",
    "ac repair kochi",
    "best AC repair service in Kochi",
    "home AC service in Kochi",
    "refrigerator repair",
    "washing machine repair",
    "AC installation and maintenance"
  ],
  alternates: {
    canonical: "https://starcoolkochi.com",
  },
  openGraph: {
    title: "AC Repair in Kochi | AC Service & Repairs | Star Cool",
    description: "Looking for AC repair in Kochi? Star Cool offers AC service in Kochi, refrigerator repair, washing machine repair, AC installation, and maintenance.",
    url: "https://starcoolkochi.com",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Star Cool - AC Repair & Home Appliance Service in Kochi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Repair in Kochi | AC Service & Repairs | Star Cool",
    description: "Looking for AC repair in Kochi? Star Cool offers AC service in Kochi, refrigerator repair, washing machine repair, AC installation, and maintenance.",
    images: ["/icon.png"],
  },
};

export default function Home() {
  return <HomeContent />;
}
