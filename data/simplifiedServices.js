// Core services - only these 8 should be indexed
export const CORE_SERVICES = [
  "handyman-services",
  "home-repair",
  "general-installation-services",
  "door-hardware-repair",
  "drywall-repair",
  "deck-fence-repair",
  "flooring-installation",
  "garage-door-opener-services",
];

// Mapping of minor services to their parent core service
export const MINOR_SERVICE_TO_PARENT = {
  "garbage-disposal-repair": "home-repair",
  "faucet-repair": "home-repair",
  "toilet-repair": "home-repair",
  "electrical-repairs": "home-repair",
  "ceiling-fan-installation": "general-installation-services",
  "tv-mounting": "general-installation-services",
  "furniture-assembly": "general-installation-services",
  "mirror-installation": "general-installation-services",
  "blind-installation": "general-installation-services",
  "lighting-installation": "general-installation-services",
  "security-camera-installation": "general-installation-services",
  "door-installation": "door-hardware-repair",
  "door-repair": "door-hardware-repair",
  "deck-repair": "deck-fence-repair",
  "fence-repair": "deck-fence-repair",
  "deck-installation": "deck-fence-repair",
  "fence-installation": "deck-fence-repair",
  "composite-decking-installation": "deck-fence-repair",
  "hardwood-floor-installation": "flooring-installation",
  "laminate-floor-installation": "flooring-installation",
  "vinyl-floor-installation": "flooring-installation",
  "tile-floor-installation": "flooring-installation",
  "epoxy-floor-installation": "flooring-installation",
  "garage-door-installation": "garage-door-opener-services",
  "garage-door-repair": "garage-door-opener-services",
  "garage-door-opener-installation": "garage-door-opener-services",
  "garage-door-opener-repair": "garage-door-opener-services",
};

