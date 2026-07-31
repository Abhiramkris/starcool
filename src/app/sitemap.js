export default async function sitemap() {
  const baseUrl = "https://starcool.in";
  
  const routes = [
    "",
    "/sitemap",
    "/services/ac",
    "/services/washing-machine",
    "/services/refrigerator",
    "/services/microwave",
    "/services/freezer",
    "/services/dishwasher",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
