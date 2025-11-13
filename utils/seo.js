export function buildMetaDescription(description, fallback = "") {
  const base = (description || fallback || "")
    .replace(/\s+/g, " ")
    .trim();

  if (!base) {
    return "";
  }

  if (base.length <= 150) {
    return base;
  }

  const truncated = base.slice(0, 147);
  const lastSpace = truncated.lastIndexOf(" ");
  const safe = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
  return `${safe.trim()}...`;
}
