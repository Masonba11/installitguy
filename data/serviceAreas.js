export const serviceAreas = [
  // North Carolina
  { name: "Charlotte, NC", shortName: "Charlotte", slug: "charlotte-nc", state: "NC" },
  { name: "Shelby, NC", shortName: "Shelby", slug: "shelby-nc", state: "NC" },
  { name: "Kings Mountain, NC", shortName: "Kings Mountain", slug: "kings-mountain-nc", state: "NC" },
  { name: "Waxhaw, NC", shortName: "Waxhaw", slug: "waxhaw-nc", state: "NC" },
  { name: "Monroe, NC", shortName: "Monroe", slug: "monroe-nc", state: "NC" },
  { name: "Indian Trail, NC", shortName: "Indian Trail", slug: "indian-trail-nc", state: "NC" },
  { name: "Concord, NC", shortName: "Concord", slug: "concord-nc", state: "NC" },
  { name: "Harrisburg, NC", shortName: "Harrisburg", slug: "harrisburg-nc", state: "NC" },
  { name: "Kannapolis, NC", shortName: "Kannapolis", slug: "kannapolis-nc", state: "NC" },
  { name: "Gastonia, NC", shortName: "Gastonia", slug: "gastonia-nc", state: "NC" },
  { name: "Matthews, NC", shortName: "Matthews", slug: "matthews-nc", state: "NC" },
  { name: "Huntersville, NC", shortName: "Huntersville", slug: "huntersville-nc", state: "NC" },
  { name: "Pineville, NC", shortName: "Pineville", slug: "pineville-nc", state: "NC" },
  { name: "Belmont, NC", shortName: "Belmont", slug: "belmont-nc", state: "NC" },
  { name: "Mt Holly, NC", shortName: "Mt Holly", slug: "mount-holly-nc", state: "NC" },
  { name: "Mint Hill, NC", shortName: "Mint Hill", slug: "mint-hill-nc", state: "NC" },
  { name: "Boiling Springs, NC", shortName: "Boiling Springs", slug: "boiling-springs-nc", state: "NC" },
  { name: "Troutman, NC", shortName: "Troutman", slug: "troutman-nc", state: "NC" },

  // South Carolina
  { name: "Rock Hill, SC", shortName: "Rock Hill", slug: "rock-hill-sc", state: "SC" },
  { name: "Fort Mill, SC", shortName: "Fort Mill", slug: "fort-mill-sc", state: "SC" },
  { name: "York, SC", shortName: "York", slug: "york-sc", state: "SC" },
  { name: "Clover, SC", shortName: "Clover", slug: "clover-sc", state: "SC" },
  { name: "Lake Wylie, SC", shortName: "Lake Wylie", slug: "lake-wylie-sc", state: "SC" },
  { name: "Gaffney, SC", shortName: "Gaffney", slug: "gaffney-sc", state: "SC" },
  { name: "Tega Cay, SC", shortName: "Tega Cay", slug: "tega-cay-sc", state: "SC" },
  { name: "Indian Land, SC", shortName: "Indian Land", slug: "indian-land-sc", state: "SC" },
  { name: "Lancaster, SC", shortName: "Lancaster", slug: "lancaster-sc", state: "SC" },
  { name: "Blythewood, SC", shortName: "Blythewood", slug: "blythewood-sc", state: "SC" },
  { name: "Winnsboro, SC", shortName: "Winnsboro", slug: "winnsboro-sc", state: "SC" },
  { name: "Ridgeway, SC", shortName: "Ridgeway", slug: "ridgeway-sc", state: "SC" },
  { name: "Camden, SC", shortName: "Camden", slug: "camden-sc", state: "SC" },
  { name: "Columbia, SC", shortName: "Columbia", slug: "columbia-sc", state: "SC" },
  { name: "Blacksburg, SC", shortName: "Blacksburg", slug: "blacksburg-sc", state: "SC" },
  { name: "Richburg, SC", shortName: "Richburg", slug: "richburg-sc", state: "SC" },
  { name: "Great Falls, SC", shortName: "Great Falls", slug: "great-falls-sc", state: "SC" },
  { name: "McConnells, SC", shortName: "McConnells", slug: "mcconnells-sc", state: "SC" },
  { name: "Hickory Grove, SC", shortName: "Hickory Grove", slug: "hickory-grove-sc", state: "SC" },
  { name: "Sharon, SC", shortName: "Sharon", slug: "sharon-sc", state: "SC" },
];

export const serviceAreaSlugs = serviceAreas.map((area) => area.slug);

export const cityNameMap = serviceAreas.reduce((map, area) => {
  map[area.slug] = area.name;
  return map;
}, {});

export const cityShortNameMap = serviceAreas.reduce((map, area) => {
  map[area.slug] = area.shortName || area.name;
  return map;
}, {});

export const serviceAreasByState = {
  NC: serviceAreas.filter((area) => area.state === "NC"),
  SC: serviceAreas.filter((area) => area.state === "SC"),
};

const baseSlugMap = serviceAreas.reduce((map, area) => {
  map[area.slug] = area.slug;
  const base = area.slug.replace(/-(nc|sc)$/i, "");
  if (!map[base]) {
    map[base] = area.slug;
  }
  return map;
}, {});

export const resolveCitySlug = (slug) => {
  if (!slug) return slug;
  const normalized = slug.toLowerCase();
  return baseSlugMap[normalized] || normalized;
};
