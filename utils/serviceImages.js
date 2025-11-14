import { servicesContent } from "../data/servicesContent";

// Service image mapping for Install It Guy
export const serviceImageMap = {
  "tv-mounting": ["tvwallmount.webp", "tvwallmount2.webp", "tvwallmount3.webp"],
  "ceiling-fan-installation": [
    "ceilingfan1.3.jpg",
    "ceilngfan1.2.jpg",
    "ceilingfan.webp",
  ],
  "lighting-installation": [
    "chandlier.jpg",
    "lighting2.JPG",
    "lightinginstall.JPG",
  ],
  "garage-door-opener-installation": [
    "garagedoor.jpg",
    "garagedooropener1.2.jpg",
    "garagedooropener1.3.jpg",
  ],
  "ring-doorbell-installation": [
    "ringdoorbell.jpg",
    "ringdoorbell2.jpg",
    "ringdoorbell3.jpg",
  ],
  "faucet-toilet-installation": [
    "faucet1.1.jpg",
    "faucet1.2.jpg",
    "faucet1.3.jpg",
  ],
  "appliance-installation": [
    "appliance1.1.jpg",
    "appliance1.2.jpg",
    "appliance1.3.jpg",
  ],
  "blinds-installation": [
    "blinds3.JPG",
    "blindsinstallJPG.JPG",
    "blindsinstall2.JPG",
  ],
  "mirror-towel-bar-installation": [
    "mirrorinstall8.jpg",
    "mirror2.JPG",
    "towelbar.jpeg",
  ],
  "door-installation": ["door1.4.jpg", "door1.2.jpg", "door1.3.jpg"],
  "deck-fence-repair": ["deck1.1.jpg", "deck1.2.jpg", "deck1.3.jpg"],
  "garbage-disposal-installation": [
    "garbagedispo1.1.jpg",
    "garbagedispo1.2.jpg",
    "garbagedispo1.3.jpg",
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
  "flooring-installation": [
    "flooringinstall.jpg",
    "flooringinstall1.1.jpg",
    "flooring1.2.jpg",
  ],
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

// Hero image mapping for service pages
export const serviceHeroMap = {
  "tv-mounting": "herotv.png",
  "ceiling-fan-installation": "herofan.png",
  "lighting-installation": "herolighting.png",
  "garage-door-opener-installation": "herogaragedoor.png",
  "ring-doorbell-installation": "heroringdoorbell.png",
  "faucet-toilet-installation": "herotoliet.png",
  "appliance-installation": "herohomeappliance.png",
  "blinds-installation": "heroblinds.png",
  "mirror-towel-bar-installation": "heromirror.png",
  "door-installation": "herodoorinstall.png",
  "deck-fence-repair": "herodeck.png",
  "garbage-disposal-installation": "herogarbagedisposal.2.png",
  "shelving-installation": "heroshelving.png",
  "flooring-installation": "heroflooring.png",
  "furniture-assembly": "herofurnitureassembly.png",
  "home-maintenance": "herohomemaintenance.png",
};

// Helper function to get hero image for a service
export function getServiceHeroImage(serviceSlug) {
  return serviceHeroMap[serviceSlug] || null;
}

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
