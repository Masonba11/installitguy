// Service image mapping for Install It Guy
export const serviceImageMap = {
  "ceiling-fan-installation": [
    {
      src: "/images/installit-guy/ceilingfan.webp",
      alt: "Professional ceiling fan installation in Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "tv-mounting": [
    {
      src: "/images/installit-guy/tvwallmount.webp",
      alt: "TV wall mounting installation in Shelby NC",
      width: 600,
      height: 400,
    },
    {
      src: "/images/installit-guy/tvwallmount2.webp",
      alt: "Professional TV mounting service Shelby NC",
      width: 600,
      height: 400,
    },
    {
      src: "/images/installit-guy/tvwallmount3.webp",
      alt: "Clean TV wall mount installation Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "lighting-installation": [
    {
      src: "/images/installit-guy/chandler.jpg",
      alt: "Lighting installation services in Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "garage-door-opener-installation": [
    {
      src: "/images/installit-guy/garagedoor.jpg",
      alt: "Garage door opener installation Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "ring-doorbell-installation": [
    {
      src: "/images/installit-guy/securitycamera.jpg",
      alt: "Security camera installation service Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "faucet-toilet-installation": [
    {
      src: "/images/installit-guy/tolietinstall.jpg",
      alt: "Toilet installation service Shelby NC",
      width: 600,
      height: 400,
    },
    {
      src: "/images/installit-guy/sinkinstall.jpg",
      alt: "Faucet installation service Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "appliance-installation": [
    {
      src: "/images/installit-guy/filter.jpg",
      alt: "Appliance installation services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "mirror-installation": [
    {
      src: "/images/installit-guy/mirrorinstall.jpg",
      alt: "Mirror installation service Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "door-installation": [
    {
      src: "/images/installit-guy/mailboxinstall.png",
      alt: "Door installation services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "deck-fence-repair": [
    {
      src: "/images/installit-guy/outdoorinstall.jpg",
      alt: "Deck and fence repair services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "water-leak-repair": [
    {
      src: "/images/installit-guy/filter.jpg",
      alt: "Water leak repair services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "garbage-disposal-installation": [
    {
      src: "/images/installit-guy/sinkinstall.jpg",
      alt: "Garbage disposal installation Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "shelving-installation": [
    {
      src: "/images/installit-guy/organize1installitguy.png",
      alt: "Shelving installation services Shelby NC",
      width: 600,
      height: 400,
    },
    {
      src: "/images/installit-guy/organize2installitguy.webp",
      alt: "Professional shelving installation Shelby NC",
      width: 600,
      height: 400,
    },
    {
      src: "/images/installit-guy/organize3installitguy.png",
      alt: "Custom shelving installation Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "painting-services": [
    {
      src: "/images/installit-guy/rooftopinstall.jpg",
      alt: "Painting services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "flooring-installation": [
    {
      src: "/images/installit-guy/dresserinstall.jpg",
      alt: "Flooring installation services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "furniture-assembly": [
    {
      src: "/images/installit-guy/bedframe.jpg",
      alt: "Furniture assembly services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
  "gutter-cleaning": [
    {
      src: "/images/installit-guy/roofinstall.jpg",
      alt: "Gutter cleaning services Shelby NC",
      width: 600,
      height: 400,
    },
  ],
};

// Helper function to get images for a service
export function getServiceImages(serviceSlug) {
  return serviceImageMap[serviceSlug] || [];
}

// Helper function to get service name from slug
export function getServiceName(serviceSlug) {
  const serviceNames = {
    "tv-mounting": "TV Mounting",
    "ceiling-fan-installation": "Ceiling Fan Installation",
    "lighting-installation": "Lighting Installation",
    "garage-door-opener-installation": "Garage Door Opener Installation",
    "ring-doorbell-installation": "Ring Doorbell Installation",
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
