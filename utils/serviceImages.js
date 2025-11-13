import { servicesContent } from "../data/servicesContent";

// Service image mapping for Install It Guy
export const serviceImageMap = {
  "tv-mounting": ["tvwallmount.webp", "tvwallmount2.webp", "tvwallmount3.webp"],
  "ceiling-fan-installation": ["ceilingfan.webp"],
  "lighting-installation": [
    "chandlier.jpg",
    "lighting2.JPG",
    "lightinginstall.JPG",
  ],
  "garage-door-opener-installation": ["garagedoor.jpg"],
  "ring-doorbell-installation": ["securitycamera.JPG"],
  "faucet-toilet-installation": [
    "tolietinstall.jpg",
    "sinkinstall.jpg",
    "sinkinstall.webp",
    "faucet.JPG",
  ],
  "appliance-installation": [
    "aplliance.JPG",
    "aplliance2.JPG",
    "homeappliacne4.jpeg",
  ],
  "blinds-installation": [
    "blindsinstallJPG.JPG",
    "blindsinstall2.JPG",
    "blinds3.JPG",
  ],
  "mirror-towel-bar-installation": [
    "mirorinstall.jpg",
    "towelbar.jpeg",
    "mirror2.JPG",
  ],
  "door-installation": ["doorinstallation.JPG", "dogdoorinstall.jpg"],
  "deck-fence-repair": ["deck.JPG", "outdoorinstall.jpg"],
  "garbage-disposal-installation": [
    "garbagedisposal.JPEG",
    "sinkinstall.jpg",
    "sinkinstall.webp",
  ],
  "shelving-installation": [
    "organize1installitguy.png",
    "orgnanize2installitguy.webp",
    "organize3installitguy.png",
    "organize4installitguy.jpg",
    "organize5installitguy.webp",
    "shelving.JPG",
    "shelving2.JPG",
  ],
  "painting-services": ["painting.JPG", "painting2.JPG"],
  "flooring-installation": ["flooring.jpeg"],
  "furniture-assembly": [
    "bedframe.jpg",
    "dresserinstall.jpg",
    "furnitureassembly.JPG",
  ],
  "home-maintenance": [
    "homemaintenance2.JPG",
    "homemaintenance3.JPG",
    "homemaintenance4.JPG",
  ],
  "epoxy-flooring": ["epoxy.JPG", "epoxy2.JPG", "epoxy3.JPG"],
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
