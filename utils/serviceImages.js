// Service image mapping for Install It Guy
export const serviceImageMap = {
  "tv-mounting": ["tvwallmount.webp", "tvwallmount2.webp", "tvwallmount3.webp"],
  "ceiling-fan-installation": ["ceilingfan.webp"],
  "lighting-installation": ["chandler.jpg"],
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
    "organize2installitguy.webp",
    "organize3installitguy.png",
    "organize4installitguy.jpg",
    "organize6installitguy.jpg",
  ],
  "furniture-assembly": ["bedframe.jpg", "dresserinstall.jpg"],
  "gutter-cleaning": ["rooftopinstall.jpg"],
};

// Helper function to get images for a service
export function getServiceImages(serviceSlug) {
  return serviceImageMap[serviceSlug] || [];
}

// Helper function to get service name for display
export function getServiceName(serviceSlug) {
  const serviceNames = {
    "tv-mounting": "TV Mounting",
    "ceiling-fan-installation": "Ceiling Fan Installation",
    "lighting-installation": "Lighting Installation",
    "garage-door-opener-installation": "Garage Door Opener Installation",
    "ring-doorbell-installation": "Security Camera Installation",
    "faucet-toilet-installation": "Faucet & Toilet Installation",
    "appliance-installation": "Appliance Installation",
    "mirror-installation": "Mirror Installation",
    "door-installation": "Door Installation",
    "deck-fence-repair": "Deck & Fence Repair",
    "water-leak-repair": "Water Leak Repair",
    "garbage-disposal-installation": "Garbage Disposal Installation",
    "shelving-installation": "Shelving Installation",
    "painting-services": "Painting Services",
    "flooring-installation": "Flooring Installation",
    "furniture-assembly": "Furniture Assembly",
    "gutter-cleaning": "Gutter Cleaning",
  };

  return (
    serviceNames[serviceSlug] ||
    serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
}
