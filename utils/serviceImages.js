import { servicesContent } from "../data/servicesContent";

// Service image mapping for Install It Guy
export const serviceImageMap = {
  "tv-mounting": ["tvwallmount.webp", "tvwallmount2.webp", "tvwallmount3.webp"],
  "ceiling-fan-installation": ["ceilingfan.webp"],
  "lighting-installation": ["chandlier.jpg"],
  "garage-door-opener-installation": ["garagedoor.jpg"],
  "ring-doorbell-installation": ["securitycamera.jpg"],
  "faucet-toilet-installation": [
    "tolietinstall.jpg",
    "sinkinstall.jpg",
    "sinkinstall.webp",
  ],
  "appliance-installation": ["filter.jpg"],
  "mirror-installation": ["mirorinstall.jpg"],
  "deck-fence-repair": ["outdoorinstall.jpg"],
  "garbage-disposal-installation": ["sinkinstall.jpg", "sinkinstall.webp"],
  "shelving-installation": [
    "organize1installitguy.png",
    "orgnanize2installitguy.webp",
    "organize3installitguy.png",
    "organize4installitguy.jpg",
    "organize5installitguy.webp",
  ],
  "furniture-assembly": ["bedframe.jpg", "dresserinstall.jpg"],
  "gutter-cleaning": ["rooftopinstall.jpg"],
  "home-maintenance": [],
  "epoxy-flooring": [],
  "blinds-installation": [],
  "door-installation": [],
  "water-leak-repair": [],
  "painting-services": [],
  "flooring-installation": [],
  "fence-installation": [],
  "mirror-towel-bar-installation": ["mirorinstall.jpg"],
};

// Helper function to get images for a service
export function getServiceImages(serviceSlug) {
  return serviceImageMap[serviceSlug] || [];
}

// Helper function to get service name for display
export function getServiceName(serviceSlug) {
  return (
    servicesContent[serviceSlug]?.name ||
    servicesContent[`${serviceSlug}-installation`]?.name ||
    serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
}
