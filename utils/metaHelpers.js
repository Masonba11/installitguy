/**
 * Truncate meta description to 150 characters max
 * @param {string} description - The description to truncate
 * @param {number} maxLength - Maximum length (default 150)
 * @returns {string} Truncated description
 */
export function truncateMetaDescription(description, maxLength = 150) {
  if (!description) return "";
  if (description.length <= maxLength) return description;

  // Truncate at the last space before maxLength to avoid cutting words
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength - 20) {
    // If we found a space reasonably close to the end, cut there
    return truncated.substring(0, lastSpace) + "...";
  }

  // Otherwise just cut at maxLength
  return truncated.substring(0, maxLength - 3) + "...";
}
