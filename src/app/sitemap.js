export default async function sitemap() {
  const baseUrl = "https://starcoolkochi.com";
  
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/ac", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/washing-machine", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/refrigerator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/microwave", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/freezer", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/ductable-ac", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/cassette-ac", priority: 0.8, changeFrequency: "weekly" },
    { path: "/complaint-register", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/sitemap", priority: 0.5, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