// Simplified services - only 8 services
export const simplifiedServices = {
  "handyman-services": {
    name: "Handyman Services",
    slug: "handyman-services",
    description:
      "Complete handyman solutions for all your home repair and installation needs.",
  },
  "home-repair": {
    name: "Home Repair",
    slug: "home-repair",
    description: "Expert repairs for all areas of your home.",
  },
  "general-installation-services": {
    name: "General Installation Services",
    slug: "general-installation-services",
    description:
      "TV mounting, ceiling fans, shelving, blinds, fixtures, and more installation services.",
  },
  "door-hardware-repair": {
    name: "Door & Hardware Repair",
    slug: "door-hardware-repair",
    description: "Door installation, repair, and hardware services.",
  },
  "drywall-repair": {
    name: "Drywall Repair",
    slug: "drywall-repair",
    description: "Professional drywall repair and patching services.",
  },
  "deck-fence-repair": {
    name: "Deck & Fence Repair",
    slug: "deck-fence-repair",
    description: "Deck and fence repair and restoration services.",
  },
  "flooring-installation": {
    name: "Flooring Installation",
    slug: "flooring-installation",
    description: "Expert flooring installation services.",
  },
  "garage-door-opener-services": {
    name: "Garage Door & Opener Services",
    slug: "garage-door-opener-services",
    description: "Garage door and opener installation and repair services.",
  },
  "garbage-disposal-repair": {
    name: "Garbage Disposal Repair",
    slug: "garbage-disposal-repair",
    description: "Expert garbage disposal repair and installation services.",
  },
  "faucet-repair": {
    name: "Faucet Repair",
    slug: "faucet-repair",
    description: "Professional faucet repair and installation services.",
  },
  "toilet-repair": {
    name: "Toilet Repair",
    slug: "toilet-repair",
    description: "Expert toilet repair and installation services.",
  },
  "electrical-repairs": {
    name: "Electrical Repairs",
    slug: "electrical-repairs",
    description: "Professional electrical repair and installation services.",
  },
  "door-installation": {
    name: "Door Installation",
    slug: "door-installation",
    description: "Expert door installation and replacement services.",
  },
  "door-repair": {
    name: "Door Repair",
    slug: "door-repair",
    description: "Professional door repair services.",
  },
  "ceiling-fan-installation": {
    name: "Ceiling Fan Installation",
    slug: "ceiling-fan-installation",
    description: "Expert ceiling fan installation services.",
  },
  "tv-mounting": {
    name: "TV Mounting",
    slug: "tv-mounting",
    description: "Professional TV mounting and installation services.",
  },
  "furniture-assembly": {
    name: "Furniture Assembly",
    slug: "furniture-assembly",
    description: "Professional furniture assembly services.",
  },
  "mirror-installation": {
    name: "Mirror Installation",
    slug: "mirror-installation",
    description:
      "Professional mirror and bathroom hardware installation services.",
  },
  "blind-installation": {
    name: "Blind Installation",
    slug: "blind-installation",
    description:
      "Professional blind and window treatment installation services.",
  },
  "lighting-installation": {
    name: "Lighting Installation",
    slug: "lighting-installation",
    description: "Professional lighting fixture installation services.",
  },
  "security-camera-installation": {
    name: "Security Camera Installation",
    slug: "security-camera-installation",
    description:
      "Professional security camera and surveillance system installation services.",
  },
  "deck-repair": {
    name: "Deck Repair",
    slug: "deck-repair",
    description: "Professional deck repair and restoration services.",
  },
  "fence-repair": {
    name: "Fence Repair",
    slug: "fence-repair",
    description: "Professional fence repair and restoration services.",
  },
  "deck-installation": {
    name: "Deck Installation",
    slug: "deck-installation",
    description: "Professional deck installation and construction services.",
  },
  "fence-installation": {
    name: "Fence Installation",
    slug: "fence-installation",
    description: "Professional fence installation and construction services.",
  },
  "composite-decking-installation": {
    name: "Composite Decking Installation",
    slug: "composite-decking-installation",
    description: "Professional composite decking installation services.",
  },
  "hardwood-floor-installation": {
    name: "Hardwood Floor Installation",
    slug: "hardwood-floor-installation",
    description: "Professional hardwood floor installation services.",
  },
  "laminate-floor-installation": {
    name: "Laminate Floor Installation",
    slug: "laminate-floor-installation",
    description: "Professional laminate floor installation services.",
  },
  "vinyl-floor-installation": {
    name: "Vinyl Floor Installation",
    slug: "vinyl-floor-installation",
    description: "Professional vinyl floor installation services.",
  },
  "tile-floor-installation": {
    name: "Tile Floor Installation",
    slug: "tile-floor-installation",
    description: "Professional tile floor installation services.",
  },
  "epoxy-floor-installation": {
    name: "Epoxy Floor Installation",
    slug: "epoxy-floor-installation",
    description: "Professional epoxy floor installation services.",
  },
  "garage-door-installation": {
    name: "Garage Door Installation",
    slug: "garage-door-installation",
    description: "Professional garage door installation services.",
  },
  "garage-door-repair": {
    name: "Garage Door Repair",
    slug: "garage-door-repair",
    description: "Professional garage door repair services.",
  },
  "garage-door-opener-installation": {
    name: "Garage Door Opener Installation",
    slug: "garage-door-opener-installation",
    description: "Professional garage door opener installation services.",
  },
  "garage-door-opener-repair": {
    name: "Garage Door Opener Repair",
    slug: "garage-door-opener-repair",
    description: "Professional garage door opener repair services.",
  },
};

export const simplifiedServiceSlugs = Object.keys(simplifiedServices);

// Primary locations - only 5
export const PRIMARY_LOCATIONS = [
  { name: "Charlotte, NC", slug: "charlotte-nc" },
  { name: "Shelby, NC", slug: "shelby-nc" },
  { name: "Gastonia, NC", slug: "gastonia-nc" },
  { name: "Concord, NC", slug: "concord-nc" },
  { name: "Rock Hill, SC", slug: "rock-hill-sc" },
];
